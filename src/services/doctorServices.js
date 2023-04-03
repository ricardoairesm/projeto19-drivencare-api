import bcrypt from 'bcrypt'
import doctorRepositories from '../repositories/doctorRepositories.js';

async function create({ name, email, password, specialty, location }) {

    const { rows: doctor } = await doctorRepositories.findByEmail(email)
    if (doctor.length !== 0) return "email já cadastrado"

    const hashPassword = await bcrypt.hash(password, 10);
    await doctorRepositories.create({ name, email, password: hashPassword, specialty, location })
}

export default {
    create,
}