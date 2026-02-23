FROM dunglas/frankenphp:latest

RUN apt-get update && apt-get install -y \
    curl git unzip nodejs npm \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build && rm -rf node_modules

RUN mkdir -p storage/logs storage/framework/cache storage/framework/sessions \
    storage/framework/views bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

RUN touch database/database.sqlite

COPY Caddyfile /etc/caddy/Caddyfile

RUN chmod +x start.sh

EXPOSE 80

CMD ["bash", "start.sh"]