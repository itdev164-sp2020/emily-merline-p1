import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const TriviaGame = ({ data }) => {
    const { gameTitle, questionObject, buttonColor } = data.contentfulTriviaGame

    const AnswerBtn = styled.div`
    background-color: #006699 ${buttonColor}; 
    border: none;
    margin: 5px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    `

    const checkAnswer = isCorrect => {
        if(isCorrect) {
            alert("You got it right!")
        } else {
            alert("Sorry, wrong answer!")
        }
    }
    return (
        <Layout>
            <h1>{ gameTitle }</h1>
            {
                questionObject.map((obj, index) => 
                    (
                        <div>
                        <div key={index}>{obj.question}</div>
                        {
                            obj.answers.map((ans, ind) =>(
                                <AnswerBtn key={ind} onClick={()=>checkAnswer(ans.correct)}>{ans.answer}</AnswerBtn>
                            ))
                        }
                        </div>
                    ))    
            }

        </Layout>
    )
}

export default TriviaGame

export const pageQuery = graphql`
query triviaGameQuery($slug: String!) {
    contentfulTriviaGame(slug: {eq: $slug}) {
      gameTitle
      slug
      buttonColor
      questionObject {
        answers {
          answer
          correct
        }
        question
      }
    }
  }  
`