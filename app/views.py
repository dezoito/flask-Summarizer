from flask import render_template, flash, Response, redirect, request
import summarize, textrank
from app import app
from .forms import FormResumo

@app.route('/', methods=['GET', 'POST'])
@app.route('/form_resumo', methods=['GET', 'POST'])
def form_resumo():
    """
    loads entire page with the form and summary (is text was posted)
    """
    form = FormResumo()
    rc = {}
    if form.validate_on_submit():
            # flash('Texto digitado:%s ' % (form.texto.data))
            # return redirect('/index')

            # summarization happens here
            entrada = form.texto.data
            texto_resumido = make_summary(entrada, form.Algorithm.data)
            rc['entrada'] = entrada
            rc['texto_resumido'] = texto_resumido

    return render_template('form_resumo.html',
                           form=form,
                           rc = rc)


# check: http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xv-ajax
@app.route('/ajax_resumo', methods=['POST'])
def ajax_resumo():
    """
    returns summary string to be loaded via ajax callback
    """
    rc = {}
    entrada = request.form["texto"]
    texto_resumido = make_summary(entrada)
    return Response(str(texto_resumido), mimetype="text/text")


def make_summary(entrada, algo="summarize"):
    """
    Uses summary module to reduce text.

    IMPORTANT:
    The textrank Algorithm produces better results, but takes awfully
    long! (from 5000 to 18000ms in tests)

    Therefore, we are going to use the summarize algo for this API
    """
    if algo == "summarize":
        return summarize.summarize_text(entrada, block_sep='\n')
    else:
        return textrank.extractSentences(entrada)







