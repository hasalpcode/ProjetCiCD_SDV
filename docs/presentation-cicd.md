# Présentation CI/CD - 10 slides

## Slide 1 — Titre
Projet CI/CD SDV
Application full-stack Angular + Spring Boot + MySQL

## Slide 2 — Problème initial
Avant l’automatisation :
- build manuel
- tests peu réguliers
- déploiement fragile
- risques de régression
- manque de traçabilité

## Slide 3 — DevOps et CI/CD
- Git pour le versionnement
- pipeline pour automatiser les vérifications
- CI : build + tests + qualité
- CD : préparation du déploiement

## Slide 4 — Architecture du projet
- Frontend Angular
- Backend Spring Boot
- MySQL
- GitHub Actions
- Docker
- Kubernetes
- Argo CD

## Slide 5 — Pipeline GitHub Actions
- déclenchement sur push / pull request
- build Angular
- build Maven
- validation automatique du dépôt

## Slide 6 — Qualité et sécurité
- SonarQube pour analyser le code
- Trivy pour détecter les vulnérabilités
- blocage de la publication si les contrôles échouent

## Slide 7 — Docker et publication
- construction d’une image Docker
- publication sur Docker Hub
- versionnage des images
- reproductibilité du déploiement

## Slide 8 — Kubernetes
- MySQL dans le cluster
- backend déployé avec un service
- mise à l’échelle et gestion des conteneurs
- environnement d’exécution stable

## Slide 9 — GitOps et Argo CD
- Git comme source de vérité
- comparaison entre état souhaité et état réel
- synchronisation automatique du cluster
- meilleure traçabilité

## Slide 10 — Conclusion
La chaîne CI/CD permet de livrer plus rapidement, plus sereinement et avec une meilleure qualité. Le projet montre le passage du code vers une application exécutable, sécurisée et reproductible.
