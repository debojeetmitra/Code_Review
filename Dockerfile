FROM node:18

WORKDIR /app

COPY BackEnd/package*.json ./

RUN npm install

COPY BackEnd .

EXPOSE 5000

CMD ["node", "index.js"]