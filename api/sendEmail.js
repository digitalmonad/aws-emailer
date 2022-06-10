const aws = require('aws-sdk');

const { __200, __400 } = require('./utils/http');

const awsSes = new aws.SES();

exports.handler = async (event) => {
  const { from, to, subject, text } = JSON.parse(event.body);

  if (!from || !to || !subject || !text) {
    return __400({ message: 'Missing parameter of request!' });
  }

  const emailParams = {
    Destination: {
      ToAddresses: [to],
    },
    Source: from,
    Message: {
      Body: {
        Text: { Data: text },
      },
      Subject: {
        Data: subject,
      },
    },
  };

  try {
    await awsSes.sendEmail(emailParams).promise();
    return __200();
  } catch (error) {
    return __400({ message: 'Unable to send the email!' });
  }
};
