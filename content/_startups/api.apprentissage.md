---
mission: >-
  Simplifier l’accès à des données de l'apprentissage fiables et à jour grâce à
  un point d’entrée unique et documenté
incubator: mission-apprentissage
contact: apprentissage@beta.gouv.fr
title: API Apprentissage
phases:
  - name: construction
    start: 2023-09-01
thematiques : 
  - Collectivités
  - Open Data
---
# **Le problème de politique publique**

L’écosystème de l’apprentissage est composé de différents acteurs, lesquels ont chacun leur propre système de collecte de données, et donc leurs propres bases de données, avec, pour chacune, une sémantique, une taxonomie et une qualité différentes.

La multiplication des canaux de collecte et de redistribution des données a pour conséquence un manque d’interopérabilité préjudiciable aux différents consommateurs finaux que sont les candidats à l’apprentissage, et, en amont, les différents acteurs de l’apprentissage qui ont besoin d’une donnée fiable, bien couverte, homogène, et profonde pour concevoir des services efficaces et avec le maximum d’impact auprès de leurs publics.

Parmi ces acteurs, la mission interministérielle pour l’apprentissage a développé plusieurs produits destinés aux futurs apprentis, aux entreprises et aux organismes de formation. Pour concevoir des produits à impact, il a fallu collecter différents jeux de données et y appliquer différents retraitements : homogénéisation, fiabilisation, correspondances…

Par exemple, il a fallu construire :

- des tables qui permettent le multilinguisme entre les univers éducation, enseignement supérieur, opérateurs de l’Etat (Onisep, Réseau des Carif-Oref, France Compétences, Pôle emploi, OPCO), le ministère du travail et celui de la fonction publique qui ne parlent pas tous le même langage ;
- des scripts de fiabilisation de données pour corriger les conflits de données provenant de différents systèmes d’information ;
- des scripts de contrôle-validation de données (format, cohérence de données…) ;
- des référentiels qui permettent d’accéder à de la donnée retraitée car homogénéisée, fiabilisée, et mise en correspondance pour un maximum de profondeur à partir d’une donnée pivot.

Au cours de la phase d’investigation pour la construction des produits de la Mission interministérielle pour l’apprentissage, il est apparu que chaque acteur impliqué dans le développement de services numériques pour l’apprentissage avait le même besoin d’identifier et d’accéder facilement à de la donnée réputée fiable, à jour et exhaustive.

# Les indicateurs d’impact

L’API Apprentissage aura un premier impact si elle permet de fiabiliser encore plus de données :

- Nombre de corrections de données effectuées sur les anomalies détectées suite aux transmissions d’information par les utilisateurs

Ensuite, elle aura un impact avéré si elle permet à ses utilisateurs :

- de gagner du temps dans la conception ou l’amélioration de leurs produits au bénéfice de leurs utilisateurs finaux (mesure par questionnaire sur le temps gagné à utiliser l’API Apprentissage par rapport au temps de recherche d’informations, ou de collecte et maintenance des bases de données en propre) ;
- de consommer des données qui ne leur étaient jusque là pas accessibles pour concevoir de nouveaux produits et services propres à aider les candidats à l’apprentissage (mesure par questionnaire sur les usages de l’API).

Enfin, elle aura un impact supplémentaire si elle est utilisée en masse :

- Nombre d’accès à l’API
- Nombre d'utilisateurs actifs
- Statistiques du statut de l’API
- Nombre d'accès à la documentation
- Nombre de téléchargements de fichiers plats associés à ce à quoi permet d’accéder l’API

# **Les usagers**

L’API Apprentissage, utilitaire qui permet de simplifier l’accès à des données fiables et à jour grâce à un point d’entrée unique et documenté, répondra non seulement aux besoins des produits conçus par la mission interministérielle pour l’apprentissage, mais aussi aux besoins de l’ensemble des acteurs, qu’ils soient ministères, Opco, organismes de formation, éditeurs de logiciels, ou autre acteurs publics et privés, dans une logique d’open data et d’interopérabilité.

Exemples de cas d’usage :

- un service utilise la donnée RNCP aura besoin de vérifier si ce RNCP est inactif et, le cas échéant, de connaître le nouveau RNCP actif correspondant.
- Un service qui a besoin de faire se correspondre l’offre de formation et l’offre d’emploi disponibles sur un métier donné aura besoin de faire des liaisons entre des données issues de l’univers Emploi (ROME, NAF) et de l’univers Formation ( RNCP, CFD, SISE…).

# Les sujets à débloquer

**Phase 1 (septembre 2023 - décembre 2023) – Objectif : recueillir les premiers retours d'expérience et valider le fonctionnement interne de l'API.**

Sujets à dé-risquer lors de cette 1ère phase : utilisabilité et stabilité de l’API, accès sécurisé et permissions, organisation d’une documentation à double niveau (technique et métier) au fur et à mesure de l’intégration de nouvelles données, tables de correspondances, scripts…

Cette première phase prévoit :

- Ouverture d’une route alpha en interne, incluant les données relatives à la formation.
- Tests et mise en place du monitoring d’utilisation
- Version alpha du portail d’accès public

**Phase 2 (janvier à 2024 - juin 2024) - objectif : répondre aux besoins exprimés par les utilisateurs externes pour élargir la portée et l'utilité de l'API Apprentissage**.

Sujets à dé-risquer lors de cette 2nde phase : mise en place d’un mécanisme robuste d’authentification pour le renforcement de la sécurisation des accès, maintien de la stabilité de l’API suite à l’intégration de nouvelles sources et à son utilisation par de nouveaux publics, identification des priorités

- Lancement d’une route externe accessible sous identification.
- Version beta et déploiement du portail d’accès public comportant les accès :
    - à la 1ère route (accès sécurisé et sous authentification)
    - aux documents et fichiers téléchargeables associés
    - à une boîte mail de recueil de signalements de données non fiables et de besoins d’autres données ou correspondances ou scripts de contrôle
- Expansion de l'API avec l'intégration de nouvelles sources de données, englobant des informations liées aux organismes de formation, aux entreprises, ainsi qu'aux contrats.

# Le terrain

Les premiers besoins ont été collectés auprès des équipes produit de la Mission interministérielle pour l’apprentissage. Ces besoins internes ont également été cités par des acteurs externes lors de différents entretiens menés auprès de plusieurs consommateurs potentiels (organismes de formation développant leurs propres SI, OPCO notamment).

Les entretiens avec des utilisateurs externes à la Mission apprentissage se poursuivront en phase 2 et tout au long du déploiement suite aux remontées d’anomalies et de besoins permises par l’installation du portail public d’accès aux données.
