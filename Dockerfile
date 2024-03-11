FROM node:20.11.0

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npx prisma migrate deploy

EXPOSE 3000

CMD ["npm", "run", "start"]