# SonarQube, Trivy et Docker Hub

## 1. SonarQube

### Lancer localement
```bash
docker compose -f docker-compose-sonar.yml up -d
```

### Ouvrir dans le navigateur
- http://localhost:9000
- identifiant par défaut : admin / admin

### Créer un projet
1. Cliquez sur "Create project"
2. Choisissez le dépôt GitHub ou le projet local
3. Générez un token de sécurité
4. Copiez le token et l’URL du serveur

### Configurer le projet
Dans le fichier [sonar-project.properties](../sonar-project.properties), renseignez :
- `sonar.host.url`
- `sonar.login`

### Lancer l’analyse
```bash
sonar-scanner -Dproject.settings=sonar-project.properties
```

## 2. Trivy

### Installer sur Windows
```powershell
winget install --id AquaSecurity.Trivy -e
```

### Scanner une image locale
```powershell
trivy image hasalpcode/todo-api:latest
```

### Scanner le repo local
```powershell
trivy fs .
```

## 3. Docker Hub

### Créer un compte
1. Allez sur https://hub.docker.com/
2. Créez un compte
3. Créez un repo public ou privé

### Créer un token
1. Ouvrez votre compte Docker Hub
2. Allez dans Account Settings > Security
3. Créez un access token
4. Copiez ce token

### Ajouter les secrets GitHub
Dans votre dépôt GitHub :
1. Settings
2. Secrets and variables
3. Actions
4. ajoutez :
   - `DOCKERHUB_USERNAME`
   - `DOCKERHUB_TOKEN`

### Publier l’image
```bash
docker build -t hasalpcode/todo-api:latest ./SpringBoot_Api_withBD_docker
docker login
docker push hasalpcode/todo-api:latest
```

## 4. Ce qu’il faut montrer pendant la soutenance
- SonarQube analyse le code
- Trivy analyse les vulnérabilités
- Docker Hub héberge l’image validée
- l’image est prête pour Kubernetes
