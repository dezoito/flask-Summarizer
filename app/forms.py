from flask_wtf import Form
from wtforms import StringField, SelectField, TextAreaField
from wtforms.validators import DataRequired


class FormResumo(Form):
    texto = TextAreaField('texto', validators=[DataRequired()])
    Algorithm = SelectField(u'Algorithm', choices=[(
        'summarize', 'summarize'), ('textrank', 'textrank (no AJAX)')])
    # remember_me = BooleanField('remember_me', default=False)
