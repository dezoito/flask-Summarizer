from flask.ext.wtf import Form
from wtforms import StringField, BooleanField, TextAreaField
from wtforms.validators import DataRequired

class FormResumo(Form):
    texto = TextAreaField('texto', validators=[DataRequired()])
    # remember_me = BooleanField('remember_me', default=False)
