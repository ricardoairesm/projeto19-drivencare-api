import { db } from "../config/database.js"

async function findByEmail(email){
return await db.query(`
SELECT * FROM doctors WHERE email = $1
`,[email])
}

async function create(name, email, password, specialty, location){

}

export default{
    findByEmail,
    create,
}