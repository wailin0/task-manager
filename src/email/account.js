const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'wailinhtet.dev@gmail.com',
        subject: 'Thanks for joinging us',
        text: `Welcome to the app, ${name} `
    }).then(() => {
        console.log("sucesss")
    }).catch(e => console.log(e+"eeeeeeee"))
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'wailinhtet.dev@gmail.com',
        subject: 'Whyyyyyyyy',
        text: `Why u deleted ur acc bitch, ${name} `
    }).then(() => {
        console.log("sucesss")
    }).catch(e => console.log(e+"eeeeeeee"))
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
