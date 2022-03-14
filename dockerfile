FROM node:16.13.1-alpine3.15

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV MONGO_HOST 127.0.0.1
ENV MONGO_PORT 27017
ENV NODE_ENV production

RUN npm install pm2 -g

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm", "run", "start"]