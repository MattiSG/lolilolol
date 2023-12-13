---
title: Carbure
mission: Gestion centralisée des flux de biocarburants
sponsors:
    - /organisations/dgec
incubator: mtes
phases:
  - name: investigation
    start: 2019-10-01
    end: 2019-11-30
  - name: construction
    start: 2019-11-30
link: https://carbure.beta.gouv.fr
repository: https://github.com/MTES-MCT/carbure
stats: true
contact: guillaume.caillou@developpement-durable.gouv.fr
usertypes:
  - etat
thematiques : 
  - Agriculture
  - Cartographie
---

Les biocarburants, utilisés comme substituts aux carburants fossiles, permettent de réduire de plus de 4% les émissions de gaz à effet de serre du transport en France. 

D’un point de vue technique, on distingue trois générations de biocarburants selon l’origine de la biomasse utilisée (matière organique d’origine végétale, animal, résidus ou déchet ou microalgue). 
    
La réglementation des biocarburants s’effectue en fonction de la nature de la matière première utilisée. Les biocarburants conventionnels élaborés à partir de matières premières en concurrence avec l’alimentaire et les biocarburants avancés élaborés à partir d’autres matières premières et doivent respecter des critères de durabilité : réduire les émissions de gaz à effet de serre sur l’ensemble de leur cycle de vie d’au moins 50% et ne pas provenir de terres déforestées.

En France, l’incorporation de biocarburants dans les carburants est réglementée au moyen de la Taxe Incitative Relative à l’Incorporation de Biocarburants (TIRIB) pour obliger les opérateurs pétrolier à incorporer des biocarburants dans les carburants fossiles. En 2020, l’objectif d’incorporation est de 8% de biocarburants dans les carburants fossiles. Un opérateur ne paye pas la TIRIB s’il rempli l’objectif et peut revendre l’incorporation excédentaire à un opérateur n’ayant pas atteint l’objectif (pour un prix inférieur à ce que leur aurait coûté la TIRIB). 


## Les problèmes actuels
Aujourd’hui, les biocarburants doivent justifier leur durabilité pour être valables: ils doivent impérativement :
* Réduire les émissions de Gaz à effet de serre par rapports aux carburants fossiles
* Ne pas provenir de terres déforestées

Les biocarburants sont produits dans des bioraffineries à partir de matières premières dites « durables ». Lors de leur incorporation dans les carburants fossiles (dans les dépôts pétroliers), l’opérateur déclare les lots incorporés à la Direction Générale de l’Énergie et du Climat (DGEC) pour justifier leur durabilité. En tout, plus de 40 000 lots (4 milliards de litres) sont déclarés par an. Après incorporation, l’opérateur bénéficie d’un certificat d’incorporation, qu’il peut vendre à d’autres opérateurs pour l’atteinte des objectifs d’incorporation : les flux physiques sont alors déconnectés des flux administratifs. Ce certificat, au format papier, est utilisé lors de la déclaration des opérateurs aux services des douanes pour justifier le taux d’incorporation et ainsi éviter de payer la TIRIB.

Cependant, le système de déclaration de durabilité de la DGEC et de déclaration aux douanes ne communiquent pas directement, ce qui complique les contrôles. Le marché des certificats étant complètement détaché du marché physique, cela pose des questions sur la traçabilité.
    
De plus, il existe une forte pression sur les matières premières les plus durables, notamment les déchets et résidus, les gisements étant rares et les avantages fiscaux associés à leur utilisation étant particulièrement intéressants. À défaut de contrôles assez fiables, il peut donc y avoir de la fraude : des opérateurs faisant passer des lots non durables comme durable afin de remplir leurs objectifs d’incorporation de biocarburants.
Nous avons donc un système archaïque et particulièrement lourd à gérer pour l’ensemble des opérateurs, complexifiant l’analyse des données et les contrôles.


## Le produit : CarbuRe

CarbuRe est une plateforme permettant de suivre l’ensemble des flux de biocarburants et de relier directement et simplement les flux physiques aux flux administratifs. Cela permet de fiabiliser les données, sécuriser les approvisionnements et diminuer les risques de fraudes.


## Les premières étapes

Dans un premier temps, nous allons créer la base de donnée avec les fonctionnalités de base associées:
* Interface de saisie de l’information pour permettre aux producteurs de biocarburants d’intégrer leurs informations dans la base de donnée.
* Historique des informations saisies
* Affiliation à un opérateur pétrolier
* Extraction de données


### Périmètre de test

Création de donnée par les producteurs jusqu’à la récupération par les opérateurs pétroliers.

### Et ensuite?

Élargissement de la base pour faire le lien avec les douanes, et pour intégrer les échanges entre opérateurs.

