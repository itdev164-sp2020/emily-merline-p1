const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
        {
            allContentfulTriviaGame {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
          
        `).then(result => {
            if (result.errors) {
                reject(result.errors)
            }
            result.data.allContentfulTriviaGame.edges.forEach((edge) => {
                createPage({
                    path: edge.node.slug,
                    component: path.resolve(`./src/templates/trivia-game.js`),
                    context: {
                        slug: edge.node.slug
                    }
                })
            })
            resolve()
        })
    })
}