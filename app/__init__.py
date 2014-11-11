from flask import Flask
from werkzeug.contrib.fixers import ProxyFix # for gunicorn
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config.from_object('config')
app.wsgi_app = ProxyFix(app.wsgi_app) # for gunicorn

from app import views

# the toolbar is only enabled in debug mode:
app.debug = True
toolbar = DebugToolbarExtension(app)
