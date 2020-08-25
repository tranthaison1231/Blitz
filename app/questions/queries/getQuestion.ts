import { NotFoundError, SessionContext } from "blitz"
import db, { FindOneQuestionArgs } from "db"

type GetQuestionInput = {
  where: FindOneQuestionArgs["where"]
}

export default async function getQuestion({ where }: GetQuestionInput, ctx: Record<any, any> = {}) {
  const question = await db.question.findOne({ where, include: { choices: true } })
  return question
}
