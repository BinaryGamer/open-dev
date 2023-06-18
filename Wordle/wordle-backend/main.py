from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "<p>Hello, World!</p>"

@app.route('/api/wordle/<word>', methods=["GET"])
def makeGuess(word):
    r = requests.post("https://wordle-api.vercel.app/api/wordle", json={"guess": word})
    return jsonify(r.json()), r.status_code


app.run(port=3001, debug=True)