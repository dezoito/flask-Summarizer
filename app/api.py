from flask_restplus import Api, Resource, fields, reqparse
import summarize
import textrank
from app import app


description = """ An API to generate summary of submitted text """

api = Api(app, version='1.0', title='Summarizer API',
          description=description,)

# URLs for this namespace are prefixed with /api/
ns = api.namespace('api', description='Summary Generation operations')


# Defines a model for Summaries
# based on the dataframe already generate by Crawler
summary = api.model('Summary', {
    'texto_resumido': fields.String})


@ns.route('/summarize')
class Summary(Resource):
    """ Returns a summary from entered text """

    @ns.doc('Summarize')
    @ns.marshal_list_with(summary)
    @ns.param('max', 'Max items limit')
    def get(self, query):
        parser = reqparse.RequestParser()
        parser.add_argument('texto',
                            required=True,
                            type=str,
                            help='Text to be summarized')
        parser.add_argument('algorithm',
                            required=True,
                            type=str,
                            help='Algorithm used to generate summary (summarize or textrank)')

        args = parser.parse_args()

        if args.algorithm == "summarize":
            operation = summarize.summarize_text(
                args.texto, block_sep='\n').__str__()
        else:
            operation = textrank.extractSentences(args.texto)

        return (operation,
                200,
                {'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Methods': 'POST, GET'})

    #  Post method does the same thing GET does
    def post(self, query):
        return self.get(query)
