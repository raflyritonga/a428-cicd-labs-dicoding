node {
    stage('Clone Repository') {
        checkout scm
    }

    docker.image('node:lts-buster-slim').inside('-p 3000:3000') {

        stage('Build') {
            withEnv(['CI=true', 'NODE_OPTIONS=--openssl-legacy-provider']) {
                sh 'npm install'
            }
        }

        stage('Test') {
            withEnv(['CI=true']) {
                sh './jenkins/scripts/test.sh'
            }
        }

        stage('Deliver') {
            sh './jenkins/scripts/deliver.sh'
            input message: 'Finished using the website? (Click "Proceed" to continue)'
            sh './jenkins/scripts/kill.sh'
        }

    }
}
