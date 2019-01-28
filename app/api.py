from flask_restplus import Api, Resource, fields, reqparse
import summarize
import textrank
import datetime
from app import app


description = """ An API to generate summaries of submitted text """

api = Api(app, version='1.0', title='Summarizer API',
          description=description,)

# URLs for this namespace are prefixed with /api/
ns = api.namespace('api', description='Summary Generation operations')


# Defines a model for Summaries
# based on the dataframe already generate by Crawler
summary = api.model('Summary', {
    'article_summary': fields.String,
    'algorithm': fields.String,
    'utc_date_generated': fields.DateTime()})


@ns.route('/summarize')
class Summary(Resource):
    """
    Returns a summary from entered text :
        article_summary: Shortened text
        algorithm: algorithm used
        utc_date_generated: Timezone aware timestamp (UTC)
    """
    # POST calls are not working!!!
    # see https://github.com/noirbizarre/flask-restplus/issues/84

    @ns.doc('Summary')
    @ns.marshal_with(summary)
    @ns.param('article', 'Text to be summarized')
    @ns.param('algorithm', 'Algorithm: summarize or textrank (default)')
    def post(self, *kwargs):
        # print("handling POST call")
        parser = reqparse.RequestParser(bundle_errors=True)
        parser.add_argument('article',
                            required=True,
                            type=str,
                            help='Text to be summarized')
        parser.add_argument('algorithm',
                            required=True,
                            default="summarize",
                            type=str,
                            help='Algorithm: summarize or textrank (default)')

        args = parser.parse_args()

        if args.algorithm == "summarize":
            algo = "summarize"
            operation = summarize.summarize_text(
                args.article, block_sep='\n').__str__()
        else:
            algo = "textrank"
            operation = textrank.extractSentences(args.article)

        # print("Sending response to client")

        return ({"article_summary": operation,
                 "algorithm": algo,
                 "utc_date_generated": datetime.datetime.utcnow()},
                200,
                {'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Methods': 'POST, GET'})

    #  GET method placeholder
    # def get(self, **kwargs):
    #     """ GET verb has not been implemented """
    #     return "not implemented"
