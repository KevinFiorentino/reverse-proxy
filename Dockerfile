FROM node:12-alpine as node
WORKDIR /app

COPY package*.json /app/

RUN npm install
RUN npm install pm2 -g

COPY ./ /app/

EXPOSE 5000

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
#CMD [ "node", "index.js" ]
