# Slimepedia Deployment Guide

This guide explains how to build and deploy Slimepedia using Docker containers.

## Overview

Slimepedia uses a simple deployment pipeline:

1. **GitHub Actions** - Automatically builds Docker images and publishes them to GitHub Container Registry (GHCR)
2. **Docker Deployment** - Pull and run the pre-built images on your server, or build locally for development

The GitHub Actions workflow builds multi-platform images (linux/amd64, linux/arm64) and publishes them with automatic tags:
- `latest` - Latest build from the main branch
- `main` - Current main branch build
- `main-<sha>` - Specific commit builds for version pinning

## Using GitHub Container Registry (Production)

### 1. Automatic Image Building

When you push to the `main` branch, GitHub Actions automatically:
1. Builds the Docker image using the multi-stage Dockerfile
2. Publishes it to GitHub Container Registry at `ghcr.io/tartarus6/slimepedia/slimepedia`
3. Tags it with `latest`, `main`, and `main-<commit-sha>`

```bash
git add .
git commit -m "Update application"
git push origin main
```

The workflow will build and publish the image. Check the Actions tab on GitHub to monitor progress.

### 2. Pulling from GitHub Container Registry

The published images are **public** and can be pulled by anyone without authentication.

To pull the latest image:

```bash
docker pull ghcr.io/tartarus6/slimepedia/slimepedia:latest
```

To pull a specific version:

```bash
# Use the commit SHA for a specific version
docker pull ghcr.io/tartarus6/slimepedia/slimepedia:main-abc1234
```

### 3. Deploying with Docker Compose (Recommended)

The easiest way to deploy is using Docker Compose. It handles container management and restarts automatically.

**Step 1:** Copy `docker-compose.yml` to your server (or clone the repository)

**Step 2:** Start the container:

```bash
docker-compose up -d
```

**Step 3:** To update to the latest version:

```bash
docker-compose pull
docker-compose up -d
```

The compose file automatically pulls from GHCR and manages the container lifecycle.

### 4. Deploying with Docker CLI

If you prefer manual control, you can use Docker commands directly:

```bash
# Pull the latest image
docker pull ghcr.io/tartarus6/slimepedia/slimepedia:latest

# Stop and remove old container (if exists)
docker stop slimepedia 2>/dev/null || true
docker rm slimepedia 2>/dev/null || true

# Run the new container
docker run -d \
  --name slimepedia \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  ghcr.io/tartarus6/slimepedia/slimepedia:latest
```

### 5. Using the Server Update Script

For convenience, you can use the provided update script on your server:

```bash
bash scripts/server-update.sh
```

This script handles pulling the latest image, stopping the old container, and starting a new one.

## Building and Running Locally

If you want to build and run the container locally (without using GitHub Container Registry):

### 1. Build the Docker Image

```bash
docker build -t slimepedia:local .
```

This uses the multi-stage Dockerfile to:
1. Install dependencies and build the SvelteKit application
2. Create a minimal production image with only the built files and production dependencies

### 2. Run the Container

```bash
docker run -d \
  --name slimepedia \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  slimepedia:local
```

### 3. Using Docker Compose for Local Development

Create a `docker-compose.dev.yml` file:

```yaml
version: '3.8'

services:
  slimepedia:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: slimepedia-dev
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Then run:

```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

## Configuration

### Changing the Port

Edit the port mapping in `docker-compose.yml` or your docker run command:

```yaml
ports:
  - "8080:3000"  # Change 8080 to your desired host port
```

Or with Docker CLI:

```bash
docker run -d -p 8080:3000 ... ghcr.io/tartarus6/slimepedia/slimepedia:latest
```

### Environment Variables

Add environment variables in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - YOUR_VAR=value
```

Or with Docker CLI:

```bash
docker run -d -e YOUR_VAR=value ... ghcr.io/tartarus6/slimepedia/slimepedia:latest
```

## Monitoring and Management

### View Container Logs

```bash
# Follow logs in real-time
docker logs -f slimepedia

# View last 100 lines
docker logs --tail 100 slimepedia
```

### Check Container Status

```bash
docker ps --filter name=slimepedia
```

### Check Health Status

```bash
docker inspect slimepedia --format='{{.State.Health.Status}}'
```

### Restart Container

```bash
docker restart slimepedia
```

### Stop and Remove Container

```bash
docker stop slimepedia
docker rm slimepedia
```

## Troubleshooting

### Container Won't Start

Check the logs for errors:

```bash
docker logs slimepedia
```

Verify the image was pulled correctly:

```bash
docker images | grep slimepedia
```

### Port Already in Use

Check what's using port 3000:

```bash
sudo lsof -i :3000
```

Change the host port in your deployment configuration.

### Image Pull Issues

If you have trouble pulling from GHCR, verify the image exists:

```bash
# List available tags on GitHub
# Visit: https://github.com/Tartarus6/slimepedia/pkgs/container/slimepedia%2Fslimepedia
```

### Health Check Failing

The container includes a health check that pings `http://localhost:3000`. If it fails:

1. Check if the application started correctly: `docker logs slimepedia`
2. Verify the port is accessible: `curl http://localhost:3000`
3. Check if the container is running: `docker ps -a | grep slimepedia`

## Version Pinning and Rollback

### Using Specific Versions

Pin to a specific commit for reproducible deployments:

```bash
# Use a specific commit SHA
docker pull ghcr.io/tartarus6/slimepedia/slimepedia:main-abc1234
```

Update `docker-compose.yml` to pin a version:

```yaml
services:
  slimepedia:
    image: ghcr.io/tartarus6/slimepedia/slimepedia:main-abc1234  # Pin to specific version
```

### Rollback to Previous Version

```bash
# Stop current container
docker stop slimepedia
docker rm slimepedia

# Run a previous version
docker run -d \
  --name slimepedia \
  --restart unless-stopped \
  -p 3000:3000 \
  ghcr.io/tartarus6/slimepedia/slimepedia:main-abc1234
```

Or with Docker Compose, change the tag in `docker-compose.yml` and run:

```bash
docker-compose up -d
```

## GitHub Container Registry Details

### Image Naming

The image is published to:
```
ghcr.io/tartarus6/slimepedia/slimepedia
```

This follows the format:
```
ghcr.io/<owner>/<repository>/<image-name>
```

### Available Tags

- `latest` - The most recent build from the main branch
- `main` - Same as latest, but explicitly from main branch
- `main-<commit-sha>` - Specific commit builds (e.g., `main-abc1234`)

### Package Visibility

The package is set to **public** visibility, so no authentication is required to pull images. You can view available versions at:
```
https://github.com/Tartarus6/slimepedia/pkgs/container/slimepedia%2Fslimepedia
```

## Production Best Practices

### Use a Reverse Proxy

Put the container behind a reverse proxy for HTTPS and additional features:

**Nginx example:**

```nginx
server {
    listen 80;
    server_name slimepedia.example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Caddy example:**

```
slimepedia.example.com {
    reverse_proxy localhost:3000
}
```

### Set Up Automatic Updates

Create a cron job to automatically pull and restart:

```bash
# Edit crontab
crontab -e

# Add this line to check for updates daily at 3 AM
0 3 * * * cd /path/to/slimepedia && docker-compose pull && docker-compose up -d
```

### Monitor Resources

Monitor container resource usage:

```bash
docker stats slimepedia
```

### Implement Logging

Set up log rotation to prevent disk space issues:

```yaml
services:
  slimepedia:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

## Development Workflow

1. Make changes to the code locally
2. Test locally using `npm run dev`
3. Commit and push to main branch
4. GitHub Actions builds and publishes the Docker image
5. Pull and deploy the new image on your server

This workflow keeps development fast (no need to build Docker images locally) while ensuring production deployments are consistent and reproducible.
