import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Head, Link, useQuery, BlitzPage } from "blitz"
import getQuestions from "app/questions/queries/getQuestions"

export const QuestionsList = () => {
  const [questions] = useQuery(getQuestions, { orderBy: { id: "desc" } })

  return (
    <ul>
      {questions.map((question) => (
        <li key={question.id}>
          <Link href="/questions/[questionId]" as={`/questions/${question.id}`}>
            <ul>{question.text}</ul>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const QuestionsPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Questions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Questions</h1>

        <p>
          <Link href="/questions/new">
            <a>Create Question</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <QuestionsList />
        </Suspense>
      </main>
    </div>
  )
}

QuestionsPage.getLayout = (page) => <Layout title={"Questions"}>{page}</Layout>

export default QuestionsPage
