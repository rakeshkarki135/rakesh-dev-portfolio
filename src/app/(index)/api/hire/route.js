import { sendEmailMessage } from "@/utils/mainSender";
import { NextResponse } from "next/server";

export async function POST(req){
   try{
        const {name, email, company, message, projectType } = await req.json();

        const htmlMessage = `<h2><b>Hiring Details</b></h2>
                            <p><b>Company Name : </b> ${company}</p>
                            <p><b>Project Type : </b> ${projectType}</p>
                            <p><b>Message : </b>${message}</p>`

        await sendEmailMessage(email, name, message, htmlMessage);

        return NextResponse.json({
            success : true,
        })
   }catch(error){
        return NextResponse.json(
            {
               success : false
            },
            {
                status : 500
            }
        )
    }
    }