pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    echo "[+] Installing dependencies"
                    sh 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    // Use the secret file for environment variables
                    withCredentials([file(credentialsId: 'UWv1', variable: 'ENV_FILE')]) {
                        echo "[+] Loading environment variables from .env"
                        sh 'cp ${ENV_FILE} .env'

                        echo "[+] Building the frontend"
                        // Capture more verbose output for debugging
                        sh 'CI=false npm run build --if-present || { echo "Build failed"; exit 1; }'
                    }
                }
            }
        }

        stage('Replace Existing Build Folder') {
            steps {
                script {
                    def buildDir = '/home/nginxcontainer/nginx/html/uwv1/build'

                    // Check if the build directory exists
                    echo "[+] Checking if build folder exists at ${buildDir}"
                    def buildExists = sh(script: "if [ -d ${buildDir} ]; then echo 'exists'; fi", returnStdout: true).trim()

                    if (buildExists == 'exists') {
                        echo "[+] Build folder exists, deleting the previous build"
                        sh "rm -rf ${buildDir}"
                    } else {
                        echo "[+] No previous build folder found, proceeding with copying"
                    }

                    // Move the new build folder
                    echo "[+] Moving new build folder to ${buildDir}"
                    // sh "mv build ${buildDir}"
                    sh "mv build /home/nginxcontainer/nginx/html/uwv1/"
                }
            }
        }
    }

    post {
        success {
            echo "[+] Build and deployment completed successfully"
        }
        failure {
            echo "[+] Build or deployment failed"
        }
    }
}