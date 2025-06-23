FROM php:8.3-fpm

# System deps
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev libzip-dev libonig-dev \
    libxml2-dev unzip git zlib1g-dev libicu-dev curl libsodium-dev \
    supervisor nodejs npm && rm -rf /var/lib/apt/lists/*

# PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql sodium

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Workdir
WORKDIR /var/www

# Copy source
COPY . .

# Dependencies
RUN composer install --optimize-autoloader --no-dev
RUN npm install
RUN npm run build

# Laravel setup
RUN php artisan config:clear \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Permissions
RUN chown -R www-data:www-data /var/www && chmod -R 755 /var/www

# php.ini
COPY ./php.ini /usr/local/etc/php/php.ini

# Supervisor config
COPY supervisord.conf /etc/supervisord.conf

# Start Laravel only
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
