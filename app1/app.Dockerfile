FROM node:alpine
WORKDIR /app
COPY . /app
RUN npm install --production
CMD node index.js
