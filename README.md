flask-Summarizer
---------------------------------------------------

This a very simple Flask based API to create a summary from Brazilian Portuguese documents and articles.

It is based on the following projects:

**Summarize.py:**
https://github.com/Rotten194/summarize.py

**Python implementation of TextRank:**
http://www.davidadamojr.com/textrank-implementation-in-python-github-repo/

The Textrank algorithm seems to deliver a better summary, but was taking too
long to run, so I just use a customized version of summary.py (I'm using Brazilian Portuguese
Stopwords and Tokenizer).


### Bootstrapping this app

Assuming you have VirtualBox and Vagrant installed, just cd to the project root and run

```sh
    vagrant up --provision
```

Note: if your host machine is running windows, you have to edit the vagrant
 file and comment out these lines:

```ruby
     if os == "windows"
      flask_config.vm.provision :shell, path: "./shell_commands/proxy_config.sh"
    end
```

If everything runs smoothly, you will be able to open the app from [http://localhost:5000](http://localhost:5000).




