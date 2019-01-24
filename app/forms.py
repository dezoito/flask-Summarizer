from flask_wtf import Form
from wtforms import StringField, SelectField, TextAreaField
from wtforms.validators import DataRequired


class FormResumo(Form):
    texto = TextAreaField('article', validators=[
                          DataRequired()],
                          render_kw={'style': 'background-color: azure'})
    Algorithm = SelectField(u'algorithm', choices=[(
        'summarize', 'summarize'), ('textrank', 'textrank')])
    # remember_me = BooleanField('remember_me', default=False)
