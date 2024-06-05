FROM node:latest

WORKDIR /usr/app

RUN npm install --global pm2

COPY ./ ./

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "npm", "--", "start" ]