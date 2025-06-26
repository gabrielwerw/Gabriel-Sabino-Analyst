
from flask import Flask, send_from_directory
from pyngrok import ngrok

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_file(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    public_url = ngrok.connect(5000)
    print("🔗 Link público:", public_url)
    app.run(port=5000)
