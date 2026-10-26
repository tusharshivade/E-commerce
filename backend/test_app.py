try:
    from backend.app import app
except ImportError:
    from app import app


def test_home_returns_200():
    client = app.test_client()
    response = client.get('/')
    assert response.status_code == 200


def test_health_returns_ok():
    client = app.test_client()
    response = client.get('/health')
    assert response.status_code == 200
    assert response.get_json() == {'status': 'ok'}


def test_api_products_returns_200():
    client = app.test_client()
    response = client.get('/api/products')
    assert response.status_code == 200
    data = response.get_json()
    assert 'products' in data
    assert isinstance(data['products'], list)


def test_api_categories_returns_200():
    client = app.test_client()
    response = client.get('/api/categories')
    assert response.status_code == 200
    data = response.get_json()
    assert 'categories' in data


def test_create_order_returns_201():
    client = app.test_client()
    response = client.post(
        '/api/orders',
        json={
            'name': 'Test User',
            'email': 'test@example.com',
            'total': 4999,
            'items': [{'id': 'prod-shoe', 'name': 'Urban Runner', 'price': 4999, 'quantity': 1}],
        },
    )
    assert response.status_code == 201
    data = response.get_json()
    assert data['success'] is True
    assert 'order_number' in data
