import React, {useState} from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo'
import {Header, Banner, Title} from '../utils'
import PostList from '../components/Blog/PostList';

const Blog = ({data}) => {


    const [items, setItems] = useState(data.posts.edges)
    const [posts, setPosts] = useState(data.posts.edges)


    const handleItems = (category) => {
        let tempItems = [...items]
        if (category==="all") {
           setPosts(tempItems)
        } else {
            console.log("ITEMS", tempItems)
            let items = tempItems.filter(({node}) => node.categories.some(x => x.name===category))
            setPosts(items)
        }
    }

    return (
        <Layout>
            <SEO title="Blog" />
            <Header img={data.img.childImageSharp.fluid}>
                <Banner title='blog' subtitle={`let's dig in`} />
            </Header>
            <Title title="all articles" />
            {
                data.categories.edges.map(({node}, index) => {
                    return (
                        <button 
                            type="button" 
                            key={index} 
                            className="btn btn-yellow text-capitalize m-3"
                            onClick={() => handleItems(node.name)}>
                            {node.name}
                        </button>
                    )
                })
            }
            <PostList  posts={posts} />
        </Layout>
    )
}

export const query = graphql`
{
    img:file(relativePath:{eq:"bcg/menuBcg.jpeg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
    posts:allWordpressPost(sort:{fields: date,order:DESC}){
        edges {
            node {
                id
                slug
                title
                categories {
                    name
                }
            }   
        }
    }
    categories:allWordpressCategory(filter:{count:{gt:0}}) {
                edges {
                    node {
                        name
                    }
                }
            }
}
`

export default Blog
