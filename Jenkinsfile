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

        stage('Manual Approval') {
            input message: 'Lanjutkan ke tahap Deploy?'
        }

        stage('Deploy') {
            sh './jenkins/scripts/deliver.sh'
            sleep(time: 1, unit: 'MINUTES')
            sh './jenkins/scripts/kill.sh'
        }
    }
}
