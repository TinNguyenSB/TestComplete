pipeline {
    agent { label 'WS32' }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from your source control. 
                git branch: 'TC-107874', 
                credentialsId: 'f202f496-790d-495b-996f-5593b614572a', 
                url: 'https://github.com/TinNguyenSB/TestComplete.git' 
            }
        }

        stage('Run TestComplete Tests') {
            steps {
                script {
                    echo "run test on agent machine name Laptop_Dell_HQ94963"
					testcompletetest accessKeyId: 'de9ee6b1-7d8d-46ed-ad5d-210b6111b71c', 
					credentialsId: '4db0d47a-ff2f-4028-a41f-c5f3a3785b07', 
					executorType: 'TE', 
					suite: 'MyProjectSuite\\MyProjectSuite.pjs', 
					useActiveSession: false, 
					useTCService: true
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