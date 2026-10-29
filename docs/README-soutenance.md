# README de soutenance

## Sujet
Projet CI/CD SDV : automatisation du cycle de vie d’une application full-stack Angular + Spring Boot + MySQL.

## Objectif du projet
Mettre en place une chaîne CI/CD simple et réaliste pour automatiser les étapes suivantes :
- build du frontend Angular
- build du backend Maven
- tests et validation
- analyse de qualité
- analyse de sécurité
- construction d’une image Docker
- publication de l’image
- déploiement dans Kubernetes
- synchronisation via GitOps

## Architecture du projet

- Frontend : Angular 21
- Backend : Spring Boot 3 + Java 21
- Base de données : MySQL 8
- CI/CD : GitHub Actions
- Qualité : SonarQube
- Sécurité : Trivy
- Conteneurisation : Docker
- Déploiement : Kubernetes
- GitOps : Argo CD

## Outils mis en place

- GitHub pour le versionnement et le déclenchement des workflows
- GitHub Actions pour l’intégration continue
- Maven pour la compilation backend
- npm pour le build frontend
- Docker pour l’empaquetage applicatif
- Docker Hub pour la publication des images
- Kubernetes pour l’exécution de l’application
- Argo CD pour la logique GitOps

## Stratégie de travail

Le projet est organisé avec deux branches principales :
- `main` : version de référence / production
- `dev-front` : branche de travail du frontend

Le travail consiste à automatiser le livrable avec une logique claire :
code source → build → tests → qualité → image → publication → déploiement.

## Points forts du projet

- automatisation du build
- réduction des erreurs manuelles
- traçabilité du code via Git
- reproductibilité du déploiement
- séparation claire entre CI et CD
- préparation pour des déploiements plus avancés avec Kubernetes et Argo CD

## Limites du projet

- le backend nécessite encore une validation Java/Maven plus poussée
- les secrets ne doivent jamais être ajoutés dans le dépôt Git
- le déploiement Kubernetes reste une base simple, utile pour la démonstration

## Conclusion

Le projet montre qu’une chaîne CI/CD ne consiste pas seulement à lancer des commandes ; elle permet d’automatiser la confiance dans la qualité du code, la sécurité et la reproductibilité des livraisons.
