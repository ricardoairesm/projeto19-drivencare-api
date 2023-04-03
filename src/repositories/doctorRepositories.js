import { db } from "../config/database.js"

async function findByEmail(email) {
    return await db.query(`
SELECT * FROM doctors WHERE email = $1
`, [email])
}

async function create(name, email, password, specialty, location) {
    await db.query(`
    INSERT INTO doctors (name, email, password, specialty, location)
    VALUES($1,$2,$3,$4,$5)
    `,
    [name, email, password, specialty, location]
    )
}

async function createSession({ token, doctorId }) {
    await db.query(
      `
          INSERT INTO sessions (token, "doctorId")
          VALUES ($1, $2)
      `,
      [token, doctorId]
    );
  }

  async function findSessionByToken(token) {
    return await db.query(
      `
          SELECT * FROM sessions WHERE token = $1
      `,
      [token]
    );
  }

  async function findById(id) {
    return await db.query(
      `    
      SELECT * FROM doctors WHERE id=$1
    `,
      [id]
    );
  }

  async function findByName(name) {
    return await db.query(
      `    
      SELECT * FROM doctors WHERE name=$1
    `,
      [name]
    );
  }

  async function findBySpecialty(specialty) {
    return await db.query(
      `    
      SELECT * FROM doctors WHERE specialty=$1
    `,
      [specialty]
    );
  }

  async function findByLocation(location) {
    return await db.query(
      `    
      SELECT * FROM doctors WHERE location=$1
    `,
      [location]
    );
  }

export default {
    findByEmail,
    create,
    createSession,
    findSessionByToken,
    findById,
    findByName,
    findBySpecialty,
    findByLocation
}