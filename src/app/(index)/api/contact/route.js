import { sendEmailMessage } from "@/utils/mainSender";
import { NextResponse } from "next/server";


export async function POST(req){
    try{
        const { name, email, message} = await req.json();

        const response = await sendEmailMessage(
            email,
            name,
            message
        );

        return NextResponse.json({
            success: true,
        });
    }catch(error){
        return NextResponse.json(
            {
                success : false,
                error:error.message
            },
            {
                status: 500
            },
        )
    }
   
}