# Use the official PHP image as base
FROM php:8.3-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    unzip \
    git \
    zlib1g-dev \
    libicu-dev \
    curl \
    libsodium-dev \
    supervisor \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install zip pdo pdo_mysql \
    && docker-php-ext-install sodium

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy application files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --no-scripts --no-autoloader

# Install Node.js dependencies
RUN npm install

# Build frontend assets with Vite (optional if using dev mode only)
# RUN npm run build

# Copy custom php.ini
COPY ./php.ini /usr/local/etc/php/php.ini

# Copy Supervisor config
COPY supervisord.conf /etc/supervisord.conf

# Set file ownership and permissions
RUN chown -R www-data:www-data /var/www
RUN chmod -R 755 /var/www

# Prepare Laravel
RUN if [ -f .env ]; then echo ".env found"; else echo "APP_KEY=placeholder" > .env; fi \
    && php artisan config:clear \
    && php artisan config:cache || true

# Start both Laravel and Vite dev server via Supervisor
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
