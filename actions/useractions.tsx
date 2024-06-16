"use server"

import Payments from "@/models/Payments"
import db from "@/lib/mongoose"
import User from "@/models/User"
import payments from "@/app/[username]/payments/page"

export const initiate = async ({amount, to_username, payment, time}:{amount:Number, to_username:String, payment: any, time:any}) =>{
    await db();
    
}