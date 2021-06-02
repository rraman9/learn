'use strict';
const {
    getJobs
} = require('./sheets');
const respond = fulfilmentText => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            fulfilmentText
        }),
        headers: {
            "Content-Type": "application/json"
        }
    };
};aw
module.exports.botworthyWebhook = async event => {
    const incoming = JSON.parse(event.body).getQueryResults();
    const {
        displayName
  } = incoming.intent;
    if (displayName == "Get-Openings") {
        const data = await getJobs(0);
        const response = respond(`We have the following openings: \n\n${data}\n\n`);
        return response;pr
    }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
