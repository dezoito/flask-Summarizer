FROM ubuntu:14.04
MAINTAINER dezoito <an.dezoito@gmail.com>

ENV PYTHONUNBUFFERED 1

# Requirements have to be pulled and installed here, otherwise caching won't work
COPY ./requirements.txt /requirements.txt

COPY ./sh_scripts/* /
RUN /bin/bash -c "source install.sh"

RUN pip3 install -r /requirements.txt

RUN sed -i 's/\r//' /install_nltk.sh
RUN chmod +x /install_nltk.sh
RUN /install_nltk.sh

RUN sed -i 's/\r//' /supervisor.sh
RUN chmod +x /supervisor.sh
RUN /supervisor.sh

COPY ./compose/flask/entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh
RUN chmod +x /entrypoint.sh


WORKDIR /app


ENTRYPOINT ["/entrypoint.sh"]
