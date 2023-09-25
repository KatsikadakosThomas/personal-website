
FROM node:16.16.0-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3600

CMD ["npm", "run", "start"]