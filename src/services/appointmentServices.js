import appointmentRepositories from "../repositories/appointmentRepositories.js";

async function create({ doctorId, date, pacientId, status }) {
    const {rows: [appointment]} = await appointmentRepositories
 }