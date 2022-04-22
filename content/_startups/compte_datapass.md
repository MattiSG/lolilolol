---
title: Compte Datapass
mission: La fédération d'identité pour les personnes morales
incubator: dinum
sponsors:
  - /organisations/dinum
contact: ishan.bhojwani@beta.gouv.fr
phases:
  - name: construction
    start: 2022-04-22
  - name: investigation
    start: 2022-03-01
    end: 2022-04-22
usertypes:
  - etat
---

## Contexte

Il existe de nombreux services numériques qui s'adressent aux collectivités territoriales (exemples : Urban Vitaliz, macantine, le.taxi, covoiturage.beta.gouv.fr, territoiresentransition.fr, data.gouv.fr, api.gouv.fr, adresse.data.gouv.fr...), ou plus largement à des personnalités morales (entreprises, associations, services de l'Etat). Ces services nécessitent souvent un système d'authentification. 

Ainsi, face à la multiplication des services numériques de l'État, et pour prendre l'exemple des territoires, les agents de collectivités peuvent avoir à gérer des dizaines de comptes différents.

À chaque service, les équipes de développement de ces services sont tentées de développer une brique d'authentification complexe, car s’authentifier en tant que personne physique faisant partie d'une organisation (entreprise, collectivité, association) sur un service numérique de l’État peut soulever des problèmes de plusieurs natures : 
- Pour la validation de l’identité de la personne lors de ses inscriptions sur différentes plateformes, ainsi que la gestion de ses comptes à long terme (gestion de droits).
- Lorsque plusieurs personnes travaillent autour d'une même organisation ou ne peuvent pas travailler ensemble sur un même sujet.
- En termes de sécurité informatique et de configuration de permissions et d’accès à certaines données.

## Solution pressentie 

Il existe déjà plusieurs services ayant développé une brique d'authentification pour certifier l'appartenance d'une personne physique qui se connecte sur un service à une personnalité morale telle une collectivité.

Il est proposé de repartir des comptes utilisés par api.gouv.fr. Cette solution permet de vérifier l’identité de l’inscrit de manière automatisée à partir de son courriel et du SIRET de son organisation. Cette solution permet également une gestion de groupes, d’utilisateurs et est fiable en termes de sécurité informatique et de restriction d’accès aux seuls agents autorisés.

**Il serait possible d'adapter la brique compte api.gouv pour la rendre utilisable par d'autres services, en transformant le compte api.gouv en "Compte Datapass".**

Grâce au Compte Datapass, toute plateforme numérique qui s'adresse à une personne morale pourrait facilement intégrer une brique d'authentification, qui permettrait à la fois : 
- aux personnes faisant partie de l'organisation de se connecter via son Compte Datapass, et donc de ne pas créer un nouveau compte à chaque inscription à une nouvelle plateforme
- aux développeurs/développeuses de la plateforme en question de ne pas avoir à développer une brique d'authentification ad hoc et de ne pas avoir à gérer la validation de l'identité de chaque personne de manière individuelle.
