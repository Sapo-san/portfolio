export const Docker = `
# Docker & Compose cmd cheatsheet

I wrote this little guide while using Docker with WSL2 in my windows machine. Might add more stuff in the future.

## Important links
- [Docker Docs](https://docs.docker.com/)
- [Docker Hub | Search for images](https://hub.docker.com/search?q=)
- [Docker Docs | Compose file versions and upgrading](https://docs.docker.com/compose/compose-file/compose-versioning/)

## - Docker -

## List docker images
\`\`\`bash
# -- Syntax --
$ docker ps
\`\`\`

## Build image
\`\`\`bash
# -- Syntax --
$ docker build <dir> -t <image_name>
# -- o --
$ docker build -f <dockerfile_path> -t <image_name>
\`\`\`
- The \`\`\`-f\`\`\` flag is optional, only used if the Dockerfile is not named "Dockerfile". In case of Multistage Workflow, it's common to name dockerfiles as "Dockerfile.dev" and "Dockerfile.prod"

## Run Container
\`\`\`bash
# -- Syntax --
$ docker run -d -p <PORT-EXT>:<PORT-INT> -v <PATH-EXT>:<PATH-INT>:ro --name <container-name> <image-name>
\`\`\`

- \`\`\`-d\`\`\` flag means "detached". Runs the image in the background instead of attaching it to the current terminal. Remove the flag to leave the image attached to the current terminal.

- \`\`\`PORT-EXT\`\`\` specifies the External Port for data traffic. \`\`\`PORT-INT\`\`\` specifies Internal Port.

- \`\`\`-v\`\`\` is also optional. Its used to create volumes and sync files inside and outside the container (data persistence). Files inside the container path \`\`\`PATH-INT\`\`\` will be synced with the files outside the container in path \`\`\`PATH-EXT\`\`\`. NOTE: the \`\`\`:ro\`\`\` after \`\`\`PATH-INT\`\`\` tells the container that the files in the volume are read-only. If omitted, the container can modify files outside the container.

- To pass enviroment variables into the container, use flag \`\`\`-e <VARNAME>=<VALUE>\`\`\`. If there are too many variables, you can specify an \`\`\`.env\`\`\` instead using \`\`\`--env-file <PATH-TO-ENV>\`\`\`. Also, **don't forget to add the \`\`\`.env\`\`\` to the \`\`\`.dockerignore\`\`\` file**.

## Enter inside a container
\`\`\`bash
# -- Syntax --
$ docker exec -it <container-name> bash
\`\`\`

## Kill / remove a container
\`\`\`bash
# -- Syntax --
$ docker rm <container-name> -f
\`\`\`
- NOTE: \`\`\`-f\`\`\` flag means "force". Forces removing the container even if it's running.

## Free system space from docker
\`\`\`bash
# -- Syntax --
$  docker system prune --all
\`\`\`

---
## - docker-compose -

## Build specified images in docker-compose.yml
\`\`\`bash
# -- Syntax --
$ docker-compose build
\`\`\`

## Up all containers
\`\`\`bash
# -- Syntax --
$ docker-compose up -d 
\`\`\`
- Optional \`\`\`-d\`\`\` means "detached". 

## Down all containers
\`\`\`bash
# -- Syntax --
$ docker-compose down
\`\`\`

`