# ProjetCiCD_SDV — Todo App Fullstack

Application de gestion de tâches (CRUD) déployée avec une chaîne CI/CD complète : build, qualité, sécurité et livraison GitOps sur Kubernetes, en dev comme en prod.

**Membres :** Mamadou Hachimiou Diallo (backend & Jenkins) · Alpha Sadio Diallo (frontend & GitHub Actions)

## L'application

| Service | Techno | Rôle |
|---|---|---|
| `Angular_21_taskcrud` | Angular 21 + Nginx | Interface utilisateur (SPA) |
| `SpringBoot_Api_withBD_docker` | Spring Boot (Java 21) | API REST |
| `mysql-db` | MySQL 8 | Persistance des données |

Le front appelle une URL **relative** (`/api/todos`) : Nginx la relaie vers le Service interne `todo-api:8080`. C'est ce qui permet de déployer la même image front sur tous les environnements sans rien reconstruire. En local (`ng serve`), le même comportement est reproduit via `proxy.conf.json`.

## Comment ça marche

Chaque service a son propre pipeline, mais les deux suivent le même modèle : **build → qualité → sécurité → image → déploiement GitOps**.

```
commit sur main
   │
   ▼
┌─────────────────────┐        ┌─────────────────────┐
│ Jenkins (backend)    │        │ GitHub Actions (front)│
│ 1. Checkout           │        │ 1. Checkout           │
│    (garde anti-boucle)│        │    (garde anti-boucle)│
│ 2. Build & tests       │        │ 2. Compile (npm build) │
│    (Maven · Surefire)  │        │ 3. Analyse SonarCloud  │
│ 3. Analyse SonarCloud  │        │ 4. Build image Docker  │
│ 4. Build image Docker  │        │ 5. Scan Trivy          │
│ 5. Scan Trivy          │        │ 6. Push Docker Hub     │
│ 6. Push Docker Hub     │        │ 7. Commit manifest     │
│ 7. Commit manifest     │        │    (cd_front(_prod))   │
│    (cd_back(_prod))    │        └─────────────────────┘
└─────────────────────┘
   │                                       │
   └──────────────┬────────────────────────┘
                   ▼
         dépôt Git (source de vérité)
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
  ArgoCD dev              ArgoCD prod
  (auto-sync)              (sync manuel)
        │                     │
        ▼                     ▼
  Cluster local          VPS — cluster k3s
  (Docker Desktop)        (ArgoCD dédiée)
```

- **Garde anti-boucle** : chaque pipeline ignore les commits qu'il a lui-même générés (message `ci: deploy … image`), pour ne pas se redéclencher à l'infini.
- **GitOps** : les pipelines ne déploient jamais directement. Ils mettent à jour un tag d'image dans un fichier YAML versionné (`cd_back(_prod)/`, `cd_front(_prod)/`) ; c'est ce commit qu'ArgoCD détecte et applique.
- **Dev vs prod** : en dev, ArgoCD synchronise automatiquement (`prune` + `selfHeal`). En prod, la synchronisation est **manuelle** (clic "Sync" dans l'UI ArgoCD) — c'est le point de promotion contrôlé.
- **Deux instances ArgoCD séparées** (une locale, une sur le VPS) pour ne jamais exposer l'API Kubernetes du VPS sur Internet.
- **Sécurité** : chaque image est scannée par Trivy (CVE `HIGH`/`CRITICAL`) avant d'être poussée sur Docker Hub. Pour l'instant le scan est informatif (`--exit-code 0`), non bloquant.

## Stratégie Git

- `develop_back` : évolutions backend → Pull Request vers `main`
- `dev-front` : évolutions frontend → Pull Request vers `main`
- `main` : branche protégée, unique source de vérité pour les deux pipelines et pour les manifests GitOps

## Arborescence

```
SpringBoot_Api_withBD_docker/   API Spring Boot (code + Dockerfile)
Angular_21_taskcrud/            Front Angular (code + Dockerfile + nginx.conf)
Jenkinsfile                     Pipeline CI/CD backend
.github/workflows/ci.yml        Pipeline CI/CD frontend
cd_back/, cd_front/             Manifests Kubernetes — environnement dev (sync auto)
cd_back_prod/, cd_front_prod/   Manifests Kubernetes — environnement prod (sync manuel)
```

## Images Docker Hub

- `hasalpcode/projet_ci_cd_sdv` (backend) — tags : numéro de build + `latest`
- `hasalpcode/projet_ci_cd_sdv-front` (frontend) — tags : sha du commit + `latest`

## Environnements

| | Dev | Prod |
|---|---|---|
| Cluster | Docker Desktop Kubernetes | VPS avec k3s |
| ArgoCD | Instance locale | Instance dédiée sur le VPS |
| Sync | Automatique (`prune` + `selfHeal`) | Manuelle |
| Manifests | `cd_back/`, `cd_front/` | `cd_back_prod/`, `cd_front_prod/` |
| Accès | NodePort 30080 (API) / 30081 (front) | idem |
