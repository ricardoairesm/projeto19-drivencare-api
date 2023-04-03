async function create(req, res) {
    const { name, author } = req.body;
    const { id } = res.locals.pacient;
    try {
        await appointmentService.create({ doctorId, date, pacientId: id });

        return res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export default{
    create,
};