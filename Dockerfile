FROM php:8.1-apache-bullseye

RUN apt-get update \
    && apt-get install -y \
    nano \
    && rm -rf /var/lib/apt/lists/*

COPY ./web /var/www/html