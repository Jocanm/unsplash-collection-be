#!/bin/sh

# El script se detendrá si algún comando falla
set -e

echo "Running database migrations..."
npx prisma migrate deploy

echo "Starting the application..."
# Ejecuta el comando principal que se le pasa al script (nuestro "node dist/main")
exec "$@"