# Use a newer Node.js base image
FROM node:18-bullseye

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies (ensure expo is installed locally)
RUN npm install

# Copy the entire project files
COPY . .

# Expose the port Expo runs on
EXPOSE 19000

# Start the Expo development server using the local Expo CLI
CMD ["npx", "expo", "start", "--host", "lan"]
