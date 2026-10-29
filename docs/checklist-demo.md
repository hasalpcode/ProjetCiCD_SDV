# Checklist finale avant la démonstration

## 1. Démonstration du dépôt
- vérifier que le dépôt GitHub est bien présent
- confirmer les branches principales
- montrer la structure du projet
- expliquer le rôle du frontend et du backend

## 2. Démonstration du pipeline CI
- montrer le workflow GitHub Actions
- expliquer le déclenchement sur push / pull request
- montrer les jobs de build frontend et backend
- expliquer l’importance de la validation automatique

## 3. Démonstration de la qualité
- présenter SonarQube
- expliquer le rôle de l’analyse statique
- montrer que la qualité est un contrôle de la chaîne

## 4. Démonstration de la sécurité
- présenter Trivy
- expliquer les vulnérabilités détectées
- expliquer l’intérêt de scanner les images avant déploiement

## 5. Démonstration Docker
- montrer le Dockerfile du backend
- expliquer l’image Docker et le conteneur
- présenter Docker Hub comme registre de publication

## 6. Démonstration Kubernetes
- montrer le manifest MySQL
- montrer le manifest backend
- expliquer le rôle du Service et du Deployment
- présenter la logique de déploiement

## 7. Démonstration GitOps
- expliquer le concept Git comme source de vérité
- présenter Argo CD comme outil de synchronisation
- expliquer l’écart entre état souhaité et état réel

## 8. Points de vigilance
- ne pas publier de secrets
- ne pas exposer les identifiants dans le dépôt
- garder les branches propres
- expliquer qu’une chaîne CI/CD ne remplace pas la qualité de la conception

## 9. Conclusion à dire à l’oral
- le projet est reproductible
- le code est contrôlé automatiquement
- le déploiement est préparé avec une logique claire
- l’automatisation réduit les erreurs et accélère la livraison
