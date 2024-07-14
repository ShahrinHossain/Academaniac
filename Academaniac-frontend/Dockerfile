FROM node:22-alpine3.19

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# RUN npm install -g rollup
# Install dependencies
RUN npm install

# Ensure rollup is globally installed
# Copy all files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]