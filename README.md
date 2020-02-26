# Og's Discord echo bot

A little Discord bot that echoes what you type back to you, using the `!ogecho` command. For example, typing: `!ogecho write this back to me` should have the bot reply to you `write this back to me` in a grey box.

The bot also support the `version` command, echoing its version. For example, `!ogecho version` should write `og-echo-bot: 1.3.0` (the version number `1.3.0` may change).

## Goal

This is a simple experiment that I made to test deployment at different cloud provider using their serverless or Virtual Machine offerings.
The bot is built using Node.js and Typescript and is packed into a Docker container.

### Technology stack

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
-   (host) `docker run --env-file ./.env --restart=always -d "registry.hub.docker.com/carlhugo/ogechobot:1.0.0"`
    -   Change `1.0.0` by the version that you want to run
    -   Make sure to copy the `.env` file on the remote machine

You can also take a look at the `azure-pipelines.yml` which contains the CI/CD pipeline tasks.
