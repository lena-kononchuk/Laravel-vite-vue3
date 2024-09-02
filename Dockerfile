# Используем официальный образ PHP как базовый
FROM php:8.3-fpm

# Устанавливаем зависимости системы
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libonig-dev \
    libxml2-dev \
    unzip \
    git \
    zlib1g-dev \
    libicu-dev \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем расширения PHP
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install zip pdo pdo_mysql

# Устанавливаем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Создаем рабочую директорию
WORKDIR /var/www

# Копируем файлы приложения в контейнер
COPY . .

# Устанавливаем зависимости PHP
RUN composer install --no-dev --no-scripts --no-autoloader

# Копируем файл php.ini
COPY php.ini /usr/local/etc/php/

# Настраиваем рабочую директорию и права доступа
RUN chown -R www-data:www-data /var/www
RUN chmod -R 755 /var/www

# Запускаем приложение через PHP-FPM
CMD ["php-fpm"]
