

jQuery(document).ready(function(){

    /**
     * requests summarization via ajax
     */
    $("#btnGo").click(function () {
        console.log("starting AJAX API call");
        console.log($("#form_resumo").serialize());
        $.ajax({
                type:"POST",
                url: "/api/summarize",
                data:$( "#form_resumo" ).serialize(),

                success: function(response){
                    $("#div_resumo").html('<pre>' + JSON.stringify(response, null, 2) + '</pre>');
                    // console.log(response);
                    console.log("Ajax call to method to /api/summaryze-- answered");
                },

                fail: function(response){
                    console.log(response);
                }
        });
    });
});

/**
 * Insert text samples for testing algorithms
 */
text_sample = [];
text_sample.push("Ela anda rapidemente na plataforma da estação do Leste de um ritmo furioso e decidido. O ovido colado ao i phone, ela escuta uma messagem que uma amiga deixo. Ela ésta com pressa. Suas calças prêtas concordo com o seu casaco cizento e apertado. O som das bombas batem o ritmo de sua pressa. Ela vai apanhar um trem para regressar a casa, na cidade onde um homen espera por ela, um homen que ela ama. De repente, alguma coisa para ela. No chão, esta algo azul que perece sedoso. Ela se abaixa para ver de perto o que é. Um suéter. Um suéter azul. Um suéter azul em lã. Ela apanho o e commença a verificar a coisa. Ele ésta limpo e em bom estado. Ela decida de levar o, e coloca o na sua bolsa. O seu caminho abra se de novo em frente dela, e no meio das pessoas caminhando e correndo, ela volta à sua própria rapidez. \n\n Assentada no trem, ela pensa no seu dia, o que serà a sua noite ? O que não se sabe ainda aparece tão real, mas não é. Ela fecha o olhos, deixando-se balançar para os movimentos do TGV, e começa à sonhar. Sonolente, ela acorda com uma voze que indica à todos que o terminus é perto. Ela se prepara a saïr do vagão e, abrindo sua bolsa, ela vé o suéter azul. Ela pensa neste momento ao seu namorado, um presente para ele. Ele gosta muito da cor azul. \n\n Andando pelas ruas até seu apartemento, ela pensa ao suéter. Objeto encontrado, objeto perdido. Nada se perde, tudo é oferecido, ainda mais por amor. Ela imagina então o antigo proprietario do suéter. Quem poudia ser ele ? Um homem. Jovem. Não, talvez entre duas idades da vida, de quarante anos, ou mais. Grande e forte ? O suéter é larga. Précioso, ele ésta limpo e cheira bem, cheira o patchouli. Àtràs da manga direita, apareçem dois buracos. Um fil branco deixa pensar que ele foï remendado, pelo um homen ou mulher. Alguèm que cria fechar estes buracos. Que pena, com esses, o suéter parece ainda mais precioso. Que podia pensar o homem destes furos, cri-ele os tapar ? Ou talvez os apagar ? E finalemente, ele deixou-os. Ha buracos que não se pode tapar, nunca, com nada. Só crer com um amor, e seu desejo. \n\n Agora em sua casa, o seu homem não està là ainda. Ele deixo uma messagem para explicar sua ausência. Que se importa ! Há vestigios dele em todo o appartemento. Ele tira os sapatos e começa a andar descalço, para sentir o chão cada andar. Ele toca música e sente-se no sofà. Mecanicamente, ela liga a televisão e coloco qualquer canal sem o olhar. A camisola azul envolve a sua mente ainda mas. Ela alcança, agarra-lo, e amá-lo. O que podia sentir seu dono ? Talvez ele está tristo ou com raiva. Não importe hoje, porque hoje, esse suèter vai ter uma secunda vida, uma vida nova. Ele desepereceu, mas apenas para um. Agora, ele tem uma nova sorte, para outros. O único que desepareceu realement, era seu portador.");
text_sample.push("Justino entrou no restaurante com pressa. Estava atrasado e não gostava de estar. Vinha apressado, ansioso. Uma ansiedade ruim, pois há ansiedades boas, daquelas que deixam um friozinho na barriga, mostram-nos que estamos vivos. Mas aquela... Aquela não era dessas; ao contrário, fazem-nos querer esconder, sumir, morrer talvez.\n\nIsabella já o esperava. Sentiu-se pior ainda. Ela não era de chegar na hora. Chegou. Não sabia se ficava feliz ou preocupado com o fato, pensou, enquanto enxugava o suor do rosto: gotas de correria e temor. Não se viam fazia mais de uma semana. Ele viajara a serviço. Não gostava de viajar.\n\nEla o recebeu com a alegria costumeira. Isabella sempre tinha um sorriso nos lábios. Era dessas pessoas que, não importam as vicissitudes, pareciam incólumes a elas. Justino tentou se acalmar no abraço quente e no perfume gostoso dela. Ele a amava e sentia que ela o amava também. Beijaram-se. Um beijo de saudade do tamanho dos dias de solidão. Era um amor arrebatador, um amor de deuses. Justino sentiu-se um pouco melhor. Trocando carícias com as mãos. Beijaram-se de novo. E mais, e mais.\n\nDepois de saciada a saudade, Isabella perguntou:\n\n- Como foi a viagem, querido?\n\n- Boa! Respondeu ele quase sussurrando.\n\n- Que bom! Divertiu-se?\n\n- Você sabe, Bella! Não costumo me divertir quando estou a trabalho.\n\n- Mas nem um pouquinho? –Insistiu ela –E aquela amiga sua que mora lá?\n\n- Ah, sim... Encontrei-me com ela, sim.\n\n- Saíram?\n\nO coração de Justino começou a se inquietar. Seu corpo parecia traduzir isso: estava inquieto também, não conseguia achar posição confortável na cadeira. Isabella chegou mais perto, olhou-o nos olhos e repetiu:\n\n-Saíram?\n\n- Sim, sim –disse ele –meio irritado.\n\n- Conta. Disse ela acariciando a mão dele, detendo-se na aliança que ela não possuía.\n\nO olhar de Isabella era inquisidor. Ele sentiu que não poderia escapar dele. Na verdade, haviam saído duas vezes; ele, ela e uma amiga dela. No primeiro dia, apenas um encontro formal. O que ele não esperava era o interesse da amiga no segundo encontro. Estavam em uma festa promovida pela empresa dele. Havia um quê de elegância e promiscuidade no ar. Era um local aberto, grande, com enormes áreas isoladas, tudo regado a boas bebidas; bebidas caras e comidas finas. Não se poupou nada.\n\nBella aconchegou-se em seu colo como uma gata a espera do carinho do dono. Ele começou a contar o que havia acontecido. Ela levantou-se e o encarou. Estava séria, mas com um olhar ansioso. Sua mudez aumentou ainda mais o clima desconcertante. Como falar, pensou ele. Como lhe dizer.\n\n- Continue! –Disse ela.\n\nA música do restaurante não ajudava. Era romântica; uma das que eles dois tinham como símbolo do amor deles. Justino tentou desconversar chamando a atenção de Bella para a canção.\n\n- Nossa canção, amor!\n\n- Unhum! Conta!\n\nJustino então tomou coragem. Ajeitou-se o mais confortável possível. Ficou um pouco longe dela, talvez por uma questão de defesa e falou de um fôlego só, como se temesse não conseguir. Disse sobre o encontro com a amiga e com a conhecida dela, sobre o primeiro dia muito agradável; sobre como falaram das coisas antigas; sobre a vida atual dos dois... De repente ele parou. Bella ficou imóvel, esperando o desfecho, pois ele não dera nenhuma entonação que definisse a história.\n\n- Há mais, meu bem!\n\n- Conta!\n\n- A amiga dela...\n\n- Sim...\n\n- Não sei por que –disse ele rindo –não sei por que ela cismou comigo.\n\n- Cismou? Como?\n\n- Você sabe... Cismou!\n\n- Não, não sei!\n\n- Ela... Sei lá... Gostou de mim!\n\nBella levantou o tronco. Seus olhos brilharam, abriu um pouco a boca e exclamou com um sorriso estranho.\n\n- Vocês dormiram juntos!\n\n- Não, amor. Ela tentou me beijar na festa. Foi até imprudente. Estava alta com a bebida. Recusei. Ela ficou sem graça e no dia seguinte, antes de eu viajar, até telefonou para mim se desculpando pelo arrojo. Nada aconteceu. Mas sei que não é bom ouvir algo assim.\n\nBella recuou os ombros, abaixou a cabeça por uns instantes, mas logo recobrou sua alegria espontânea. Abraçou Justino com ardor. Suas cabeças se cruzaram. Ele olhava aliviado para algum lugar; ela, preocupada, olhava para dentro de si. Lá, um outro homem, sem nome, sem peso a contrabalançar.");
text_sample.push("A velha garota.\n\n-Mamãe! - gritei andando pela casa, querendo encontrar a mãe, para lhe dizer sobre um convite que recebi.\n\n-Estou na cozinha, querida - minha mãe falou alto. Fui correndo até ela.\n\n-Mãe, mãe! Nem sabe! - falei pedindo sua atenção.\n\n-O que, filha? - ela falou indo para a sala se sentar.\n\n-Conheci uma garota hoje! E ela gostou de mim, acho que vamos virar amigas! - falei muito feliz, fazia tempo que não fazia amigos novos.\n\n-Oh, que bom, Anna! Então, como é o nome dela?\n\n-Nossa! Eu nem perguntei o nome dela... - fiquei com cara de boba agora.\n\n-Filha! - meu pai disse, ao chegar em casa.\n\n-Pai! Oi. - falei abraçando-o. Depois voltei a me sentar no sofá. - Conheci uma garota hoje e eu acho que seremos amigas! - disse levantando os braços.\n\n-Sabe que tem se deve tomar cuidado com pessoas estranhas. - meu pai disse, como sempre, me deixando com dúvida. O que uma garota da mesma idade que eu, doze anos, seria capaz de fazer?\n\n-Pai ela tem a minha idade, não vai fazer nada contra mim! - falei o ironizando.\n\n-Vem cá. - ele apontou para o espaço vazio do sofá em que estava sentado. Fui lá e me sentei, perto dele.- Tenho uma historia para te contar. Fala sobre uma garota de quatorze anos...\n\n \n\n \n\n.Começo da Historia.\n\n \n\n \n\n-Mãe! Conheci uma garota hoje e ela já me convidou para o aniversário dela! -\n\nDisse animada, quando cheguei em casa.\n\n-Sério? Qual o nome dela? - minha mãe perguntou.\n\n-Aham, ela se chama Megan. Ela tem a minha idade, quatorze anos.\n\n-Onde ela mora?\n\n-Ela me disse uma rua, que fica perto da praçinha, mas eu nunca ouvi falar.\n\n-Tá e quando será o aniversário?\n\n-Hm, ela falou semana que vem. - respondi.\n\n-Então tá, iremos lá amanha, para conhecer a família dela.\n\nLogo a campainha tocou.\n\n-Oi, Megan! Você não tinha que fazer um trabalho...?\n\n-Sim, mas hoje é sábado, então posso fazer outro dia.-ela me explicou.\n\n-Hm, quer entrar?- convidei.\n\n-Sim, sua mãe esta?\n\n-Aham, vamos pra sala. - Depois, minha mãe conheceu a Megan e nós duas ficamos jogando vídeo game, até que minha mãe voltou para conversar.\n\n-Mãe, agora a gente ta jogando!- falei á ela, não desviando o olhar da tela\n\n-Não, acho melhor a gente falar com sua mãe, Lilly. - Megan falou, largando o joystick.\n\n-Então... - minha mãe começou, sentando no sofá. - Como vão seus pais, Megan?\n\n-Muito bem, mas agora eles estão viajando só voltam no meu aniversário.\n\n-E você fica sozinha em casa?!- perguntei espantada.\n\n-Sim, a vizinhança não é perigosa, então... Não tem problema.\n\n-Mas, querida, como você se cuida? Seus pais deixaram dinheiro? Quando eles irão chegar? - minha mãe fez mil perguntas, ela não entendia o porquê de Megan ficar sozinha em casa.\n\n \n\n-Megan, quer posar aqui em casa?- perguntei, dando fim, as duvidas da minha mãe.\n\n-É uma boa idéia, filha. - minha mãe falou, guardando os copos no armário da cozinha. Então, você quer ficar aqui em casa, Megan?\n\n-Ah, seria muito bom! Ficar sozinha em casa, não me agrada... - Megan falou triste.\n\n-Eba! Legal, vem cá!- a puxei para irmos pro meu quarto. -Vou te mostrar meu quarto!\n\n-Ta.- subimos as escadas correndo até chegar ao segundo andar, então fomos até o fim do corredor, onde ficava meu quarto. Abri a porta e procurei uns desenhos pra mostrar a ela. Megan sentou na minha cama.\n\n-Olha!- falei mostrando meus desenhos. -Esses desenhos vão ser expostos na feira de artes da minha escola.\n\n-Nossa, você desenha muito bem, Lilly!- ficamos no meu quarto até a hora do jantar. Comemos macarronada e conversarmos sobre o dia e escola. Megan iria fazer aniversário na terça-feira, então eu iria posar na sua casa na segunda pra arrumar as coisas pra festa que terá. Ficamos jogando vídeo game depois do jantar, até minha mãe mandar a gente dormir.\n\n-Que horas são?-Megan perguntou quando estávamos arrumando a cama pra ela dormir.\n\n-Hm.-olhei para o relógio no criado-mudo e respondi:- É... Quase dez e meia. Por quê?\n\n-Por nada... Então, a gente vai dormir mesmo ou iremos fazer outra coisa?\n\n-Agente pode ver TV até pegar no sono.\n\n-Legal!- Nos deitamos na cama de frente pra TV que ficava num tipo de prateleira na parede. Coloquei no canal em que começou um filme de terror. Nos assustamos algumas vezes, em seguida que terminou o filme dormi, tendo alguns pesadelos.\n\nAcordei, olhei para janela, ainda era de noite, passei o olhar pelo relógio: 4:09. Nossa! Ainda de madrugada. Olhei para meu lado: a Megan não estava lá. Estranho.\n\n-Megan?-sussurrei alto. Quando virei, me esticando para ver pela fresta da porta, senti meu pescoço molhado. Coloquei minha mão para ver o que era.\n\n-O que é isso?- exclamei quando vi o liquido vermelho entre meus dedos. Pulei da cama e fui direto para frente do espelho. - Mas o que houve?!- me espantei ao ver que meu pescoço parecia estar marcado com... Sangue!\n\nOlhei novamente para o quarto. Em cima do criado mudo, do lado da cama onde a Megan estava, havia uma faca!... E um pote de... Algo vermelho. Parecia ser a mesma coisa que estava no meu pescoço. Ouvi passos no corredor e algo como se fossem... Gemidos de dor. Devagar abri toda a porta do quarto. Quando olhei para o corredor. Vi Megan caindo no chão, com as mãos em volta do corpo e gemendo baixo de dor.\n\n-Megan!- corri até seu lado e a cutuquei.\n\n-Li-lilly?-ela falou fraca.\n\n-Sim, sou eu!-falei tentando ver o porquê dela estar sentindo dor. -O que houve, Megan?\n\n-Esta doendo muito Lilly, preciso ir pra casa!-ela falou tentando se levantar.\n\n-Você não pode sair daqui de casa nesse estado. Ainda mais que é de madrugada!- expliquei.\n\n-Não, mas... Eu preciso ir pra casa. Por favor, vai lá comigo. Eu tenho a, o... remédio lá em casa!\n\n-Você esta doente?! Porque não me falou?\n\n-São crises de... Ah, preciso ir pra casa, Lilly!- ela falou com a voz cheia de dor.\n\n-Ta... Deixa eu chamar minha mãe.- disse a ela, me levantando, ela não deixou.\n\n-Não! -ela falou com os olhos arregalados me fuzilando. -Preciso ir... Vem comigo! Não vai acontecer nada, não precisa avisar á sua mãe.\n\n-Mas, Megan...\n\n-Por favor...! Estou com dor!- ela me implorou com os olhos cheios d'água. Eu ainda estava com duvida de ir a casa dela, eu não sabia onde era e nem minha mãe. E se acontece algo. Como irão nos achar?\n\nMas ela estava com dor. Acho melhor ir...\n\n-Tudo bem, vamos!- A segurei e descemos a escada sem fazer nenhum ruído, para não acordar ninguém. Peguei a chave na cozinha e saímos de casa. Nos duas estávamos de camisola. Megan, ainda estava com dor.\n\n-Aonde é sua casa?\n\n-Precisamos fazer a volta na rua, que você vai ver uma casa grande, bem antiga... De madeira.\n\n-Tudo bem... Deixa que eu te seguro. – fomos com passos lentos até a casa dela. Eu parei quando estava de frente pra casa. Parecia uma casa medieval. No jardim havia plantas mortas, como se não fosse cuidado a anos. A maioria das janelas estavam quebradas e a noite deixava a casa mais sombria.\n\n-Você mora... Aqui?- perguntei sem desviar o olhar da casa.\n\n-Sim, vamos!- ela correu encolhida até a porta, se abaixou e tirou a chave de um canteiro que havia ali do lado. Quando sai do transe, fui ao seu lado.\n\nEla abriu a porta e fez um gesto para mim entrar. Entrei.\n\n-Agora você vai ficar aqui. - Megan falou, com um tom de voz estranho.\n\n-O... q-que?- vi ela se endireitar na minha frente. Ela não estava com dor! Porque ela me levou até aqui?!- O que você esta fazendo, Megan? Se não esta com dor... Por que...?!- perguntei apavorada.\n\n-Eu estou com dor, porque eu preciso de sua... Senta ali, idiota!-ela berrou e apontou para uma cadeira de ferro, nos encostos dos braços, havia duas tiras em cada. O que era aquilo?!-Anda!- ela gritou, impaciente.\n\n-Megan! O que você vai fazer? Não vou me sentar ali!- ela me jogou contra a porta atrás de mim e me fuzilou com os olhos.\n\n-Você vai sentar ali... Lilly - ela falou ironizando meu nome. - Não tem escolha... Eu, não te dei escolha. - Ela estava apertando meus braços contra a porta. Fiquei ofegante. Onde estava a garota calma, onde estava a garota Megan? Porque ela iria fazer isso? O que ela iria fazer?\n\nDe tanto pavor, meus olhos se encheram de lagrimas, queria sair dali.\n\n-SOCORRO!-gritei, saindo dos seus braços e indo para a janela quebrada da parede do lado da mesa. -Socorro!- comecei a chorar e a bater na janela.\n\n-Sua idiota, sai de perto da janela!- me virei e vi-a com uma faca na mão vindo para perto de mim. - Se senta, na cadeira. Agora!- Comecei a chorar histericamente.\n\n-Me deixa sair!- pedi a ela.\n\n-Você não ira sair daqui, pelo menos não viva. - arregalei os olhos, minha respiração se cortou. - Anda, senta ali!-ela me mandou e fez um gesto com a faca, como ameaça. Corri até a cadeira e me sentei, chorando e pedindo mentalmente para algum Deus me ajudar. Megan foi até mim e amarrou as tiras no meu braço, me prendendo na cadeira. Depois fez o mesmo com as pernas.\n\n \n\nTermino da narrativa de Lilly.\n\n \n\nDepois de prender as pernas e os braços de Lilly na cadeira. Megan foi à cozinha procurar seu livro sagrado e a faca afiada. Sem perceber deixou a porta entreaberta. Com isso, a garota que estava presa lá na sala, se esticou para ver a cozinha. Não viu nada, até que passou o olhar pela mesa da cozinha.\n\nO que, o que é aquilo...? Lilly pensou, se virou um pouco mais na cadeira e viu...\n\nHavia um corpo sentado na mesa! Pelas roupas era uma garota...\n\nOnde esta a cabeça daquela garota?!\n\nLilly, sentada na cadeira, sentiu seu corpo tremer, seus olhos lacrimejarem ainda mais, seu coração falhar... Sabendo que estava chegando o fim de suas batidas. O corpo em cima da mesa estava sem cabeça, alguém havia decepado aquela pessoa. O pescoço decepado estava lambuzado de algo branco. Lilly percebeu que Megan estava voltando. Voltou para seu lugar, ajeitada, olhando para chão, lembrando que iria morrer, sem saber o motivo...\n\n-O que você quer comigo? Porque tem uma pessoa sem pescoço na sua cozinha?-Lilly perguntou apavorada.\n\n-O que você estava fazendo que viu minha cozinha?-a garota com a faca na mão e um livro na outra, perguntou com raiva.\n\n-Nada! A porta estava aberta!- Lilly respondeu com medo da reação da outra.\n\n-Como você vai morrer daqui a pouco... -Megan gemeu de dor, depois continuou:- Você ira me deixar com a idade que tenho até o próximo ano.\n\n-O que?-a garota presa, demonstrou o medo na sua voz.\n\n-Eu não tenho quatorze anos de vida. Eu não nasci no mesmo ano que você. Mas já matei várias pessoas para ficar com a aparência que quero.\n\n-O que você esta tentando dizer? Você mata e fica com a idade da pessoa? Você pega a juventude delas?- Lilly não conseguia ficar mais apavorada.\n\n-Querida, nasci em 1871, sou bem mais velha que você. - Megan, foi chegando mais perto da cadeira que prendia a menor. -Eu sei um jeito de nunca morrer. Apenas tenho que matar alguém da minha preferência, dizer algumas palavras e... Feito. Estou com a idade da pessoa. Mas claro, eu não pego a aparência da pessoa, mas sim, sua idade. - se sentindo uma professora, Megan sorriu e continuou a explicar. -Para deixar mais claro, é assim... eu irei te matar e ficarei com quatorze anos, traduzindo, ficarei com a mesma aparência que tenho agora por mais um ano.\n\n-Mas... Porque eu?! Existem outras pessoas por aí! Me deixe ir e pegue outra pessoa pra matar!- a garota presa na cadeira implorou. Sem sucesso, ela estaria morta antes do amanhecer do dia.\n\n-Meu bem - Megan passou a faca pelo pescoço da garota, tirando um gemido de choro e apreensão. - Eu estou aqui com você, vou matar você. Não tem o porquê eu sair e procurar outra pessoa. Mas continuando a minha explicação...Sabe, se eu quiser ficar com a aparência de alguém com trinta anos é apenas eu matar alguém de trinta anos. Como eu quero ficar com a aparência de alguém de quatorze anos por mais um ano... Eu irei te matar. - Megan deu um sorriso.\n\n-Por favor, não faça isso comigo!- Lilly choramingou\n\n-Cala a boca! Não adianta pedir nada, não irei mudar de idéia. Você e irá morrer. Aceite. -Megan, abriu na pagina tão conhecida á anos, do seu grande livro sagrado. E começou a ditar as palavras. Depois do parágrafo de inicio, pegou um pote com merengue e lambuzou o pescoço da garota.\n\nLilly respirou fundo, olhos cheios d'água e seu coração deu a ultima batida.\n\nMegan pegou a faca, que mais parecia uma espada. Preparou-se... E com apenas um golpe, Lilly não estava mais viva.\n\nMegan, sorrindo satisfeita, pegou a cabeça decepada e colocou no lixo. Depois voltou para a sala com uma vela na mão. Tirou a garota morta da cadeira e á levou até a mesa, que agora, já estava vazia. Ajeitou Lilly: encheu o pescoço sem cabeça de mais merengue e ajeitou as roupas. Pegou a vela, a acendeu e depois colocou em cima do pescoço. Megan bateu palmas para seu trabalho bem feito, ainda estava sentindo dor... Precisava fazer, senão morria. O que não iria acontecer.\n\nCom uma expectativa que poderia se comparar a de uma criança:\n\nApagou as velas.\n\nA velha garota de 139 anos sentiu a juventude da menor entra em si... Ritual feito.\n\nPronto, Megan tem novamente 14 anos.\n\n \n\n \n\n \n\n \n\nFim da Historia.\n\n-Se assustou filha?- meu pai me perguntou, depois de tudo que ele me contou ele acha que eu Não estou com medo? Meus pensamentos sobre essa historia não vão me deixar dormir tão cedo.\n\n-Muito! Mas... Da onde você tirou essa historia? E o que te deu pra conta pra mim?!- perguntei exasperada. Não é algo que se conta na -- hora da historia--  para uma filha!\n\n-Achei uma boa historia para te dar um -- toque--  sobre não conversar com estranhos. - ele falou tranquilamente.\n\n-Não seria mais fácil você me dizer para eu não conversar e nem aceitar nada de estranhos?!\n\n-Sim, mas... Essa história impressiona mais! - ele falou voltando para seu aspecto irônico. Então a campainha tocou, corri para a porta.\n\n \n\n-Oi! Pode sair na rua? Ainda é dia. -era a garota que eu conheci hoje.\n\n-Espera, vou perguntar para a minha mãe! - falei, correndo para a cozinha- Mãe, posso sair de novo na rua? Ainda é dia...\n\n-Sim, pode ir, mas volta antes das sete da noite!\n\n-Tá, valeu mãe!- corri de novo para a porta. - Tudo bem, minha mãe deixou. Vamos á praçinha? -perguntei á garota.\n\n-Sim, depois você pode passar lá em casa, fiz biscoitos de chocolate! -ela falou levantando os braços, ri.\n\n-Aliás, qual seu nome?\n\n-Megan.");
text_sample.push("Nunca gostei dos artigos que falam que o amor é um sentimento flutuante num oceano de rosas, sobre dar e receber, ida e volta, histórias de amor com finais felizes... Acredito no amor, o sentimento existe, ou talvez apenas a palavra que denomina o sentimento que envolve o coração (outro órgão que poderia ser substituído). E se ao invés de falarmos de coração, falássemos de cérebro, por exemplo. Hein???? Claro, se fossemos acostumados a pensar que é o cérebro (e não o coração) o órgão possuidor e administrador deste sentimento intitulado  --amor --. Ora, pois! É com o cérebro que administramos os sentimentos mais fortes, paixão, ciúme, ódio... Com o coração só fazemos bobagens, mas é claro, do coração advêm os atos emocionais e afetivos. Do cérebro vem à racionalidade sempre indispensável no cotidiano do amor.\n\nPara amar é necessário a bilateralidade, ou seja, quem ama sozinho ama os teoremas de Platão, quem ama sozinho não ama a si mesmo, é necessário uma outra parte que nos devolva o amor. Só assim podemos voltar ao velho dilema de dar e receber, ir e vir, tolerar e ser tolerado. O amor é dose dupla! Duas pessoas! Todos sabem que triângulos amorosos não dão certo. Amar não é fácil como lemos nos jornais e revistas, nos filmes e novelas. Para finais felizes, é necessário fazer graduação e especialização. Sermos mestres e doutores. Sem pseudos demagogias, considero o amor uma dádiva até que venham os outros sentimentos que envolvem a palavra  -- amor -- . Já falei, amar é maravilhoso, mas é preciso saber amar! Este impulso geralmente vem acompanhado de ciúmes e outros incômodos sentimentos. O ciúme é a soma ou a multiplicação de nossos próprios medos. Criamos a monogamia, queremos uma pessoa só para nós, às vezes conseguimos de fato, mas voltamos a desconfiar. A desconfiança não é uma invenção, invenção foi termos criado a infidelidade, daí a justificativa da desconfiança. Deixou-nos Freud o aprendizado: Quem ama sofre, pois  sem mais, tem medo de perder. Disse-nos Friedrich Nietzsche: O amor não existe, o que existe é o prazer que o outro nos proporciona, uma vez que nos deixem de dar prazer nos afastamos, vamos embora, damos no pé. Isso acontece inclusive entre pais e filhos, nas relações que chamamos de amor incondicional!\n\nO amor pode dar certo até que a morte nos separe dele, ou, até uma ofensa, a indiferença, a falta de diálogo, a exigência daquilo que não podemos dar, a desorganização do sentimento, quando descarregamos  nossas frustrações em cima da pessoa que dizemos amar... É indispensável o cérebro como a placa mãe do amor! Dosar a paixão, impulsos de ciúmes, vícios descontrolados, intolerância! Avaliar a cada passo nossas próprias atitudes para só após julgar o outro. Amor não anda na contramão. Dos sentimentos mais profundos recebemos de verdade aquilo que damos. Se damos demais e nada recebemos em troca é porque talvez apenas consideramos que damos algo sem nada dar, ou, a outra parte não tem nada a oferecer.\n\nAmor é, sobretudo, companheirismo, prazer em estar juntos, deleite em compartilhar  pequenas coisinhas, grandes momentos, situações inesperadas.  Saber ouvir mais que falar, compreender ainda que não compreendamos. Amor é ser paciente.  Amor é camaradagem!\n\nSe fazemos deste sentimento um fardo de brigas e intrigas, um instrumento de rivalidade e competição, nada sabemos sobre ele.\n\nFez-se a hora de voltar à faculdade para aprender a reaprender!");
text_sample.push("ENVOLVIMENTO ENTRE SEGURANÇA PÚBLICA E EMPRESA PRIVADA É  -- TEMERÁRIO -- \n\nPara especialistas, essa relação permite a instituição de grupos de milícia\n\nJornal do Brasil\n\nPara especialistas, o envolvimento entre a segurança pública e a segurança privada é algo  -- temerário -- , seja pela dualidade que esses profissionais assumem quando transitam entre o público e o privado, seja pela possibilidade da instituição de grupos de milícias.\n\nAnalistas reforçam que, infelizmente, esta prática não é algo novo. A falta de estrutura na formação de policiais e os salários baixos levam os profissionais que atuam na segurança pública a procurarem os chamados bicos, onde atuam como responsáveis pela segurança de empresas privadas. \n\nVictória Sulocki, presidente da comissão de direito penal do Instituto de Advogados Brasileiros (IAB), afirma que o envolvimento de policiais militares em serviços de segurança privada acaba gerando um paradoxo, resultado de tentativas de complementar a renda do PM. É muito difícil separar a função dele como agente publico e agente de uma empresa privada. Isso gera um enorme conflito entre o trabalho oficial e o bico, onde normalmente o profissional acaba ganhando mais. O melhor seria que ele estivesse mais bem treinado, mais bem pago e que não houvesse essa necessidade de complementar a renda, explica.\n\nAinda segundo a advogada, esse tipo de associação feita pela necessidade que o polícia tem em aumentar a renda, devido aos baixos salários, pode contribuir para a formação de grupos paramilitares, as famosas milícias. No final acaba dando nisso.\n\nSegundo Victória, na corporação os policiais ainda têm um controle, incorporado na moral da corporação. “Quando o policial está agindo com a farda, ele acaba sendo controlado pela corporação, pela mídia, que questiona as atitudes da corporação, e pelo Estado. Quando ele atua em grupos paramilitares ou em empresas privadas de segurança, não há esse controle, não há uma vigilância por parte da sociedade nas ações desse profissional, afirma.\n\nOutro ponto levantado por Victória é a necessidade de regulamentação constante das empresas de segurança privada, principalmente quando são comandadas por profissionais que atuam em órgãos públicos de segurança. “Essa empresas regulamentadas tem que estar com tudo controlado: quem são os agentes que trabalham lá, que armamentos são utilizados, qual é o tipo de serviços segurança prestados. Tudo isso é regulamentado pela Polícia Federal. O problema são as empresas de segurança não registradas.\n\nNo entanto, Victória aponta uma das contradições resultantes da associação de policiais ligados a órgãos públicos com empresa privada. “O problema disso tudo é o seguinte: para que essas empresas tenham lucro é preciso que existam áreas sem segurança. Quanto mais o discurso de insegurança é propalado, maior é o lucro. Isso é uma incongruência na ação desses profissionais. Se eles estão ligados a órgãos públicos, então a função deles é dar essa segurança, mas para manter o lucro ele precisa do descrédito desses órgãos oficiais para que eles possam prover essa segurança. Aí é que está o problema, a segurança privada serve apenas àquele que paga, ela não tem um compromisso social de segurança pública, destaca.\n\nAssim como, Victória, Elionaldo Julião, sociólogo e professor da Universidade Federal Fluminense (UFF), afirma que essa dualidade entre o público e o privado no campo da segurança pública, criado pela falta de estrutura e apoio dos profissionais que atuam em órgãos públicos, acarreta diversos problemas. Ele ainda critica a postura da Secretaria de Segurança do Estado. Essas empresas acabam por alimentar a possibilidade de que tenhamos grupos paralelos oferecendo serviço na área de segurança pública, com um retorno maior do que policial consegue das fontes oficiais. O fato é que  a secretaria [de Segurança] vem atuado de forma muito paliativa nesse sentido. O destaque maior para o secretário de Segurança pública é mostrar que o projeto da UPP é a solução para tudo, quando os resultados mostram que não.\n\nO professor afirma, ainda, que é comum que empresas privadas saiam atrás de contratações de policiais militares, alguns ainda atuantes dentro da corporação. O que se pode perceber disso é uma grande rede de favorecimento. Ou seja, quando acontece qualquer problema em uma empresa essa rede é ativada e determinadas ações podem ser verificadas com alguma facilidade. Então há uma preferência do mercado por esses profissionais, afirma.\n\nJulião destaca ainda que esse relacionamento cria uma aberração. No final das contas, o que acaba acontecendo é que profissionais que antes prestavam serviço para os órgãos públicos de segurança, passam para o ramo privado e, em alguns casos, passam também a prestar serviços para esses mesmos órgãos, afirma o professor sobre a desvalorização criada em torno da segurança pública.\n\nMarcus Brêtas, professor do Instituto de Filosofia e Ciência Sociais (IFCS) da UFRJ e líder do grupo de pesquisa de história do crime, da polícia e da justiça criminal, também destaca essa competição entre o estabelecimento da segurança pública e a segurança privada e a contradição que é gerada. Acaba que, onde falta o poder público, os profissionais que deveriam atuar nesse sentido, passam a atuar pelas vias privadas.\n\nPara o professor do IFCS, as limitações dos órgãos de segurança pública, por diversos motivos, são exploradas de forma competitiva, as empresas de segurança pública passam a preencher as lacunas deixadas pelo poder público. Isso é um fato conhecido e a situação irregular cria milícias. Além disso, quem tem mais poder aquisitivo tem a capacidade de controlar esses serviços em áreas mais abastadas, nas áreas mais pobres a segurança é produzida pela lei do medo.");

function insertSampleText(sample){
    $(" #article ").val( text_sample[sample]);
    $( "#div_resumo" ).html( "" );
};

