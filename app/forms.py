from flask.ext.wtf import Form
from wtforms import StringField, SelectField, TextAreaField
from wtforms.validators import DataRequired

class FormResumo(Form):
    texto = TextAreaField('texto', validators=[DataRequired()])
    # algorythm = SelectField(u'Algorythm', choices=['summarizer', 'textrank'])
    # remember_me = BooleanField('remember_me', default=False)
