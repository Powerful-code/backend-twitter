"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
var mailer_1 = __importDefault(require("../core/mailer"));
var sendEmail = function (_a, callback) {
    var emailFrom = _a.emailFrom, emailTo = _a.emailTo, subject = _a.subject, html = _a.html;
    mailer_1.default.sendMail({
        from: emailFrom,
        to: emailTo,
        subject: subject,
        html: html,
    }, callback ||
        function (err, info) {
            if (err) {
                console.log(err, 'error');
            }
            else {
                console.log(info, 'success');
            }
        });
};
exports.sendEmail = sendEmail;
