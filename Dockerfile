FROM php:8.3-fpm

# Install system deps
RUN apt-get update && apt-get install -y \
    nginx supervisor unzip git curl \
    libpng-dev libjpeg-dev libfreetype6-dev libzip-dev libonig-dev \
    libxml2-dev zlib1g-dev libicu-dev libsodium-dev \
    nodejs npm && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql sodium

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working dir
WORKDIR /var/www

# Copy app
COPY . .

# Set permissions
RUN chown -R www-data:www-data storage bootstrap/cache && chmod -R 775 storage bootstrap/cache

# Build app
RUN composer install --optimize-autoloader --no-dev \
    && npm install \
    && npm run build \
    && php artisan config:clear \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Copy configs
COPY ./nginx.conf /etc/nginx/sites-enabled/default
COPY ./php.ini /usr/local/etc/php/php.ini
COPY ./supervisord.conf /etc/supervisord.conf

# Expose web port
EXPOSE 80

# Start nginx + php-fpm via supervisor
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
