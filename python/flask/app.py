from flask import Flask
app = Flask(__name__)

@app.route("/hi")
@app.route("/hello")
@app.route("/")
def index():
    return "<h1>Hello world!</h1>"


@app.route("/greet",defaults={"name":"Programmer"})
@app.route("/greet/<name>")
def greet(name):
    return '<h1>Hello, Flask!%s</h1>' % name


@app.route("/some")
def some():
    return "<h2> test some!</h2>"


if __name__ == '__main__':    
    # 开启debug模式方法二
    app.run(debug=True)