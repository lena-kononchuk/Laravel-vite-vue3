#!/bin/sh
# Запуск Nginx
service nginx start
if [ $? -ne 0 ]; then
    echo "Failed to start Nginx" >&2
    exit 1
fi

# Запуск PHP-FPM
php-fpm
if [ $? -ne 0 ]; then
    echo "Failed to start PHP-FPM" >&2
    exit 1
fi
