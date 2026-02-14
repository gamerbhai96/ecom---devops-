#!/bin/bash

# Navigate to the deployment directory for this app
# Note: This local script mimics the deployment logic in .github/workflows/deploy.yml
cd /home/ubuntu

# Create separate directory for this app to avoid conflicts
mkdir -p quickcart-live

# Pull the latest code
if [ -d "quickcart-live/.git" ]; then
    cd quickcart-live
    git pull origin main
else
    rm -rf quickcart-live
    git clone https://github.com/gamerbhai96/ecom---devops-.git quickcart-live
    cd quickcart-live
fi

# Build and run the Docker container
# Using a unique name and port (80) to avoid conflicts with other apps
sudo docker build -t quickcart .
sudo docker stop quickcart-container || true
sudo docker rm quickcart-container || true
sudo docker run -d --name quickcart-container -p 80:5000 quickcart

# Wait a moment and check if container is running
sleep 5
sudo docker ps | grep quickcart-container
sudo docker logs quickcart-container

echo "Deployment of QuickCart completed successfully!"
