const path = require("path")
// createPages for Contentful CMS
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
//   const result = await graphql(`
//   {
//     allContentfulBlogPost {
//       edges {
//         node {
//           slug
//           title
//           id
//         }
//       }
//     }
//   }
//   `)

//   if (result.errors) {
//     console.log(result.errors)
//   }

//   result.data.allContentfulBlogPost.edges.forEach(edge => {
//     createPage({
//       path: `${edge.node.slug}`,
//       component: blogPostTemplate,
//       context: {
//         slug: edge.node.slug,
//         title: edge.node.title
//       }
//     })
//   })
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
  const template = path.resolve(`./src/templates/mdxPost.js`)
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `${node.slug}`,
      // This component will wrap our MDX content
      component: template,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
