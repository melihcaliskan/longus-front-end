// DEPLOY SCRIPT FOR APPLE AUTOMATOR

const { createDeployment } = require('now-client');
const { exec } = require('child_process');
const dotenv = require('dotenv');
dotenv.config();

async function deploy() {
    let deployment;
    exec(`export PATH=/usr/local/bin:$PATH && cd ${process.env.APP_PATH} && yarn build && yarn export`, async (err, stdout, stderr) => {
        if (err) {
            console.error(err)
        } else {
            for await (const event of createDeployment({
                token: process.env.TOKEN,
                path: process.env.APP_PATH + '/out',
            })) {
                if (event.type === 'ready') {
                    deployment = event.payload;
                    break;
                }
            }
            console.log("Done!")
            return deployment;
        }
    });
}

deploy()