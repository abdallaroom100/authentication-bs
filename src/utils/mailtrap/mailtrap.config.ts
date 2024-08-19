

import { MailtrapClient } from "mailtrap";

const TOKEN = "505eaaa87427537b410ea5fbef990661";
// const ENDPOINT = "https://send.api.mailtrap.io/";

export const mailtrapclient =  new MailtrapClient({token:TOKEN }) ;

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "x0x",
};
const recipients = [
  {
    email: "abdallaroom25@gmail.com",
  }
];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);