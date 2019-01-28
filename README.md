flask_Summarizer
---------------------------------------------------

A very simple Flask based API to create a summary from documents and articles.

### Updates

[Jan-2019] Improvements to the API, including auto-generated swagger documentation,
courtesy of [Flask RestPlus](https://github.com/noirbizarre/flask-restplus):

![](./screenshot.jpg?raw=true)
Navigating to the root URL let's you see the automatically generated documentation for all endpoints and test them on the fly.

You can also go to `\<root URL\>/form` to test the API trough an HTML client form.


### Dockerizing this app

You can use Docker to run the application in development or in production mode (assuming you have Docker and Docker Compose installed).

#### Development Mode
To build the app run in development mode just cd to the project root and run:

```sh
    ./rundev.sh
```

If everything runs smoothly, you will be able to open the app from [http://localhost:5000](http://localhost:5000).

This will run the app using Flask's built-in server on port 5000 and install testing dependencies (such as PhantomJS).

#### Production Mode
To build the app run it in production, cd to the project root and run:

```sh
    ./runprod.sh
```

This will install gunicorn, nginx and serv it on port 80

Note: If you want to run it on a virtualenv, you'll have to manually setup NLTK and
install PhantomJS (see [`sh_scripts/install.sh`](https://github.com/dezoito/flask_Summarizer/blob/master/sh_scripts/install_phantom_js.sh) to see how it's done in Ubuntu).

### Running Tests
The functional tests still use PhantomJS's headless browser (I left them because some people might still find this useful).

From the `tests/` directory, run:
```sh
    python3 -m unittest discover
```

You can also run individual test suites:
```sh
    python3 -m unittest tests_unit
    python3 -m unittest tests_views
    python3 -m unittest tests_api
    python3 -m unittest tests_phantomJS
```


### References:
Flask Summarizer is based on the following projects:

**Summarize.py:**
https://github.com/Rotten194/summarize.py

**Python implementation of TextRank:**
http://www.davidadamojr.com/textrank-implementation-in-python-github-repo/

The Textrank algorithm seems to deliver a better summary, but was taking too
long to run, so I just use a customized version of summary.py (I'm using Brazilian Portuguese Stopwords and Tokenizer).



