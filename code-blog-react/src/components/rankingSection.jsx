import React from 'react'

const RankingSection = () => {
  return (
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
  )
}

export default RankingSection