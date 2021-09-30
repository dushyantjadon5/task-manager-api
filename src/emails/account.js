const sgMail = require('@sendgrid/mail')

// const sendGridAPIKey = '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'


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'dushyantsingh931@gmail.com',
//     from: 'dushyantsingh931@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'i hope this one will actually get to you.'
// })


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dushyantsingh931@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}
 
const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dushyantsingh931@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}, I hope to see you sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}