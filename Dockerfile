FROM node:20-alpine
WORKDIR /app
COPY package*.json ./ 
RUN npm i
COPY . ./
RUN printenv > .env
RUN npm run build && npx prisma generate
COPY . /app/
CMD ["npm", "run", "start"]