import nodemailer from 'nodemailer';

async function mailer(fruit) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        service: 'gmail',
        auth: {
            user: 'ctdfruitstand@gmail.com',
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: 'ctdfruitstand@gmail.com',
        to: 'ctdfruitstand@gmail.com',
        subject: 'Fruit Inventory Tracker',
        text: `Your ${fruit} stock is now 0`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default mailer;
