from flask import render_template, flash, redirect
import summarize
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
            texto_fixo = """
            Em uma sala de estar apertada no sul da Turquia, um menino de 13 anos treina para aderir ao grupo autodenominado Estado Islâmico.

Ao chegarmos a sua casa, ele nos recebe como um adolescente comum e feliz: cabelo despenteado, sorriso no rosto e casaco cinza com capuz.

Mas, quando paramos para conversar, ele se dirige ao quarto do lado para mudar de roupa. Volta com uma balaclava preta -capuz que cobre o rosto todo- e roupa com camuflagem militar.
"""
            entrada = form.texto.data
            rc['texto_fixo'] = texto_fixo
            rc['entrada'] = entrada
            rc['texto_resumido'] = summarize.summarize_text(entrada, block_sep='\n')
            rc['l_entrada'] = str(len(entrada))
            rc['l_resumido'] = str(len(texto_fixo))


    return render_template('form_resumo.html',
                           title='Resumir',
                           form=form,
                           rc = rc)



