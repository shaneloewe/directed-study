from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def home():
    return jsonify({"test": ["1", "2", "3"]})


@app.route('/about')
def about():
    return jsonify({'message': 'Hello from serverless Flask!'})
