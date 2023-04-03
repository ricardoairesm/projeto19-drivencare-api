import pacientServices from "../services/pacientServices.js";


async function create(req, res, next) {
    const { name, email, password } = req.body;

    try {
        await pacientServices.create({ name, email, password })
        return res.sendStatus(201)
    } catch (err) {
        next(err);
    }

}


async function signin(req, res, next) {
    const { email, password } = req.body;
    try {
        const token = await pacientServices.signin({ email, password });
        return res.send({ token });
    } catch (err) {
        next(err);
    }
}

export default {
    create,
    signin
};