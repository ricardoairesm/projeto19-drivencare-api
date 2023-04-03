import joi from "joi";

export const appointmentSchema = joi.object({
    pacientId: joi.number(),
    doctorId: joi.number(),
    date: joi.date(),
    status: joi.boolean().default(true)
})