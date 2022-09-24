# Use an existing docker image as base
FROM node:16.10-alpine

# Setup working diretory
WORKDIR /usr/app

# Copy package.json
COPY ./package*.json .

# install deps
RUN npm install

# Copy stuff from build context to work directory in container
COPY . .

# specify startup command
CMD ["npm", "start"]