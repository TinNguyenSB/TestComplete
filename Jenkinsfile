pipeline {
    agent { label 'WS32' }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from your source control
                git branch: 'main', credentialsId: '718a7368-72e3-4afc-b641-8830211d207c', url: 'https://github.com/TinNguyenSB/TestComplete.git'
            }
        }

        stage('Run TestComplete Tests') {
            steps {
                script {
                    testcompletetest accessKeyId: 'de9ee6b1-7d8d-46ed-ad5d-210b6111b71c', 
                    credentialsId: '4db0d47a-ff2f-4028-a41f-c5f3a3785b07', 
                    launchType: 'lcProject',
                    project: 'TestProject_Web',
                    suite: 'MyProjectSuite\\MyProjectSuite.pjs',
                    executorType: 'TE', 
                    generateMHT: true, 
                    useActiveSession: false,
                    useTCService: true
                    // sessionScreenResolution: '1920x1080', 
                }
            }
        }
    }

    post {
        always {
            echo 'Complete the pipeline!'            
        }
        success {
            echo 'Tests completed successfully!'
        }
        failure {
            echo 'Tests failed. Check the logs and reports for details.'
        }
    }
}