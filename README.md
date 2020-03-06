# Exotel SMS GitHub Action
Send an SMS through GitHub Actions using Exotel

## Prerequisites

- An Exotel Account. [Sign up here](https://my.exotel.com/auth/register)
- An [Exotel API Key and Token](https://my.exotel.com/apisettings/site#api-credentials)

## Usage

1. Set up your credentials as secrets in your repository settings using `EXOTEL_ACCOUNT_SID`, `EXOTEL_API_KEY`, `EXOTEL_API_TOKEN`

2. Add the following to your workflow

```yml
- name: 'Sending SMS Notification'
  uses: sagarchoudhary96/exosms-actions@v1
  with:
    fromNumber: 'from_number_here'
    toNumber: 'to_number_here'
    message: 'message_body_here'
  env:
    EXOTEL_ACCOUNT_SID: ${{ secrets.EXOTEL_ACCOUNT_SID }}
    EXOTEL_API_KEY: ${{ secrets.EXOTEL_API_KEY }}
    EXOTEL_API_TOKEN: ${{ secrets.EXOTEL_API_TOKEN }}
```

## Inputs

### `fromNumber`

**Required** Exophone in your Exotel account to send the SMS from

### `toNumber`

**Required** Phone number to send the SMS to

### `message`

**Required** The message you want to send

### `EXOTEL_ACCOUNT_SID`

An Exotel Account SID. Can alternatively be stored in environment

### `EXOTEL_API_KEY`

An Exotel API Key. Can alternatively be stored in environment

### `EXOTEL_API_TOKEN`

An Exotel API Token. Can alternatively be stored in environment

## Outputs

### `smsMessageSid`

The SID of the [sms message resource](https://developer.exotel.com/api#send-sms) associated with the SMS sent.

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sagarchoudhary96/exosms-actions/blob/master/LICENSE)

<p align="center">
  Don't forget to 🌟 Star 🌟 the repo if you like this GitHub Action !<br/>
  <a href="https://github.com/sagarchoudhary96/exosms-actions/issues/new">Your feedback is appreciated</a>
</p>
