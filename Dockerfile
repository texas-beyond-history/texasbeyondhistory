FROM php:8.1-apache-bullseye

RUN apt-get update \
    && apt-get install -y \
    nano \
    && rm -rf /var/lib/apt/lists/*

COPY . /var/www/html

RUN chmod +x /var/www/html/entrypoint.sh

ENTRYPOINT ["/var/www/html/entrypoint.sh"]