module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            gasPrice: 1,
            blockGasLimit: 8000000
        },
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/YOUR_PROJECT_ID",
            accounts: [
                "0x7e5f4552091a69125d5dfcb7b8c2659029395bdf",
                "0x2bdd21761a483f71054e14f5b827213567971c67"
            ],
        },
    },
    solidity: {
        version: "0.8.0",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    mochawesome: {
        reporterOptions: {
            reportDir: "./test-results",
            reportFilename: "my-test-report",
            quiet: true,
            html: false
        }
    }
};
