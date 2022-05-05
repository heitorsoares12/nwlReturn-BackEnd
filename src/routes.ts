import { NodemailerMailAdapter } from './adapters/nodemailer/node-mailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import express from 'express';

export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdepter = new NodemailerMailAdapter()

    const submitFeedbacksUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdepter,
    )

    await submitFeedbacksUseCase.execute({
        type,
        comment,
        screenshot,
    })
    
    

    return res.status(201).send();
})