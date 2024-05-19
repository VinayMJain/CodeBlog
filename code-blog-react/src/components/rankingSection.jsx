import React from 'react'

const RankingSection = () => {
  return (
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
  )
}

export default RankingSection