import { db } from "../config/database.js";

async function create({doctorId,date,pacientId}){
    await db.query(`
    INSERT INTO appointments ("doctorId",date,"pacientId")
    VALUES ($1,$2,$3)
    `,[doctorId,date,pacientId]
    )
}

async function findByDate(date){
    return await db.query(`
        SELECT * FROM appointments WHERE 
    `)
}

export default {create};

