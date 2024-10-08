DOCKER-RUN = docker compose run -e TERM --rm
BUNDLE-EXEC = bundle exec

build:
	docker compose build
spec:
	$(DOCKER-RUN) web $(BUNDLE-EXEC) rspec
guard:
	$(DOCKER-RUN) web $(BUNDLE-EXEC) guard
up:
	docker compose up
down:
	docker compose down
sh:
	$(DOCKER-RUN) web bash

html-proofer:
	bundle exec htmlproofer ./_site/ --ignore-files "/recrutement\/*/" --no-enforce-https --disable-external --root_dir _site/ --allow-missing-href

.PHONY: validate spec
validate:
	ruby bin/validate schema/authors.yml "content/_authors/*.md"
	ruby bin/validate schema/startups.yml "content/_startups/*.md"
	ruby bin/validate schema/organisations.yml "content/_organisations/*.md"
