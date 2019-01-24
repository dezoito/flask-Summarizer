from flask_wtf import Form
from wtforms import StringField, SelectField, TextAreaField
from wtforms.validators import DataRequired


class FormResumo(Form):
    article = TextAreaField('article', validators=[
                          DataRequired()],
                          render_kw={'style': 'background-color: azure'})
    algorithm = SelectField(u'Algorithm', choices=[(
        'summarize', 'summarize'), ('textrank', 'textrank')])
    # remember_me = BooleanField('remember_me', default=False)
