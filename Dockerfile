# Используем официальный PHP образ
FROM php:8.2-fpm

# Устанавливаем рабочую директорию
WORKDIR /var/www/html

# Копируем composer.phar и устанавливаем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Копируем исходный код приложения в контейнер
COPY . .

# Устанавливаем зависимости
RUN composer install --optimize-autoloader --no-dev

# Устанавливаем права
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Устанавливаем PHP расширения
RUN docker-php-ext-install pdo pdo_mysql

# Запускаем PHP-FPM
CMD ["php-fpm"]

