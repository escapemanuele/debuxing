import React, {useState} from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo'
import {Header, Banner, Title, styles} from '../utils'
import PostList from '../components/Blog/PostList';
import styled from 'styled-components'

const Blog = ({data}) => {


    const [items, setItems] = useState(data.posts.edges)
    const [posts, setPosts] = useState(data.posts.edges)


    const handleItems = (category) => {
        let tempItems = [...items]
        if (category==="all") {
           setPosts(tempItems)
        } else {
            let items = tempItems.filter(({node}) => node.categories.some(x => x.name===category))
            setPosts(items)
        }
    }

    const handleSelect = (e) => {
        console.log("SF", e)
    }

    return (
        <Layout>
            <SEO title="Blog" />
            <Header img={data.img.childImageSharp.fluid}>
                <Banner title='blog' subtitle={`find your resources`} />
            </Header>
            <Title title="all articles" />
            <CategoriesWrapper>
                <div className="buttonList">
                {
                    data.categories.edges.map(({node}, index) => {
                        return (
                            <button 
                                type="button" 
                                key={index} 
                                className="button"
                                onClick={() => handleItems(node.name)}>
                                {node.name}
                            </button>
                        )
                    })
                }
                </div>
                    <select className="buttonDropdown" onChange={(e) => handleItems(e.target.value)}>
                    {
                        data.categories.edges.map(({node}, index) => {
                            return (
                                <option 
                                    key={index}
                                    value={node.name}>
                                    {node.name}
                                </option>
                            )
                        })
                    }
                    </select>    
            </CategoriesWrapper>
            <PostList  posts={posts} />
        </Layout>
    )
}

const CategoriesWrapper = styled.div`
    

    .button {
        padding: 1rem;
        cursor: pointer;
        ${styles.border({color:`${styles.colors.mainBlue}`})};
        background: transparent;
        color: ${styles.colors.mainWhite};
        margin: 1rem;
        
        &:hover {
            background: ${styles.colors.mainBlue};
        }
    }

    .buttonList {
        display: none;
    }

    .buttonDropdown {
        width: 80vw;
        padding: 1rem;
        display:block;
        margin: 0 auto;
        border-radius: .5rem;
        font-size: 1.1rem;
        line-height: 1.1rem;
        cursor: pointer;
        text-align-last: center;
        ${styles.border({color:`${styles.colors.mainBlue}`})};
        background: transparent;
        color: ${styles.colors.mainWhite};

        &:hover {
            border-color: ${styles.colors.mainBlue};
        }

        option {
            color: ${styles.colors.mainBlack};
        }
    }

    @media (min-width:${styles.size.tablet})
    {
        .buttonList {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: row wrap;
        }

        .buttonDropdown {
            display: none;
        }   
    }

    


`

export const query = graphql`
{
    img:file(relativePath:{eq:"bcg/cover-debuxing.jpg"}) {
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
