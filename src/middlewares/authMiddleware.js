import pacientRepositories from "../repositories/pacientRepositories.js";
import doctorRepositories from "../repositories/doctorRepositories.js";


async function pacientAuthValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.status(401).send("No token");

    try {
        const { rows: [session] } = await pacientRepositories.findSessionByToken(token);
        if (!session) return res.status(401).send("Session not found");

        const { rows: [pacient] } = await pacientRepositories.findById(session.pacientId);
        if (!pacient) return res.status(401).send("pacient not found");

        res.locals.pacient = pacient
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }

}

async function doctorAuthValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization.replace("Bearer ", "");

    if (!token) return res.status(401).send("No token");

    try {
        const { rows: [session] } = await doctorRepositories.findSessionByToken(token);
        if (!session) return res.status(401).send("Session not found");

        const { rows: [doctor] } = await doctorRepositories.findById(session.doctorId);
        if (!doctor) return res.status(401).send("doctor not found");

        res.locals.doctor = doctor;
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export default {
    pacientAuthValidation,
    doctorAuthValidation
}