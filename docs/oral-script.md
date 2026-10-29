# Script oral de présentation

Bonjour, aujourd’hui nous allons présenter notre projet CI/CD SDV.

Le projet consiste en une application full-stack avec un frontend Angular, un backend Spring Boot et une base de données MySQL. Le but n’était pas seulement de développer une application, mais aussi de mettre en place une chaîne automatisée qui garantit la qualité, la sécurité et la reproductibilité du déploiement.

Nous avons commencé par le versionnement avec GitHub. Le dépôt permet de suivre les modifications, de travailler sur des branches et de déclencher automatiquement les vérifications.

Ensuite, nous avons mis en place un pipeline GitHub Actions. À chaque push ou pull request, le workflow vérifie le build du frontend et du backend. Cette étape est essentielle, car elle permet de vérifier très tôt que le code est cohérent avant de poursuivre.

La deuxième partie du pipeline concerne la qualité et la sécurité. SonarQube permet d’analyser le code pour repérer des défauts et des risques. Trivy, quant à lui, permet de scanner les images et les dépendances pour détecter les vulnérabilités.

Une fois les contrôles passés, l’application est empaquetée dans des images Docker. Cela rend le déploiement plus reproductible et standardisé. Les images peuvent ensuite être publiées dans un registre comme Docker Hub.

Ensuite, le projet est préparé pour être déployé sur Kubernetes. Les manifests décrivent les ressources nécessaires, comme la base MySQL et le backend. Kubernetes permet de gérer les conteneurs, la mise à l’échelle et la reprise automatique.

Enfin, le principe GitOps permet de dire que le dépôt Git est la source de vérité. Argo CD compare ensuite l’état souhaité décrit dans Git avec l’état réel du cluster, puis synchronise le cluster si nécessaire.

En conclusion, ce projet montre qu’une chaîne CI/CD ne se limite pas à un simple pipeline. Elle permet d’automatiser la validation du code, de sécuriser le livrable, d’améliorer la qualité et de rendre le déploiement plus fiable et plus reproductible.
