import bcrypt from 'bcrypt'
import doctorRepositories from '../repositories/doctorRepositories.js';
import { v4 as uuidV4 } from "uuid";
import errors from "../errors/index.js";

async function create({ name, email, password, specialty, location }) {

    const { rows: doctor } = await doctorRepositories.findByEmail(email)
    if (doctor.length !== 0) throw errors.duplicatedEmailError();
    const hashPassword = await bcrypt.hash(password, 10);
    await doctorRepositories.create({ name, email, password: hashPassword, specialty, location })
}

async function signin({ email, password }) {

    const {
      rowCount,
      rows: [doctor],
    } = await doctorRepositories.findByEmail(email);
    if (!rowCount) throw errors.invalidCredentialsError();
  
    const validPassword = await bcrypt.compare(password, doctor.password);
    if (!validPassword) throw errors.invalidCredentialsError();
  
    const token = uuidV4();
    await doctorRepositories.createSession({ token, doctorId: doctor.id });
  
    return token;
  }

  async function findByName(name){
    const {rows, rowCount} = await doctorRepositories.findByName();
    if(!rowCount) throw errors.notFoundError();
    return rows;
  }

export default {
    create,
    signin
}