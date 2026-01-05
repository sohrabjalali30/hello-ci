pipeline {
  agent any
  stages {
    stage('Checkout') { steps { git url: 'https://github.com/sohrabjalali30/hello-ci.git' } }
    stage('Build') { steps { sh 'echo "Build step (e.g., npm ci)"' } }
    stage('Test') { steps { sh 'npm test' } }
  }
  post {
    always { archiveArtifacts artifacts: '**/*', fingerprint: true }
    failure { echo 'Build failed' }
  }
}
