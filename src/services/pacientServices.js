import bcrypt from 'bcrypt'
import pacientRepositories from '../repositories/pacientRepositories.js';
import { v4 as uuidV4 } from "uuid";
import errors from "../errors/index.js";

async function create({ name, email, password }) {

    const { rows: pacient } = await pacientRepositories.findByEmail(email)
    if (pacient.length !== 0) throw errors.duplicatedEmailError();
    const hashPassword = await bcrypt.hash(password, 10);
    await pacientRepositories.create({ name, email, password: hashPassword })
}

async function signin({ email, password }) {

    const {
        rowCount,
        rows: [pacient],
    } = await pacientRepositories.findByEmail(email);
    if (!rowCount) throw errors.invalidCredentialsError();

    const validPassword = await bcrypt.compare(password, pacient.password);
    if (!validPassword) throw errors.invalidCredentialsError();

    const token = uuidV4();
    await pacientRepositories.createSession({ token, pacientId: pacient.id });

    return token;
}

export default {
    create,
    signin
}