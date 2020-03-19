const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  const result = await graphql(`
  {
    allContentfulBlogPost {
      edges {
        node {
          slug
          title
          id
        }
      }
    }
  }
  `)
  
  if (result.errors) {
    console.log(result.errors)
  }

  result.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.title
      }
    })
  })
}