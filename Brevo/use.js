const verificationLink = `${WEBSITE_DOMAIN}/account/verification?email=${getNewUser.email}&token=${getNewUser.verifyToken}`

const customSubject = 'Trello: Plaese verify your email before using our services!'
const htmlContent = `
    <h3>Here is verificantion link</h3>
    <h3>${verificationLink}</h3>
    <h3>Sincerely,<br/>Du Nguyen An</h3>
    `
//goi provider gui mail
BrevoProvider.sendEmail(getNewUser.email, customSubject, htmlContent)