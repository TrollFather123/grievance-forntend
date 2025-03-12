# Use Node.js 20 as base image
FROM node:20-alpine

# Install bash
RUN apk add --no-cache bash

# Set the working directory inside the container
WORKDIR /grievance-frontend

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./
COPY .env* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project
RUN npm run build

# Expose Vite's default port
EXPOSE 5173

# Ensure Vite binds to 0.0.0.0 for external access
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]