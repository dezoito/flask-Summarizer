from flask import render_template, flash, redirect
from app import app
from .forms import FormResumo

@app.route('/')
@app.route('/index')
def index():
    user = {'nickname': 'Miguel'}  # fake user
    return render_template('index.html',
                           title='Home',
                           user=user)

@app.route('/form_resumo', methods=['GET', 'POST'])
def form_resumo():
    form = FormResumo()
    rc = {}
    if form.validate_on_submit():
            # flash('Texto digitado:%s ' %
            #       (form.texto.data))
            # return redirect('/index')
            rc['texto_resumido'] = form.texto.data



    return render_template('form_resumo.html',
                           title='Resumir',
                           form=form,
                           rc = rc)



