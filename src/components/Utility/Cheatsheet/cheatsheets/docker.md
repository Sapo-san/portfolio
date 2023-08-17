# Docker & Compose personal notes & cheatsheet 

I wrote this little guide while using Docker with WSL2 in my windows machine. Will add more stuff in the future. 

This is a cheatsheet for common commands and stuff, a basic understanding of docker is required. Visit [this repository](https://github.com/daleal/docker-walkthrough) (made by a senior of mine from uni) or search for more tutorials.

(17th August, 2023) I'm also using it right now at work for a "new" application at work so this going to get updates more frequently.

## Important links
- [Docker Docs](https://docs.docker.com/)
- [Docker Hub | Search for images](https://hub.docker.com/search?q=)
- [Docker Docs | Compose file versions and upgrading](https://docs.docker.com/compose/compose-file/compose-versioning/)

## - Docker - (Concepts)

### Writing a proper dockerfile
You can find good templates on the internet or just ask ChatGPT for it. Be sure to ask nicely :)

If using docker while developing (_multistage workflow cough cough_), make sure to have a different dockerfile for development and production (Usually `Dockerfile.dev` and `Dockerfile.prod` do the trick)

### Using docker in Windows
**Avoid headaches** and install docker desktop and Windows Subsystem For Linux (Ideally version 2).

Also, **place the containerized repositories  in the WSL2 filesystem, not in Windows filesystem**, especially if you will code/develop using a volume to map the code into the container. If you place the repo in the windows filesystem, things like Hot Reload will **NOT** work because WSL2 doesn't have access to the windows filesystem. (Simplified explanation, it goes deeper than that)

### About mapping code into a container
The implementation of this will vary depending on the language/framework (I usually do this with Node.js) but it goes more or less like this

When using `docker build`, the dockerfile should order docker to do the following:
1. Copy repository code into image and install it's dependencies
2. Create a volume that maps repository code to image code, so whenever the container is created, if you modify the code it will be modified in the container too.

Note: if you notice any discrepancies between code and container OR‌ you take down the container, make sure to build the image again with the lastest changes before upping the container again.

## - Docker - (Commands)

In my experience, docker is uh.... a very "picky eater" when it comes to "consuming" its own commands. If something doesn't work usually its the args order or values that need to be checked.

### List docker images
```bash
# -- Syntax --
$ docker ps
```

### Build image
```bash
# -- Syntax --
$ docker build <dir> -t <image_name>
# -- or --
$ docker build <dir> -f <dockerfile_path> -t <image_name>
```
- `<dir>`: root directory of the repo to turn into an image.

- `-t`: Name of the image that will be built. 

- `-f `: Specifies the name of the dockerfile, if ommited then the dir will be `<dir>` and docker will assume the name of the dockerfile to be `Dockerfile`. _Can also be a relative or absolute path to the dockerfile_.

### Run Container
```bash
# -- Syntax --
$ docker run -d -p <PORT-EXT>:<PORT-INT> -v "<PATH-EXT>:<PATH-INT>:ro" --name <container-name> <image-name>
```

- ```-d```: (Optional) means "detached". Runs the image in the background instead of attaching it to the current terminal. Remove the flag to leave the image attached to the current terminal.

- ```PORT-EXT``` specifies the External Port for data traffic. ```PORT-INT``` specifies Internal Port.

- ```-v``` is also optional. Its used to create volumes and sync files inside and outside the container (data persistence). Files inside the container path ```PATH-INT``` will be synced with the files outside the container in path ```PATH-EXT```. NOTE: the ```:ro``` after ```PATH-INT``` tells the container that the files in the volume are read-only. If omitted, the container can modify files outside the container. _Wrap the value between double quotes if its not recognizing the paths_.

- To pass enviroment variables into the container, use flag ```-e <VARNAME>=<VALUE>```. If there are too many variables, you can specify an ```.env``` instead using ```--env-file <PATH-TO-ENV>```. Also, **don't forget to add the ```.env``` to the ```.dockerignore``` file**.

### Enter inside a container
```bash
# -- Syntax --
$ docker exec -it <container-name> bash
```

### Kill / remove a container
```bash
# -- Syntax --
$ docker rm <container-name> -f
```
- NOTE: ```-f``` flag means "force". Forces removing the container even if it's running.

### Free system space from docker
```bash
# -- Syntax --
$  docker system prune --all
```

---
## - docker-compose -

### Build specified images in docker-compose.yml
```bash
# -- Syntax --
$ docker-compose build
```

### Up all containers
```bash
# -- Syntax --
$ docker-compose up -d 
```
- Optional ```-d``` means "detached". 

### Down all containers
```bash
# -- Syntax --
$ docker-compose down
```
