var AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: "AKIAJA4JP7EYZ35I37WQ",
  secretAccessKey: "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",
  region: "us-east-1"
});

var sns = new AWS.SNS();
var topicArn = "arn:aws:sns:us-east-1:086670451149:testproject_alldevices_MOBILEHUB_1045387260";
// var message = 'Test Node.js';
// var subject = 'Stuff';

exports.publish = function(message, subject) {
  var param = {
    TargetArn: topicArn,
    Message: message,
    Subject: subject
  };
  
  sns.publish(
    param,
    function(err, data) {
      if(err) {
        console.log("Error sending a message " + err);
      } else {
        console.log("Sent message: " + data.MessageId);
      }
    }
  );
};
