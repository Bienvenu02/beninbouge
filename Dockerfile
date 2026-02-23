FROM dunglas/frankenphp:latest

# Installer Node.js, Composer et dépendances
RUN apt-get update && apt-get install -y \
    curl git unzip nodejs npm \
    && rm -rf /var/lib/apt/lists/*

# Installer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

# Dépendances PHP
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Dépendances JS + build assets
COPY package.json package-lock.json ./
RUN npm ci

# Copier le reste du projet
COPY . .

# Build React/Vite
RUN npm run build && rm -rf node_modules

# Permissions storage
RUN mkdir -p storage/logs storage/framework/cache storage/framework/sessions \
    storage/framework/views bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Créer SQLite
RUN touch database/database.sqlite

# Rendre start.sh exécutable
RUN chmod +x start.sh

EXPOSE 80

CMD ["bash", "start.sh"]