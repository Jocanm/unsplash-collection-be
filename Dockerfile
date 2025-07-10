# ---- 1. Etapa de Construcción (Builder) ----
# FROM node:18-alpine AS builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copiamos los archivos de dependencias, incluyendo yarn.lock
COPY package.json yarn.lock ./

# Usamos yarn para instalar las dependencias
# --frozen-lockfile es la mejor práctica para producción, asegura que se use el yarn.lock
RUN yarn install --frozen-lockfile

# Copiamos el resto del código fuente
COPY . .

RUN npx prisma generate

# Ejecutamos el script de build
RUN npm run build

# ---- 2. Etapa de Producción (Final) ----
FROM node:20-alpine
WORKDIR /app

# Copiamos solo los artefactos necesarios desde la etapa 'builder'
COPY --from=builder /app/dist ./dist
# Copiamos solo las dependencias de producción
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

# Copiamos y damos permisos al script de arranque
COPY entrypoint.sh .
RUN chmod +x ./entrypoint.sh

# Expone el puerto donde corre tu aplicación NestJS (dentro de Docker)
EXPOSE 3000

# Establece el script como el punto de entrada
ENTRYPOINT ["/app/entrypoint.sh"]

# El comando que se ejecutará para iniciar tu aplicación
CMD ["node", "dist/main"]