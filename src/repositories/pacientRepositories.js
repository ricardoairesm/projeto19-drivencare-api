import { db } from "../config/database.js"

async function findByEmail(email) {
    return await db.query(`
SELECT * FROM pacients WHERE email = $1
`, [email])
}

async function create(name, email, password) {
    await db.query(`
    INSERT INTO pacients (name, email, password)
    VALUES($1,$2,$3)
    `,
    [name, email, password]
    )
}

async function createSession({ token, pacientId }) {
    await db.query(
      `
          INSERT INTO sessions (token, "pacientId")
          VALUES ($1, $2)
      `,
      [token, pacientId]
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
      SELECT * FROM pacients WHERE id=$1
    `,
      [id]
    );
  }

export default {
    findByEmail,
    create,
    createSession,
    findSessionByToken,
    findById
}