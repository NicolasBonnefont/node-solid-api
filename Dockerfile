FROM node:20-alpine
WORKDIR /app
COPY package*.json ./ 
RUN npm i
COPY . ./
RUN printenv > .env
RUN npx prisma generate
RUN npm run build
COPY . /app/
CMD ["npm", "run", "start"]