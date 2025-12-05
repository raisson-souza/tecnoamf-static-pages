FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run compile:scss
EXPOSE 3000
CMD ["npm", "run", "dev"]
