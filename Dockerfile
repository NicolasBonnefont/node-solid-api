FROM node:20-alpine
WORKDIR /app
COPY package*.json ./ 
RUN npm ci
COPY . ./
RUN printenv > .env
RUN npx prisma generate
RUN npm run build
COPY . /app/
CMD ["sh", "/app/start.sh"]