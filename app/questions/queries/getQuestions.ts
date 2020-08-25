import { SessionContext } from "blitz"
import db, { FindManyQuestionArgs } from "db"

type GetQuestionsInput = {
  where?: FindManyQuestionArgs["where"]
  orderBy?: FindManyQuestionArgs["orderBy"]
  cursor?: FindManyQuestionArgs["cursor"]
  take?: FindManyQuestionArgs["take"]
  skip?: FindManyQuestionArgs["skip"]
}

export default async function getQuestions(
  { where, orderBy, cursor, take, skip }: GetQuestionsInput,
  ctx: Record<any, any> = {}
) {
  const questions = await db.question.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
    include: { choices: true },
  })
  return questions
}
