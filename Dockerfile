# Базовый образ PHP
FROM php:8.2-fpm

# Установка зависимостей
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    libpq-dev \
    git \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Установка расширений PHP
RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install zip \
    && docker-php-ext-install pdo pdo_pgsql

# Установка Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Установка рабочих директорий и прав
WORKDIR /var/www/html
RUN chown -R www-data:www-data /var/www/html

# Переменные окружения
ENV APP_NAME=Laravel
ENV APP_ENV=local
ENV APP_URL=https://laravel-vite-vue3.onrender.com
ENV APP_DEBUG=true
ENV APP_TIMEZONE=UTC

ENV DB_CONNECTION=pgsql
ENV DATABASE_URL=postgresql://myuser:0quVFn2ZfRePUrOgDBo8tEV5z4oJhd0n@dpg-cr849vi3esus73fq9ve0-a/mydatabase_8hq9
ENV DB_HOST=postgres
ENV DB_PORT=5432
ENV DB_DATABASE=relocation
ENV DB_USERNAME=root
ENV DB_PASSWORD=password

ENV SESSION_DRIVER=database
ENV SESSION_LIFETIME=120
ENV SESSION_ENCRYPT=false
ENV SESSION_PATH=/
ENV SESSION_DOMAIN=null

ENV BROADCAST_CONNECTION=log
ENV FILESYSTEM_DISK=local
ENV QUEUE_CONNECTION=database

ENV CACHE_STORE=database
ENV CACHE_PREFIX=

ENV MEMCACHED_HOST=127.0.0.1

ENV REDIS_CLIENT=phpredis
ENV REDIS_HOST=127.0.0.1
ENV REDIS_PASSWORD=null
ENV REDIS_PORT=6379

ENV MAIL_MAILER=log
ENV MAIL_HOST=127.0.0.1
ENV MAIL_PORT=2525
ENV MAIL_USERNAME=null
ENV MAIL_PASSWORD=null
ENV MAIL_ENCRYPTION=null
ENV MAIL_FROM_ADDRESS="hello@example.com"
ENV MAIL_FROM_NAME="${APP_NAME}"

ENV AWS_ACCESS_KEY_ID=
ENV AWS_SECRET_ACCESS_KEY=
ENV AWS_DEFAULT_REGION=us-east-1
ENV AWS_BUCKET=
ENV AWS_USE_PATH_STYLE_ENDPOINT=false

ENV VITE_APP_NAME="${APP_NAME}"

# Копирование кода
COPY . /var/www/html

# Установка зависимостей приложения
RUN composer install --optimize-autoloader --no-dev || true

# Кэширование конфигураций и маршрутов
RUN php artisan config:cache
RUN php artisan route:cache

# Запуск миграций
RUN php artisan migrate --force || true

# Запуск сервера
CMD ["php-fpm"]

# Открыть порт для FPM
EXPOSE 9000
