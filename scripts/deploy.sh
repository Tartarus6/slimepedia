#!/bin/bash
set -e

# Configuration
DOCKER_IMAGE="ghcr.io/tartarus6/slimepedia/slimepedia:latest"
CONTAINER_NAME="slimepedia"
PORT="3000"
HOST_PORT="3000"  # Change this to your desired port

echo "🚀 Starting deployment of Slimepedia..."

# Login to GitHub Container Registry
# Note: You need to set up a GitHub token on your server
# Run this once on your server: echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
echo "📦 Pulling latest Docker image..."
docker pull $DOCKER_IMAGE

echo "🛑 Stopping existing container..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

echo "🚀 Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  -p $HOST_PORT:$PORT \
  -e NODE_ENV=production \
  $DOCKER_IMAGE

echo "🧹 Cleaning up old images..."
docker image prune -af --filter "until=24h" || true

echo "✅ Deployment completed successfully!"
echo "🌐 Application is running on port $HOST_PORT"

# Show container status
docker ps --filter name=$CONTAINER_NAME
