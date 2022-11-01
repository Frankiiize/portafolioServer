const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class contactService {
 
  emailTemplate(data) {
    let msg = {
      to: data.email, 
      cc: 'frankiiize@gmail.com',
      from: 'frankiiize@gmail.com',
      subject: `email from : ${data.email}`,
      text:  `name: ${data.name}`,
      html: `
        <h1>hola ${data.name}, soy francisco jimenez </h1>
        <h3>nice to meet you</h3>
        <p>Thanks for contacting me. i will response to your request </p
        <p>${data.message}</p>
      `
    }
    return msg;
  }
 
  async sendMail (msg){
    const sendMessage = await  sgMail.send(msg)
    return sendMessage
    
  }
}

module.exports = contactService