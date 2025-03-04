import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../News/SideBar'
import TransitionContainer from '../Transition Container/TransitionContainer'
import './news.details.style.css'
const NewsDetails = () => {
    const { id } = useParams()
    const [article, setArticle] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(`https://news-app-o64y.onrender.com/news/${id}`)
            .then(res => res.json())
            .then(data => {
                setArticle(data)
                setError(null)

            })
            .catch(() => {
                console.error('Error fetching article:', error)
                setError("There was an error fetching the article details.");
            });
    }, [id, error])
    if (error) {
        return <div>Error: {error}</div>
    }
    if (!article) {
        return <div>Loading...</div>;
    }
    if (article)
    console.log(article)
        return (
            <div className='container'>
                <TransitionContainer section='News' article={article}/>
                <div className="row mt-5">
                    <div className="col-12 col-md-9">
                        <h1 className='article-title'>{article.title}</h1>
                        <img className='news-details-img' src={article.urlToImage} alt={`${article.id.slice(0, 4)}img`} />
                        <p className='content'>{article.content}</p>
                    </div>
                    <div className='col-md-3'>
                        <SideBar />
                    </div>
                </div>

            </div>
        )
}

export default NewsDetails
