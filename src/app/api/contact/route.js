import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';


export async function GET() {

    let json_response = {
        success: true,
        message: 'Hello',
    };
    return NextResponse.json(json_response)
}
export async function POST(request) {

    try {
        let { name, email, message, mobile } = await request.json();
        let data = {
            email: 'ankit628792@gmail.com',
            subject: `${name} has contacted you on love alarm 2.0`,
            text: `${message}`,
            html: `
            <div style="
            padding: 20px 30px;
        "><h1 style="
            font-size: 24px;
            font-weight: 500;
            color: #f15d4d;
        ">${name} has contacted you on love alarm 2.0</h1><p style="
            font-size: 18px;
            color: darkcyan;
        ">His message is: </p><p style="
            color: gray;
            font-size: 16px;
        ">${message}</p>
        
        <p style="
            font-size: 16px;
            font-weight: 400;
            margin-top: 4px;
        ">Regards<br>${name}<br>email: ${email} <br> mobile number: ${mobile || 'None'}</p>
        </div>
            `
        }

        sendEMail(data);

        if (email) {

            let data2 = {
                email: email,
                subject: `Thanks for contacting Love Alarm 2.0`,
                text: `${message}`,
                html: `
            <div style="
            padding: 20px 30px;
        "><h1 style="
            font-size: 24px;
            font-weight: 500;
            color: #f15d4d;
        ">Thanks ${name} for contacting Love Alarm 2.0</h1>
        <p style="
            color: gray;
            font-size: 16px;
        ">Our team has received your message, we'll respond you as soon as possible. In the meantime, please let us know if you have any additional questions or concerns. Thank you for your understanding.</p></div>

        <p style="
            color: gray;
            margin-top: 4px;
            font-size: 16px;
        ">Thanks & Regards,<br/>Team Love 2.0</p></div>
            `
            }
            await sendEMail(data2);
        }

        let json_response = {
            success: true,
            message: 'Mail sent',
        };
        return NextResponse.json(json_response)

    } catch (error) {
        return NextResponse.send({ error })
    }
}


const sendEMail = async (data) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Godaddy',
            host: "smtpout.secureserver.net",
            secureConnection: true,
            port: 465,
            auth: {
                user: process.env.mail_user,
                pass: process.env.mail_password,
            },
        })

        const mailData = {
            from: process.env.mail_user,
            to: `${data.email}`,
            subject: `${data.subject}`,
            text: `${data.text}`,
            html: `${data.html}`
        }

        const info = await transporter.sendMail(mailData);
        console.log("result : ", info);
        return 'mail sent'

    }
    catch (error) {
        console.log(error)
    }
}

