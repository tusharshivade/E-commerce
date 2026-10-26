import os
import sqlite3
import uuid
from flask import Flask, jsonify, request, send_from_directory

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

# Resolve frontend directory path (supporting both root execution and backend/ execution)
FRONTEND_DIR = os.path.abspath(os.path.join(BASE_DIR, '..', 'frontend'))
if not os.path.exists(FRONTEND_DIR):
    FRONTEND_DIR = os.path.abspath(os.path.join(BASE_DIR, 'frontend'))

# Resolve database path
DB_PATH = os.path.abspath(os.path.join(BASE_DIR, '..', 'database', 'ecommerce.db'))
if not os.path.exists(os.path.dirname(DB_PATH)):
    DB_PATH = os.path.abspath(os.path.join(BASE_DIR, 'database', 'ecommerce.db'))

app = Flask(
    __name__,
    static_folder=FRONTEND_DIR,
    template_folder=FRONTEND_DIR,
    static_url_path='',
)


def get_db_connection():
    if not os.path.exists(DB_PATH):
        return None
    try:
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        return conn
    except Exception:
        return None


@app.route('/')
def home():
    if os.path.exists(os.path.join(FRONTEND_DIR, 'index.html')):
        return send_from_directory(FRONTEND_DIR, 'index.html')
    return jsonify(message='Frontend not found'), 404


@app.route('/health')
def health():
    return jsonify(status='ok')


@app.route('/api/health')
def api_health():
    db_connected = False
    conn = get_db_connection()
    if conn:
        try:
            conn.execute('SELECT 1').fetchone()
            db_connected = True
        finally:
            conn.close()

    return jsonify(
        status='ok',
        service='nova-ecommerce-backend',
        database={'connected': db_connected},
    )


@app.route('/api/products', methods=['GET'])
def get_products():
    category = request.args.get('category')
    conn = get_db_connection()

    if conn:
        try:
            if category:
                cursor = conn.execute(
                    'SELECT * FROM products WHERE category LIKE ?',
                    (f'%{category}%',),
                )
            else:
                cursor = conn.execute('SELECT * FROM products')
            rows = cursor.fetchall()
            products = [dict(row) for row in rows]
            return jsonify(products=products, count=len(products))
        finally:
            conn.close()

    return jsonify(
        products=[],
        count=0,
        message='Database offline or not initialized',
    )


@app.route('/api/categories', methods=['GET'])
def get_categories():
    conn = get_db_connection()
    if conn:
        try:
            cursor = conn.execute('SELECT * FROM categories')
            rows = cursor.fetchall()
            categories = [dict(row) for row in rows]
            return jsonify(categories=categories)
        finally:
            conn.close()

    return jsonify(categories=[])


@app.route('/api/orders', methods=['POST'])
def create_order():
    data = request.get_json(silent=True) or {}
    customer_name = data.get('name', 'Guest')
    customer_email = data.get('email', 'guest@example.com')
    items = data.get('items', [])
    total_amount = data.get('total', 0)
    address = data.get('address', 'N/A')
    city = data.get('city', 'N/A')
    state = data.get('state', 'N/A')
    pincode = data.get('pincode', 'N/A')
    payment_method = data.get('payment_method', 'cod')

    order_number = f"ORD-{uuid.uuid4().hex[:8].upper()}"

    conn = get_db_connection()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.execute(
                '''
                INSERT INTO orders (
                    order_number, customer_name, customer_email,
                    address, city, state, pincode, total_amount, payment_method, status
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''',
                (
                    order_number, customer_name, customer_email,
                    address, city, state, pincode, total_amount, payment_method, 'confirmed'
                ),
            )
            order_id = cursor.lastrowid

            for item in items:
                cursor.execute(
                    '''
                    INSERT INTO order_items (order_id, product_id, product_name, price, quantity)
                    VALUES (?, ?, ?, ?, ?)
                    ''',
                    (
                        order_id,
                        item.get('id', 'custom'),
                        item.get('name', 'Product'),
                        item.get('price', 0),
                        item.get('quantity', 1),
                    ),
                )
            conn.commit()
        finally:
            conn.close()

    return jsonify(
        success=True,
        order_number=order_number,
        message='Order placed successfully',
    ), 201


@app.route('/<path:filename>')
def serve_frontend_assets(filename):
    if os.path.exists(os.path.join(FRONTEND_DIR, filename)):
        return send_from_directory(FRONTEND_DIR, filename)
    return jsonify(error='Asset not found'), 404


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=True)
