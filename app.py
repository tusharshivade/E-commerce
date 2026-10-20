import os
from flask import Flask, jsonify, render_template, send_from_directory

app = Flask(__name__, static_folder='static')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/health')
def health():
    return jsonify(status='ok')


@app.route('/<path:filename>')
def serve_template_assets(filename):
    if os.path.exists(os.path.join('templates', filename)):
        return send_from_directory('templates', filename)
    if os.path.exists(os.path.join('static', filename)):
        return send_from_directory('static', filename)
    return jsonify(error='Not found'), 404
