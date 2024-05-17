import React from 'react'
import "../assets/style/home.css"
const HomeBody = () => {
  return (
    <>
    <main class="home-main-content">
        <section class="home-main-content-blogs">
            <div class="search-bar">
                <input type="search" id="search" name="search" placeholder="Search Blogs" required />
                <button  type="submit" class="search-button"><img src="images/search.png" alt="" /></button>
            </div>
            <div class="sort-by">
                <button id="sortBtn">Sort</button>
                {/* <div class="dropdownSort" id="sortDrop" style="display: none;">
                    <a href="#">by A to Z</a>
                    <a href="#">by Date</a>
                </div> */}
            </div>
            {/* <div class="card-index" id="result" style="display: none;"></div> */}
            <div class="card-index" id="topblogs">
                <div class="card-image">
                    <img src="images/BlogData/binary search.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Binary Search</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/BFS graph.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">BFS Graph Traversal</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/binary tree.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Binary Tree</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/bucket sort.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Bucket Sort</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/dining philosopher.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Dining Philosopher</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/DFS graph.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Graph DFS</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/circular linked list.jpeg" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Circluar linked list</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/fibbonacci.jpeg" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Fibbonacci</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                
                <div class="card-image">
                    <img src="images/BlogData/tries.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Tries</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/Radix.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Radix Sort</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/kaden.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Kaden's Algorithm</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                <div class="card-image">
                    <img src="images/BlogData/dijskstra.png" alt="" />
                    <div class="card-topic">
                        <p class="topic-name">Dijkstra's Algorithm</p>
        
                    </div>
                    <div class="explore-btn">
                        <button>Explore</button>
                    </div>
                </div>
                
        
            </div>
        </section>

        <aside class="rankings-section">
            <h2>Global Rankings</h2>
            
            <table class="rankings-section-table" id="rankings-section-table">
                <thead class="rankings-section-table-head">

                    <tr>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody class="rankings-section-table-body">
                    
                    <tr class="ranking-section-table-row">
                        <td class="rank">
                            <div class="gap2">

                                1
                            </div>
                        </td>
                        <td class="user-profile">
                            <div class="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user2.jpeg" alt="img1" />
                                    <span class="rank-name">Adam Smith</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr class="ranking-section-table-row">
                        <td class="rank">
                            <div class="gap2">

                                2
                            </div>
                        </td>
                        <td class="user-profile">
                            <div class="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user3.jpeg" alt="img1" />
                                    <span class="rank-name">Harish Kumar</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr class="ranking-section-table-row">
                        <td class="rank">
                            <div class="gap2">

                                3
                            </div>
                        </td>
                        <td class="user-profile">
                            <div class="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user4.jpeg" alt="img1" />
                                    <span class="rank-name">Urmila Yadav</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr class="ranking-section-table-row">
                        <td class="rank">
                            <div class="gap2">

                                4
                            </div>
                        </td>
                        <td class="user-profile">
                            <div class="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user5.jpeg" alt="img1" />
                                    <span class="rank-name">Riya Sharma</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr class="ranking-section-table-row">
                        <td class="rank">
                            <div class="gap2">

                                5
                            </div>
                        </td>
                        <td class="user-profile">
                            <div class="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/patel.jpg" alt="img1" />
                                    <span class="rank-name">Yuvraj Patel</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr class="dots">
                        <td class="">
                            <div class="">

                                
                            </div>
                        </td>
                        <td class="">
                            <div class="">
                                <p>.</p>
                                <p>.</p>
                                <p>.</p>
                            </div>
                        </td>
                    </tr>
                    
                    <tr class="ranking-section-table-row">
                        <td class="rank">
                            <div class="gap2">

                                121
                            </div>
                        </td>
                        <td class="user-profile">
                            <div class="gap">
                                
                                <a href="viewprofile.html">
                                    <img src="images/userData/user1.jpeg" alt="img1" />
                                    <span class="rank-name">Martha Smith</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr class="ranking-section-table-row">
                        <td class="rank">
                            <div class="gap2">

                                122
                            </div>
                        </td>
                        <td class="user-profile">
                            <div class="gap">
                                
                                <a href="profile.html">
                                    <img src="images/profile-photo.png" alt="img1" />
                                    <span class="rank-name">Jane Doe (Your Rank)</span>
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

export default HomeBody