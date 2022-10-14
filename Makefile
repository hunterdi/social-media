include .env

.PHONY: up

up:
	docker-compose --env-file .env -f docker-compose.yml up -d --build --force-recreate --renew-anon-volumes

.PHONY: down

down:
	docker-compose --env-file .env -f docker-compose.yml down -v

.PHONY: logs

logs:
	docker-compose --env-file .env -f docker-compose.yml up logs -f

.PHONY: up-app

up-app:
	docker-compose --env-file .env -f docker-compose-app.yml up -d --build --force-recreate --renew-anon-volumes

.PHONY: down-app

down-app:
	docker-compose --env-file .env -f docker-compose-app.yml down -v
