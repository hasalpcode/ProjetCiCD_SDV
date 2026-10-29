pipeline {
    agent any

    environment {
        APP_DIR      = 'SpringBoot_Api_withBD_docker'
        DOCKER_IMAGE = 'hasalpcode/projet_ci_cd_sdv'
        IMAGE_TAG    = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Package (Maven)') {
            steps {
                dir(APP_DIR) {
                    sh './mvnw clean package'
                }
            }
        }

        stage('SonarCloud Analysis') {
            steps {
                dir(APP_DIR) {
                    withSonarQubeEnv('SonarCloud') {
                        sh '''
                            ./mvnw org.sonarsource.scanner.maven:sonar-maven-plugin:3.10.0.2594:sonar \
                              -Dsonar.organization=hasalpcode-1 \
                              -Dsonar.projectKey=hasalpcode_ProjetCiCD_SDV \
                              -Dsonar.host.url=https://sonarcloud.io
                        '''
                    }
                }
            }
        }

        stage('Docker Build') {
            steps {
                dir(APP_DIR) {
                    sh "docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} -t ${DOCKER_IMAGE}:latest ."
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                sh """
                    docker run --rm \
                      -v /var/run/docker.sock:/var/run/docker.sock \
                      -v trivy-cache:/root/.cache/ \
                      aquasec/trivy image --exit-code 0 --severity HIGH,CRITICAL ${DOCKER_IMAGE}:${IMAGE_TAG}
                """
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_credentiels', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                        echo "\$DOCKER_PASS" | docker login -u "\$DOCKER_USER" --password-stdin
                        docker push ${DOCKER_IMAGE}:${IMAGE_TAG}
                        docker push ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }
    }
}
