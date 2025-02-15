# Použití Node.js image
FROM node:18

# Nastavení pracovního adresáře v kontejneru
WORKDIR /app

# Kopírování package.json a package-lock.json pro instalaci závislostí
COPY package*.json ./

# Instalace závislostí
RUN npm install

# Kopírování zdrojového kódu do kontejneru
COPY . .

# Exponování portu backendu
EXPOSE 3002

# Spuštění serveru
CMD ["node", "server.js"]
