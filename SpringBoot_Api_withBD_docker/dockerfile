# Étape 1 : Build avec Maven et Java 21 cette image ne va permettre que compiler l'application
FROM eclipse-temurin:21-jdk-jammy AS build

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers Maven nécessaires d'abord pour optimiser le cache Docker
COPY pom.xml ./
COPY .mvn .mvn
COPY mvnw ./

# Télécharger les dépendances Maven (ça optimise le cache Docker)
RUN ./mvnw dependency:go-offline

# Copier le reste du projet
COPY src ./src

# Compiler et packager le projet en sautant les tests et un fichier .jar est généré dans /app/target/
RUN ./mvnw install -DskipTests

# Étape 2 : Image d'exécution avec Java 21 JRE, cette image ne permet que d'executer l'application
FROM eclipse-temurin:21-jre-jammy

# Répertoire d'exécution
WORKDIR /app

# Copier le .jar généré depuis l'étape de build(ci dessus)
COPY --from=build /app/target/*.jar app.jar

# Exposer le port
EXPOSE 8080

# Lancer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
