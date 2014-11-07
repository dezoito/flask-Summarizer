from flask import render_template, flash, redirect, request
import summarize
from app import app
from .forms import FormResumo



@app.route('/', methods=['GET', 'POST'])
@app.route('/form_resumo', methods=['GET', 'POST'])
def form_resumo():
    form = FormResumo()
    rc = {}
    if form.validate_on_submit():
            # flash('Texto digitado:%s ' % (form.texto.data))
            # return redirect('/index')

            # summarization happens here
            entrada = form.texto.data
            texto_resumido = summarize.summarize_text(entrada, block_sep='\n')
            rc['entrada'] = entrada
            rc['texto_resumido'] = texto_resumido

    return render_template('form_resumo.html',
                           form=form,
                           rc = rc)

@app.route('/ajax_resumo', methods=['POST'])
# check: http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xv-ajax
def ajax_resumo():
    # rc = {}
    # entrada = request.form['texto']
    # texto_resumido = summarize.summarize_text(entrada, block_sep='\n')
    # return texto_resumido
    return "success"


    # if form.validate_on_submit():
    #         # flash('Texto digitado:%s ' % (form.texto.data))
    #         # return redirect('/index')

    #         # summarization happens here
    #         entrada = form.texto.data
    #         texto_resumido = summarize.summarize_text(entrada, block_sep='\n')
    #         rc['entrada'] = entrada
    #         rc['texto_resumido'] = texto_resumido

    # return render_template('ajax_resumo.html',
    #                        form=form,
    #                        rc = rc)



