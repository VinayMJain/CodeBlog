import React from 'react'
import "../assets/style/Dashboard.css"
const DashboardBody = () => {
  return (
    <>
    <main className="home-main-content">
        <section className="home-main-content-blogs">
            <div className='searchbar-parent'>
            <div className="search-bar">
                <input type="search" id="search" name="search" placeholder="Search Blogs" required />
                <button  type="submit" className="search-button"><img src="images/search.png" alt="" /></button>
            </div>
            </div>

            
            {/* <div className="card-index" id="result" style="display: none;"></div> */}
            <div className="card-index" id="topblogs">
                <div className="card-image">
                    <img src="images/BlogData/binary search.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Binary Search</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/BFS graph.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">BFS Graph</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/binarytree.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Binary Tree</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/bucket sort.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Bucket Sort</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/dining philosopher.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Dining Philosopher</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/DFS graph.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Graph DFS</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/circular linked list.jpeg" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Circluar linked list</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/fibbonacci.jpeg" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Fibbonacci</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                
                <div className="card-image">
                    <img src="images/BlogData/tries.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Tries</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/Radix.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Radix Sort</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/kaden.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Kaden's Algorithm</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div className="card-image">
                    <img src="images/BlogData/dijskstra.png" alt="" />
                    <div className="card-topic">
                        <p className="topic-name">Dijkstra's Algorithm</p>
        
                    </div>
                    <div className="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                
        
            </div>
        </section>

        <aside className="rankings-section">
            <h2>Global Rankings</h2>
            
            <table className="rankings-section-table" id="rankings-section-table">
                <thead className="rankings-section-table-head">

                    <tr>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody className="rankings-section-table-body">
                    
                    <tr className="ranking-section-table-row">
                        <td className="rank">
                            <div className="gap2">

                                1
                            </div>
                        </td>
                        <td className="user-profile">
                            <div className="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user2.jpeg" alt="img1" />
                                    <span className="rank-name">Adam Smith</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="ranking-section-table-row">
                        <td className="rank">
                            <div className="gap2">

                                2
                            </div>
                        </td>
                        <td className="user-profile">
                            <div className="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user3.jpeg" alt="img1" />
                                    <span className="rank-name">Harish Kumar</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="ranking-section-table-row">
                        <td className="rank">
                            <div className="gap2">

                                3
                            </div>
                        </td>
                        <td className="user-profile">
                            <div className="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user4.jpeg" alt="img1" />
                                    <span className="rank-name">Urmila Yadav</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="ranking-section-table-row">
                        <td className="rank">
                            <div className="gap2">

                                4
                            </div>
                        </td>
                        <td className="user-profile">
                            <div className="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user5.jpeg" alt="img1" />
                                    <span className="rank-name">Riya Sharma</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="ranking-section-table-row">
                        <td className="rank">
                            <div className="gap2">

                                5
                            </div>
                        </td>
                        <td className="user-profile">
                            <div className="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/patel.jpg" alt="img1" />
                                    <span className="rank-name">Yuvraj Patel</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="dots">
                        <td className="">
                            <div className="">

                                
                            </div>
                        </td>
                        <td className="">
                            <div className="">
                                <p>.</p>
                                <p>.</p>
                                <p>.</p>
                            </div>
                        </td>
                    </tr>
                    
                    <tr className="ranking-section-table-row">
                        <td className="rank">
                            <div className="gap2">

                                121
                            </div>
                        </td>
                        <td className="user-profile">
                            <div className="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user1.jpeg" alt="img1" />
                                    <span className="rank-name">Martha Smith</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className="ranking-section-table-row">
                        <td className="rank">
                            <div className="gap2">

                                122
                            </div>
                        </td>
                        <td className="user-profile">
                            <div className="gap">
                                
                                <a href="profile.html">
                                    <img src="images/profile-photo.png" alt="img1" />
                                    <span className="rank-name">Jane Doe (Your Rank)</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    
                   
                </tbody>

            </table>
        </aside>
    </main>
    </>
  )
}

export default DashboardBody