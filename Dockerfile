# Imagen base con Node.js 20 y Alpine
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias y instalar
COPY package*.json ./
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer puerto de la app
EXPOSE 8080

# URL de conexión a MongoDB
ENV MONGO_URL="mongodb://mongo:27017/adoption-db"

# Iniciar la aplicación
CMD ["npm", "start"]
