# Plan de démonstration CI/CD

## Durée : 10 à 15 minutes

### 1. Présentation du projet (2 min)
- Explication du projet full-stack Angular + Spring Boot + MySQL
- Présentation des branches Git : `main` et `dev-front`
- Explication du rôle de chacun dans le travail

### 2. Pipeline CI (3 min)
- Montrer le fichier GitHub Actions
- Expliquer le déclenchement sur push et pull request
- Montrer les jobs : frontend Angular et backend Maven
- Insister sur l’importance du build avant le déploiement

### 3. Qualité et sécurité (2 min)
- Expliquer SonarQube et le scan de qualité
- Expliquer Trivy comme analyse de vulnérabilités
- Montrer l’intérêt de bloquer une image ou un build si le score est mauvais

### 4. Docker et publication (2 min)
- Montrer le Dockerfile du backend
- Expliquer l’image Docker et le registre Docker Hub
- Montrer la publication automatique via GitHub Actions

### 5. Déploiement Kubernetes / GitOps (3 min)
- Expliquer les manifests Kubernetes
- Montrer la base MySQL et le service backend
- Expliquer l’idée de GitOps via Argo CD : Git = source de vérité

### 6. Conclusion (1 min)
- Résumer l’enchaînement : code → build → tests → qualité → image → publication → déploiement
- Souligner la notion de reproductibilité et de fiabilité

## Points clés à dire pendant la démonstration
- Le pipeline automatise les étapes répétitives.
- La chaîne ne remplace pas la qualité de l’application, elle la sécurise.
- Chaque étape doit produire une information utile à l’étape suivante.
- Le but est de rendre le projet fiable, reproductible et traçable.
