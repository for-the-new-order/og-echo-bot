# Og's Discord echo bot

This little bot echoes what you type back to you.

## Goal

This is a simple experiment that I made to test deployment at different cloud provider using their serverless or Virtual Machine offerings.
The bot is built using Node.js and Typescript and is packed into a Docker container.

## Technology stack

-   Docker
-   Node.js
-   Typescript

## Build

```bash
docker build --rm -f "Dockerfile" -t ogechobot .
# OR add the "no-cache" flag if you are making changes
docker build --rm -f "Dockerfile" -t ogechobot . --no-cache
```

## Run

Make sure you created an `.env` file containing the appropriate environment variables, see `.env-template`, then:

-   (locally) `docker run --env-file ./.env ogechobot`
-   (host) `docker run --env-file ./.env --restart=always -d "registry.hub.docker.com/carlhugo/ogechobot:1.1.0"`
    -   Change `1.1.0` by the version that you want to run
    -   Make sure to copy the `.env` file on the remote machine
