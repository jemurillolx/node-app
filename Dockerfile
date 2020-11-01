FROM node:latest

# Create app directory
WORKDIR /src/index

RUN npm install nodemon -g

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD node src/index.js