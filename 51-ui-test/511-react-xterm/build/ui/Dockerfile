# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app/ui

# Copy the package.json file to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Install react-scripts globally
RUN npm install -g react-scripts

# Copy the rest of the project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set the command to start the Node.js backend
CMD [ "npm", "start", "--prefix", "backend" ]