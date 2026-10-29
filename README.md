# Projet CI/CD SDV

Ce projet est une application full-stack composée d’un frontend Angular et d’un backend Spring Boot avec base de données MySQL. Son objectif est de mettre en place une chaîne CI/CD simple mais réaliste en utilisant GitHub, GitHub Actions, Docker, Kubernetes et GitOps.

## Architecture

- Frontend : Angular 21
- Backend : Spring Boot 3 + Java 21
- Base de données : MySQL 8
- CI/CD : GitHub Actions
- Qualité : SonarQube
- Sécurité : Trivy
- Conteneurisation : Docker
- Déploiement : Kubernetes
- GitOps : Argo CD

## Branches

- `main` : branche principale de production
- `dev-front` : branche de travail du frontend

## Objectif du TP

Automatiser le cycle de vie du projet :

1. Build du frontend
2. Build du backend
3. Tests automatisés
4. Analyse de qualité
5. Analyse de sécurité
6. Construction des images Docker
7. Publication des images
8. Déploiement dans Kubernetes
9. Synchronisation via GitOps

## Structure du dépôt

- `Angular_21_taskcrud/` : application frontend
- `SpringBoot_Api_withBD_docker/` : application backend
- `.github/workflows/` : workflows GitHub Actions
- `k8s/` : manifests Kubernetes
- `docs/` : plan de démonstration du TP

## Pipeline CI

Le workflow GitHub Actions est déclenché lors d’un push ou d’une pull request sur `main` et `dev-front`.

Il réalise :
- installation des dépendances du frontend
- build Angular
- build Maven du backend
- contrôle de cohérence du dépôt

## Docker

Le backend est préparé pour être construit dans un conteneur Docker.

## Kubernetes

Les manifests dans `k8s/` préparent un déploiement simple avec :
- un pod MySQL
- un déploiement backend
- un service pour exposer le backend

## GitOps

L’idée est de faire correspondre l’état du cluster à l’état décrit dans Git. Argo CD peut ensuite synchroniser automatiquement les ressources Kubernetes avec le dépôt.

## Démonstration

Le plan de démonstration est disponible dans [docs/demo-plan.md](docs/demo-plan.md).

## À compléter par le groupe

- configuration SonarQube
- scan Trivy des images
- publication effective sur Docker Hub
- installation de Kubernetes local
- installation d’Argo CD
- validation finale du déploiement

## Bonnes pratiques

- ne jamais publier de secrets dans le dépôt
- garder les branches propres
- utiliser des règles de validation sur GitHub
- conserver un historique de versions traçable