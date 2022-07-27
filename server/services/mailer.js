import nodemailer from 'nodemailer';
import util from 'util';

async function mailer(fruit) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        service: 'gmail',
        auth: {
            user: 'ctdfruitstand@gmail.com',
            pass: 'vxajdeiwwipqoiyi',
        },
    });

    let mailOptions = {
        from: 'ctdfruitstand@gmail.com',
        to: 'dicake6059@chimpad.com',
        subject: 'Fruit Order Tracker',
        text: `Your stock of ${fruit} is now 0`,
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
