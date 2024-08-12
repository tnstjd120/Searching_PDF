FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build:prod

EXPOSE 18181

CMD ["npm", "run", "start:prod"]