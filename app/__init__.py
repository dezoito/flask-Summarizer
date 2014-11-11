from flask import Flask
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config.from_object('config')

from app import views

# the toolbar is only enabled in debug mode:
app.debug = True
toolbar = DebugToolbarExtension(app)
