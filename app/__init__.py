# Import flask and template operators
from flask import Flask, render_template

# Define the WSGI application object
app = Flask(__name__)
print "running"


@app.route('/', methods=['GET'])
def run():
    print "connection"
    return render_template('index.html')

