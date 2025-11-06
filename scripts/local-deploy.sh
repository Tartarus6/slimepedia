#!/bin/bash
set -e

# Local deployment script for manual updates
# Usage: ./scripts/local-deploy.sh

DOCKER_IMAGE="ghcr.io/tartarus6/slimepedia/slimepedia:latest"
CONTAINER_NAME="slimepedia"
PORT="3000"
HOST_PORT="3000"

echo "🚀 Local Deployment Script"
echo "=========================="
echo ""

# Check if we should build locally or pull from registry
read -p "Build locally? (y/N): " BUILD_LOCAL

if [[ $BUILD_LOCAL =~ ^[Yy]$ ]]; then
    echo "🔨 Building Docker image locally..."
    docker build -t slimepedia:local .
    DOCKER_IMAGE="slimepedia:local"
else
    echo "📦 Pulling latest image from registry..."
    docker pull $DOCKER_IMAGE
fi

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

echo ""
echo "✅ Deployment completed!"
echo "🌐 Application is running at http://localhost:$HOST_PORT"
echo ""
echo "Useful commands:"
echo "  View logs:    docker logs -f $CONTAINER_NAME"
echo "  Stop:         docker stop $CONTAINER_NAME"
echo "  Restart:      docker restart $CONTAINER_NAME"
echo "  Remove:       docker rm -f $CONTAINER_NAME"
