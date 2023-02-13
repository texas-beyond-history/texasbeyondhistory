FROM httpd:2.4

RUN apt-get update \
    && apt-get install -y \
    nano \
    && rm -rf /var/lib/apt/lists/*

COPY . /usr/local/apache2/htdocs