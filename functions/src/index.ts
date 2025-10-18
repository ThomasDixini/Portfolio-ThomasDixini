/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import * as nodemailer from "nodemailer";
import * as dotenv from 'dotenv';
dotenv.config();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


export const sendMail = onRequest({secrets: ["USER_GOOGLE", "PASSWORD_GOOGLE"]}, async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
    }

    if (req.method !== "POST") {
        res.status(405).send("Método não permitido");
        return;
    }

    const { name, title, email, message } = req.body;

    if (!email || !message) {
        res.status(400).send("Dados incompletos");
        return;
    }

    const mailOptions = {
        from: email,
        to: process.env.USER_GOOGLE,
        subject: `De ${name} -` + title,
        text: message,
    };

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_GOOGLE,
            pass: process.env.PASSWORD_GOOGLE, 
        },
    });

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("E-mail enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        res.status(500).send("Erro ao enviar e-mail.");
    }
})