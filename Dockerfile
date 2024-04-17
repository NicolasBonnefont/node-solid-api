FROM node:20-alpine
WORKDIR /app
COPY package*.json ./ 
RUN npm ci
COPY . ./
RUN printenv > .env
RUN npm run build
COPY ./build /app/
CMD ["npm", "run", "start"]