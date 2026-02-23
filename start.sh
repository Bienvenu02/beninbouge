#!/bin/bash
php artisan migrate --force
php artisan storage:link
php artisan config:cache
php artisan route:cache
php artisan view:cache
exec frankenphp run --config /etc/caddy/Caddyfile --adapter caddyfile
```

Et crée un fichier `Caddyfile` à la racine de ton projet :
```
{
    frankenphp
    admin off
}

:{$PORT:80} {
    root * /app/public
    encode zstd br gzip
    php_server
}