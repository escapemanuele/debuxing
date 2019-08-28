/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const {createPage} = actions
    const PostTemplate = path.resolve('./src/templates/PostTemplate.js')
    const CategoryTemplate = path.resolve('./src/templates/CategoryTemplate.js')

    const {data} = await graphql(`
        {
            posts:allWordpressPost {
                edges {
                    node {
                        slug
                        wordpress_id
                    }
                }
            }
            categories:allWordpressCategory {
                edges {
                    node {
                        slug
                        wordpress_id
                    }
                }
            }
        }
    `)
    
        const posts = data.posts.edges
        posts.forEach(post => {
            createPage({
                path: `/${post.node.slug}`,
                component: PostTemplate,
                context: {
                    id: post.node.wordpress_id
                }
            })
        })

        data.categories.edges.forEach(cat => {
            createPage({
                path:`/${cat.node.slug}`,
                component:CategoryTemplate,
                context: {
                    id: cat.node.wordpress_id
                }
            })
        })

}
