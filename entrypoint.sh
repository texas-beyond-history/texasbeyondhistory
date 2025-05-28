#!/bin/sh

if [ "${APP_ENV}" = "test" ]; then
   cat > robots.txt <<EOF
User-agent: *
Disallow: /
EOF
fi

apache2-foreground