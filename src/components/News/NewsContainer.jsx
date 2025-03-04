import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TransitionContainer from '../Transition Container/TransitionContainer'
import './news.container.css'
import SideBar from './SideBar'
const NewsContainer = () => {
    const section = 'News'
    const navigate = useNavigate()
    const [news, setNews] = useState(null)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://news-app-o64y.onrender.com/news')
            .then(res => res.json())
            .then(data => {
                if (data.status === 'ok') {
                    setNews(data)
                    setError(null)
                }
                else {
                    setError('Failed to fetch news.');
                }
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch news.');
                setLoading(false);
            });
    }, [])
    const redirectionHandler = (id) => {
        navigate(`/news/${id}`)
    }
    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!news) {
        return <div>Loading...</div>;
    }

    if (news) {
        const articlesPerPage = 4
        const lastIndex = currentPage * articlesPerPage
        const firstIndex = lastIndex - articlesPerPage
        const records = news.articles.slice(firstIndex, lastIndex);
        const npage = Math.ceil(news.articles.length / articlesPerPage)

        function prevPage() {
            if (currentPage !== 1) {
                setCurrentPage(currentPage - 1)
            }
        }

        function changeCurrentPage(id) {
            setCurrentPage(id)
        }

        function nextPage() {
            if (currentPage !== npage) {
                setCurrentPage(currentPage + 1)
            }
        }
        const getPaginationGroup = (currentPage, totalPages) => {
            let start = Math.floor((currentPage - 1) / 5) * 5;
            return new Array(5).fill().map((_, idx) => start + idx + 1).filter(page => page <= totalPages);
        };
        const totalPages = Math.ceil(news.articles.length / articlesPerPage);
        const paginationGroup = getPaginationGroup(currentPage, totalPages);

        return (
            <div className='news-container'>
                <div className='container'>
                    <TransitionContainer section={section} />
                    <div className='news-block'>
                        <div className="row news-row mt-5">
                            <div className='col-12 col-md-8 news order-1 order-md-0'>
                                {records.map((article, index) => (
                                    <div key={article.id} className='col-12 mt-5'>
                                        <div>
                                            <h2 className='text-white'>{article.title}</h2>
                                            <img width='100%' height='300px' src={article.urlToImage} alt={`img${index}`} />
                                            <p className='text-white mt-3'>{article.description}</p>
                                            <input type="button" value="Read More" className='btn btn-success' onClick={() => redirectionHandler(article.id)} />
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                                <nav>
                                    <ul className='pagination'>
                                        <li className='page-item'>
                                            <p href="#" className='page-link' onClick={(e) => { e.preventDefault(); prevPage(); }}>Prev</p>
                                        </li>
                                        {currentPage > 5 && (
                                            <>
                                                <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
                                                    <p href="#" className="page-link" onClick={(e) => { e.preventDefault(); changeCurrentPage(1); }}>1</p>
                                                </li>
                                                <li className='page-item'>
                                                    <span className='page-link'>...</span>
                                                </li>
                                            </>
                                        )}
                                        {paginationGroup.map((item, index) => (
                                            <li className={`page-item ${currentPage === item ? 'active' : ''}`} key={index}>
                                                <p href="#" className="page-link" onClick={(e) => { e.preventDefault(); changeCurrentPage(item); }}>
                                                    {item}
                                                </p>
                                            </li>
                                        ))}
                                        {currentPage < totalPages - 4 && (
                                            <>
                                                <li className='page-item'>
                                                    <span className='page-link'>...</span>
                                                </li>
                                                <li className={`page-item ${currentPage === totalPages ? 'active' : ''}`}>
                                                    <p href="#" className="page-link" onClick={(e) => { e.preventDefault(); changeCurrentPage(totalPages); }}>
                                                        {totalPages}
                                                    </p>
                                                </li>
                                            </>
                                        )}
                                        <li className='page-item'>
                                            <p className='page-link' onClick={(e) => { e.preventDefault(); nextPage(); }}>Next</p>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='col-12 col-md-3 main-info offset-md-1 order-0 order-md-1'>
                                <SideBar />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}




export default NewsContainer
