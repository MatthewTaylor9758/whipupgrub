from flask import Flask
from config import Config
from flask_migrate import Migrate
from flask_cors import CORS
import os
# from flask_sqlalchemy import SQLAlchemy (don't need this since I am going to import
# the SQLAlchemy object and the Model classes I create, based on the base "Model" class
# provided by the SQLAlchemy object, into here) The line below is the new line used
from .models import db, User, Food, Pantry
from .api.api_test import api_test

app = Flask(__name__)

app.config.from_object(Config)
app.register_blueprint(api_test, url_prefix='/api/tests')
db.init_app(app)
Migrate(app, db)
CORS(app)


# *** for possible addiition later on ***
# @app.after_request
# def inject_csrf_token(response):
#     response.set_cookie('csrf_token',
#         generate_csrf(),
#         secure=True if os.environ.get('FLASK_ENV') else False,
#         samesite='Strict' if os.environ.get('FLASK_ENV') else None,
#         httponly=True)
#     return response

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        print("favicon route_____")
        return app.send_static_file('favicon.ico')
    print("index route_____")
    return app.send_static_file('index.html')

# The above is apparently how you tie the flask server to the react-redux front end
# Have to set up CORS next (use FFStockpile for reference)


















# db = SQLAlchemy(app) (don't need this for the same reason as on line 3-5)

# print('the secret key is: ', app.config['SECRET_KEY'])

# @app.route('/')
# @app.route('/home')
# def home():
#     return '<h1>Home</h1>'

# @app.route('/about')
# def about():
#     return '<h1>About</h1>'

# @app.route('/item/<int:id>')
# def item(id):
#     return f'<h1>Item {id}</h1>'

# @app.before_first_request
# def before_first_request_function():
#     print('before_first_request happens once.')

# @app.before_request
# def before_request_function():
#     print('before_request is running properly.')

# @app.after_request
# def after_request_function():
#     print('after_request is functioning correctly.')

# @app.after_request
# def after_request_function(response):
#     print("after_request is running")




# @app.route('/')
# def hello():
#     return f'<h1>{app.config["GREETING"]}</h1>'
