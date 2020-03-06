const core = require('@actions/core');
const fetch = require("node-fetch");

async function sendSms() {
    // get sms info
    const from = core.getInput('fromNumber');
    const to = core.getInput('toNumber');
    const message = core.getInput('message');

    // get Exotel Account credentials
    const accountSid = core.getInput('EXOTEL_ACCOUNT_SID') || process.env.EXOTEL_ACCOUNT_SID;
    const apiKey = core.getInput('EXOTEL_API_KEY') || process.env.EXOTEL_API_KEY;
    const apiToken = core.getInput('EXOTEL_API_TOKEN') || process.env.EXOTEL_API_TOKEN;

    core.debug('Sending SMS');
    let url = `https://${apiKey}:${apiToken}@api.exotel.com/v1/Accounts/${accountSid}/Sms/send.json`;
    const body = `From=${from}&To=${to}&Body=${message}`;

    // needs body in url as queryparam too :(
    url = url + '?' + body
    const options = {
        method: 'POST',
        body: body
    };

    const response = await fetch(url, options);
    const json = await response.json(response);
    if (json["RestException"] != null) {
        throw json["RestException"];
    };

    core.debug('SMS sent!');
    const smsMessage = json["SMSMessage"];

    core.setOutput('smsMessageSid', smsMessage.Sid);
    return smsMessage;
}

async function execute() {
    try {
        return await sendSms();
    } catch ({ Message }) {
        core.error('Failed to send message', Message);
        core.setFailed(Message);
    }
}

module.exports = execute;
execute();