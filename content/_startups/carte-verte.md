---
title: Carte Verte
mission: Comment verdir les habitudes de consommation
sponsors:
  - /organisations/ademe
incubator: ademe
contact: carte-verte@beta.gouv.fr
link: https://carte-verte.beta.gouv.fr
repository: https://github.com/incubateur-ademe/carte-verte
accessibility_status: non conforme
dashlord_url: https://dashlord.incubateur-ademe.beta.gouv.fr/startup/carte-verte
stats: true
stats_url: https://carte-verte.beta.gouv.fr/stats
budget_url: https://carte-verte.beta.gouv.fr/budget
analyse_risques: true
analyse_risques_url: https://github.com/incubateur-ademe/carte-verte/blob/main/SECURITY.md
mon_service_securise: false
phases:
  - name: investigation
    start: 2023-01-03
    end: 2023-10-13
  - name: construction
    start: 2023-10-13
events:
  - name: committee
    date: 2023-04-12
    comment: Comité de fin d'investigation
  - name: committee
    date: 2023-10-13
    comment: Comité de lancement de la construction
  - name: committee
    date: 2024-07-01
techno:
  - Next.js
  - React
  - MDX
  - TypeScript
usertypes:
  - particulier
  - entreprise
redirect_from:
  - /startups/eco-euro
thematiques:
  - Écologie
---
## Contexte
Carte Verte s’inscrit dans un objectif de politique publique de réduction de l’empreinte environnementale des français et pose le constat suivant : l’empreinte environnementale de la consommation (“je mange”, “j’achète”) des citoyens est trop élevée et peu de dispositifs existent pour l’abaisser (contrairement aux champs des transports et du logement).

Sur cette base, l’équipe a concentré ses travaux sur le panier du quotidien (alimentation, hygiène & beauté, entretien & nettoyage) et a cherché à comprendre ce qui empêchait le changement d’habitude vers une consommation plus responsable. Après une série d’entretien et d’exploration des études existantes, les principaux apprentissages sont :

- Le prix perçu : premier frein pour consommer responsable (/bio) ou accroître sa consommation durable (obstacle pour 52% des français (ObSoCo, 2020))
- La consommation responsable n’est pas qu’une affaire de « bobos » et mobilise déjà les jeunes & les CSP-. Néanmoins, ces derniers envisagent davantage de restreindre leur consommation durable pour des raisons financières
- Pour l’alimentaire, le prix est perçu comme trop élevé lorsque l’on raisonne à panier constant ( = panier standard avec des produits labellisés “responsable”), mais, lorsque l'on raisonne à apport nutritionnel équivalent en modifiant la répartition de produits achetés, le panier responsable n’est pas forcément plus cher… (WWF, 2017)

Le défi de Carte Verte est le suivant : comment faire pour rendre accessible le panier responsable du quotidien ?

## La solution Carte Verte
Une première prise de température auprès de particuliers et de commerçants a révélé un bon accueil de l’idée Carte Verte :
- 75% des personnes interrogées se disent "très intéressées".
- Parmi ces personnes, plus de la moitié considère que cela leur permettrait de privilégier d'un panier plus durable.

Par ailleurs, le [retour d’expérience](https://fr.businessam.be/eco-cheque-gagne-popularite/) des écochèques belges (moyen de paiement jusqu’à 250€ / an destiné à l’achat exclusif de produits et services à caractère écologique) illustre un potentiel d’impact intéressant.

## L’expérimentation Carte Verte
Carte Verte lance une expérimentation pour évaluer l’impact de sa proposition de valeur. L’expérimentation sera un succès si :
- les utilisateurs de Carte Verte augmentent significativement la part de produits durable dans leur budget “panier du quotidien” (au détriment des produits standards)
- L’effet d’aubaine et l’effet rebond sont limités

## Historique du service
A ses débuts, Carte Verte s’appelait Mon Compte Consommation et reposait sur les hypothèses suivantes :

- La connaissance précise de l’empreinte carbone est-elle nécessaire pour changer les habitudes
- Les données de consommation peuvent-elles être utilisées pour orienter les aides incitant à une consommation plus vertueuse.

Les recherches ont mis en avant que Mon Compte Consommation :
- Ne propose pas une proposition de valeur suffisamment attractive pour acquérir les utilisateurs (la précision de l’information sur leur impact individuel n’est pas un besoin. Les solutions existantes type NosGestesClimat ou Greenly sont suffisantes).
- La rétention est très difficile (pas de récurrence d’usage)
- Les solutions d’information et de sensibilisation éprouvent des difficultés à aller au delà de la prise de conscience (peu de passage à l’action)
- La mise en oeuvre d’aide et de recommandation est difficilement faisable (difficultés techniques et d’usages pour récupérer les données) et l’action a posteriori de l’achat limiterait l’impact.

L’équipe a donc réaliser un pivot pour qui a aboutit à la solution Carte Verte.
