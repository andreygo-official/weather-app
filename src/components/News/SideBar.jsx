import React from 'react'

const SideBar = () => {
    return (
        <React.Fragment>
            <div className='col-12'>
                <div className='hot-news-container'>
                    <h3>Hot News</h3>
                    <ul className='hot'>
                        <li>
                            <span>→</span> Global Conference on Climate Change Achieves Unprecedented Consensus
                        </li>
                        <li>
                            <span>→</span> Breakthrough in Renewable Energy: Efficiency Records Shattered
                        </li>
                        <li>
                            <span>→</span> World's Oldest Known Time Capsule Unearthed in Egypt
                        </li>
                        <li>
                            <span>→</span> Revolutionary Advancements in AI Could Change Healthcare Forever
                        </li>
                        <li>
                            <span>→</span> Rare Astronomical Event: Comet Visible to the Naked Eye This Month
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-12 mt-4'>
                <div className='categories-container'>
                    <h3>Categories</h3>
                    <ul className='hot'>
                        <li>
                            <span>→</span>Politics
                        </li>
                        <li>
                            <span>→</span>Sport
                        </li>
                        <li>
                            <span>→</span>Business
                        </li>
                        <li>
                            <span>→</span>Marketing
                        </li>
                        <li>
                            <span>→</span>Economy
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-12 mt-4'>
                <div className='top-rated-container mt-4'>
                    <h3>Top rated posts</h3>
                    <ul className='ratings'>
                        <li>
                            <span>The Five</span><br /><span className='text-danger'>5.5</span>(759 rates)
                        </li>
                        <li>
                            <span>Jesse Watters Primetime</span><br /><span className='text-danger'>5.2</span>(704 rates)
                        </li>
                        <li>
                            <span>Hannity</span><br /><span className='text-danger'>5.1</span>(694 rates)
                        </li>
                        <li>
                            <span>Special Report with Bret Baier</span><br /><span className='text-danger'>5.1</span>(693 rates)
                        </li>
                        <li>
                            <span> The Ingraham Angle</span><br /><span className='text-danger'>5.0</span>(650 rates)
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideBar
