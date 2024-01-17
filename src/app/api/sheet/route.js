// import { google } from "googleapis";

// export async function handler(req, res){
//     if(req.method === 'POST'){
//         const {FirstName,LastName,Email,Phone,Details}= req.body
//         console.log(FirstName,LastName,Email,Phone,Details);
//     }
// }

// export default handler
import { google } from "googleapis";
import {NextResponse} from "next/server";


export async function POST(req, res){
    // if(req.method === 'POST'){
        // const {firstn,lastn,email,phonenumber,message}= req.json();
        // console.log(firstn,lastn,email,phonenumber,message);

        const {firstn,lastn,email,phonenumber,message} = await req.json();
        console.log(firstn,lastn,email,phonenumber,message);
        // return new Response("Hello, Next.js!");
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email:process.env.CLIENT_EMAIL,
                client_id:process.env.CLIENT_ID,
                private_key:process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes:[
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'

            ]
        })
        const sheets = google.sheets({
            auth,
            version: 'v4'
        })
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId:'18HPCqlI4HpVOKl3hL-OF7xet7VwbPRJpEFFEAtvIM3Y',
            range:'Sheet1!A2:C',
            valueInputOption:'USER_ENTERED',
            requestBody:{
                values:[[firstn,lastn,email,phonenumber,message]]
            }
        })
        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })
    // }
    
}