import Flask

app = piFlask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
