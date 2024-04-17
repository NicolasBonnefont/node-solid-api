FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN printenv > .env
RUN npm run build
COPY . /app/
CMD ["npm", "run", "start"]