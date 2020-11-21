'use strict';
const Helper = require("sendgrid").mail;
const sg = require('sendgrid')('yourkey');
const vm = require("v-response");
module.exports.sendMail = sendMail;


function sendMail(from, to, subject, content, template) {
    let fromEmail = new Helper.Email(from);
    let toEmail = new Helper.Email(to);
    let emailContent = new Helper.Content("text/html", content);
    let mail = new Helper.Mail(fromEmail, subject, toEmail, emailContent);

    let isEmailSent = false;
    let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function (err, response) {

        if (err) {
            vm.log("error");
            vm.log("err in sendgrid: ", err);
            isEmailSent = false;
        }
        vm.log("sendgrid body:", response.statusCode);
        isEmailSent = true;
    });
    return isEmailSent;

}
