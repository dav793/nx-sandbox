# Nx Sandbox

Sandbox project for testing and exploring Nx monorepos

## Build container

* Build docker image from `/docker/Dockerfile` (if not exists)
```bash
docker build -t david/nx-sandbox -f docker/Dockerfile .
```

* Create volume pointing to project in host (if not exists)
```bash
docker volume create --driver local --opt type=none --opt device=$(pwd) --opt o=bind nx-sandbox
```

* Create docker container and run shell
```bash
docker run -it --network host -v nx-sandbox:/home/david --name nx-sandbox-1 david/nx-sandbox
```

* Start stopped container and run shell
```bash
docker start -i nx-sandbox-1
```

* Run shell in running container
```bash
docker exec -it nx-sandbox-1 sh
```

* Run shell as root
```bash
docker exec -it --user root nx-sandbox-1 sh
```

## Run

While inside container:
```
cd myorg
```
Then...

* Start Shop app
```
npx nx run shop:serve:development
```

* Start Admin app
```
npx nx run admin:serve:development
```

* Run unit tests for `common-ui` lib project with jest
```
npx nx test common-ui
```

* Run linter for `common-ui` lib project with eslint
```
npx nx lint common-ui
```

### Graph utility

* Start
```
npx nx graph
```

* Highlight affected projects in committed but un-pushed changes
```
npx nx affected:dep-graph --base=origin/master --head=HEAD
```