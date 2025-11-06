# Slimepedia Deployment Guide

This guide explains how to deploy Slimepedia to your server using the automated pipeline.

## Overview

The deployment pipeline consists of:
1. **GitHub Actions Workflow** - Automatically builds and pushes Docker images
2. **Server Deployment Script** - Updates the running container on your server
3. **Docker Compose** - Alternative deployment method for easier management

## Quick Setup

### 1. Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add the following secrets:

- `SSH_PRIVATE_KEY` - Your SSH private key for server access
- `SSH_HOST` - Your server's hostname or IP address
- `SSH_USER` - SSH username (e.g., `root` or your user)
- `SSH_PORT` - SSH port (optional, defaults to 22)

### 2. Set up GitHub Container Registry on Server

On your server, run this once to authenticate with GitHub Container Registry:

```bash
# Create a GitHub Personal Access Token with read:packages permission
# Go to: GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
# Create token with 'read:packages' scope

echo YOUR_GITHUB_TOKEN | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
```

### 3. Make scripts executable

```bash
chmod +x scripts/deploy.sh
chmod +x scripts/local-deploy.sh
```

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

Push to the `main` branch, and GitHub Actions will automatically:
1. Build the Docker image
2. Push it to GitHub Container Registry
3. SSH into your server
4. Pull the latest image
5. Restart the container

```bash
git add .
git commit -m "Update application"
git push origin main
```

### Method 2: Using Docker Compose

Copy `docker-compose.yml` to your server and run:

```bash
# First time setup
docker-compose up -d

# Update to latest version
docker-compose pull
docker-compose up -d
```

### Method 3: Manual Deployment Script

On your server, run the deployment script manually:

```bash
bash /path/to/slimepedia/scripts/deploy.sh
```

Or update the script directly on the server:

```bash
curl -sSL https://raw.githubusercontent.com/Tartarus6/slimepedia/main/scripts/deploy.sh | bash
```

### Method 4: Local Testing

Build and run locally:

```bash
./scripts/local-deploy.sh
```

## Configuration

### Change Port

Edit the `HOST_PORT` in `scripts/deploy.sh` or the port mapping in `docker-compose.yml`:

```yaml
ports:
  - "8080:3000"  # Change 8080 to your desired port
```

### Environment Variables

Add environment variables in `docker-compose.yml` or `scripts/deploy.sh`:

```yaml
environment:
  - NODE_ENV=production
  - CUSTOM_VAR=value
```

## Monitoring

### View Container Logs

```bash
docker logs -f slimepedia
```

### Check Container Status

```bash
docker ps --filter name=slimepedia
```

### Restart Container

```bash
docker restart slimepedia
```

## Troubleshooting

### Container won't start

Check logs:
```bash
docker logs slimepedia
```

### Permission denied on SSH

Make sure your SSH key is properly formatted and has correct permissions:
```bash
chmod 600 ~/.ssh/deploy_key
```

### Image pull fails

Verify GitHub Container Registry authentication:
```bash
docker login ghcr.io
```

### Port already in use

Change the `HOST_PORT` in your deployment configuration.

## Rollback

To rollback to a previous version:

```bash
# List available tags
docker images ghcr.io/tartarus6/slimepedia/slimepedia

# Use a specific version
docker stop slimepedia
docker rm slimepedia
docker run -d --name slimepedia -p 3000:3000 ghcr.io/tartarus6/slimepedia/slimepedia:main-abc123
```

## Security Notes

- Keep your SSH private key secure
- Use a dedicated deploy user with limited permissions
- Consider using a reverse proxy (nginx/Caddy) for HTTPS
- Regularly update the base Docker image

## Next Steps

1. Set up a reverse proxy (nginx/Caddy) for HTTPS
2. Configure a domain name
3. Set up monitoring (e.g., Uptime Kuma, Netdata)
4. Configure automated backups if needed
