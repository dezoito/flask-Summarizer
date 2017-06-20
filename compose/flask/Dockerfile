FROM python:3.6

ENV PYTHONUNBUFFERED 1

# Requirements have to be pulled and installed here, otherwise caching won't work
COPY ./requirements /requirements

COPY ./sh_scripts/install.sh /install.sh
RUN /bin/bash -c "source install.sh"


RUN pip install -r /requirements/production.txt \
    && groupadd -r flask \
    && useradd -r -g flask flask

COPY . /app
RUN chown -R flask /app

COPY ./compose/flask/gunicorn.sh /gunicorn.sh
COPY ./compose/flask/entrypoint.sh /entrypoint.sh

# Use sed to turn the files into one line commands
RUN sed -i 's/\r//' /entrypoint.sh \
    && sed -i 's/\r//' /gunicorn.sh \
    && chmod +x /entrypoint.sh \
    && chown flask /entrypoint.sh \
    && chmod +x /gunicorn.sh \
    && chown flask /gunicorn.sh

WORKDIR /app

ENTRYPOINT ["/entrypoint.sh"]
