flask_Summarizer
---------------------------------------------------

A very simple Flask based API to create a summary from Brazilian Portuguese documents and articles.

It is based on the following projects:

**Summarize.py:**
https://github.com/Rotten194/summarize.py

**Python implementation of TextRank:**
http://www.davidadamojr.com/textrank-implementation-in-python-github-repo/

The Textrank algorithm seems to deliver a better summary, but was taking too
long to run, so I just use a customized version of summary.py (I'm using Brazilian Portuguese Stopwords and Tokenizer).


### Bootstrapping this app

Assuming you have VirtualBox and Vagrant installed, just cd to the project root and run

```sh
    vagrant up --provision
```

Note: if your host machine runs on Windows, you have to edit the vagrant
file and comment out these lines:

```ruby
    if os.to_s == "windows"
      flask_config.vm.provision :shell, path: "./shell_commands/proxy_config.sh"
    end
```


If everything runs smoothly, you will be able to open the app from [http://localhost:5000](http://localhost:5000).

Note: If you want to run it on a virtualenv, you'll have to manually setup NLTK and
install PhantomJS (see [`shell_commands/install.sh`](https://github.com/dezoito/flask_Summarizer/blob/master/shell_commands/install.sh) to see how it's done in Ubuntu).

### Running Tests
The functional tests now use PhantomJS's headless browser!

From the `tests/` directory, run:
```sh
    python3 -m unittest discover
```

You can also run individual test suites:
```sh
    python3 -m unittest tests_unit
    python3 -m unittest tests_functional
```




