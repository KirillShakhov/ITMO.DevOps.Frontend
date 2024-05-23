FROM node:18-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
EXPOSE 3000

COPY /dist /app
COPY package.json /app
COPY package-lock.json /app

RUN npm ci

COPY . /app

CMD ["npm", "start"]
