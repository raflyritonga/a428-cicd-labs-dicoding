node {
    stage('Clone Repository') {
        checkout scm
    }

    docker.image('node:16-buster-slim').inside('-p 3000:3000') {

        stage('Build') {
            withEnv(['CI=true']) {
                sh 'npm install'
            }
        }

        stage('Test') {
            withEnv(['CI=true']) {
                sh './jenkins/scripts/test.sh'
            }
        }
    }
}
