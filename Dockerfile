# Используем базовый образ для PHP-FPM
FROM php:8.3-fpm AS php

# Устанавливаем необходимые расширения и зависимости
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libpq-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install pdo pdo_mysql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Копируем конфигурационные файлы и исходный код
COPY . /var/www/html

# Устанавливаем рабочую директорию
WORKDIR /var/www/html

# Устанавливаем рабочий процесс по умолчанию
CMD ["php-fpm"]

# Используем базовый образ для Nginx
FROM nginx:latest AS nginx

# Копируем конфигурационный файл Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Установка зависимостей приложения
RUN composer install --optimize-autoloader --no-dev || true
# Копируем код из предыдущего образа
COPY --from=php /var/www/html /var/www/html

# Кэширование конфигураций и маршрутов
RUN php artisan config:cache
RUN php artisan route:cache
# Устанавливаем рабочую директорию
WORKDIR /var/www/html

# Запуск миграций
RUN php artisan migrate --force || true
# Публикуем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
