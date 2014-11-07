from flask import render_template, flash, Response, redirect, request, jsonify
import summarize, pprint
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
    rc = {}
    entrada = request.form["texto"]
    texto_resumido = summarize.summarize_text(entrada, block_sep='\n')
    return Response("tentando retorno de texto resumido", mimetype="text/text")
    # return Response(texto_resumido, mimetype="text/text")

    # debugging request
    # str = pprint.pformat(request.environ, depth=5)
    # return Response(str, mimetype="text/text")
    # return jsonify(texto_resumido)


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



