const formData = require('form-data')
const Mailgun = require('mailgun.js')
const mailgun = new Mailgun(formData)

const key='eb552d8e361783c9e9c47d851d3e9e4e-4f207195-2f40ab59'
const domain='sandbox397d1f395a9944c5b26f4dc972a426cf.mailgun.org'

const mg = mailgun.client({
	username: 'api',
	key
});

const sendWelcomeEmail=async(email,name)=>{
    mg.messages.create(domain, {
		from: "Mailgun Sandbox <postmaster@"+domain+">",
		to: [email],
		subject: "Hello my dear friend",
		text: `Welcome to the app, ${name}.Let me know how you get along with the app.`
	})
}

const sendCancellationEmail=async(email,name)=>{
    mg.messages.create(domain, {
		from: "Mailgun Sandbox <postmaster@"+domain+">",
		to: [email],
		subject: "We wont forget you",
		text: `Good bye my friend., ${name}. Hope to meet you again soon!.`
	})
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}