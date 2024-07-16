from flask import Flask,render_template,send_from_directory
from post import Post
from datetime import datetime
URL="https://api.npoint.io/c790b4d5cab58020d391"
new_post = Post(URL)
now = datetime.now()
year=now.year
app = Flask(__name__,static_folder='static')
@app.route("/")
def home():
    return render_template("index.html",data = new_post.response, year = year)

@app.route("/projects/")
def post():
    return render_template("projects.html",year = year)
@app.route("/contact")
def contact():

    return render_template("contact.html",year = year)
@app.route("/resume")
def resume():

    return render_template("resume.html",year = year)

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == "__main__":
    app.run(debug=True)