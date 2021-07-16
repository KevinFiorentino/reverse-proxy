FROM node:12-alpine as node
WORKDIR /app
COPY ./ /app/

EXPOSE 5000

CMD [ "node", "index.js" ]
