# Use the official PHP image
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev libzip-dev libonig-dev libxml2-dev

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install zip pdo pdo_mysql

# Запускаем PHP-FPM
CMD ["php-fpm"]
# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
