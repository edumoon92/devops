# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app/backend

# Copy the package.json file to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set the command to start the Node.js backend
CMD [ "npm", "start", "--prefix", "backend" ]