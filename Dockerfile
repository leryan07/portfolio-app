# Use Node.js LTS version
FROM node:24-alpine

# Upgrade npm globally
RUN npm install -g npm@latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Environment tweaks for hot reload
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true
ENV HOST=0.0.0.0

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["sh", "-c", "npm start"]