import React from 'react';
import styles from './RankingSection.module.css';

const rankings = [
    { id:1, imageUrl: 'images/userData/YuvrajPatel.jpg', name: 'Yuvraj Patel', rank: 1 },
    { id:2, imageUrl: 'images/userData/user2.jpeg', name: 'Jane Smith', rank: 2 },
    { id:3, imageUrl: 'images/userData/user3.jpeg', name: 'Michael Johnson', rank: 3 },
    { id:4, imageUrl: 'images/userData/user4.jpeg', name: 'Emily Davis', rank: 4 },
    { id:5, imageUrl: 'images/userData/user1.jpeg', name: 'Christine Brown', rank: 5 },
];

const additionalRank1 = { imageUrl: 'images/userData/user5.jpeg', name: 'Alex Turner', rank: 122 };
const accountHolderRank = { imageUrl: 'images/userData/user6.jpeg', name: 'Reed Richards', rank: 123 };

function RankingSection() {
    return (
        <div 
         className={styles.rankingsSection} 
         id="rankingsSectionId"
        >
            <h1 
                className={styles.globalRankingsHeading}
                id="globalRankingsHeadingId" 
            >
                Global Rankings
            </h1>
            <div 
                className={styles.rankingsTable}
                id="rankingsTableId"
            >
                {rankings.map(({ rank, imageUrl, name }) => (
                    <div 
                        className={styles.rankingItem} 
                        id={`rankingItem${rank}Id`}
                        key={rank}
                    >
                        <span 
                            className={styles.rank}
                            id={`rank${rank}Id`}
                        >
                            {rank}
                        </span>
                        <div 
                            className={styles.rankHolder}
                            id={`rankHolder${rank}Id`}
                        >
                            <img 
                                alt={name} 
                                className={styles.rankHolderImage} 
                                id={`rankHolderImage${rank}Id`}
                                src={imageUrl} 
                            />
                            <span 
                                className={styles.rankHolderName}
                                id={`rankHolderName${rank}Id`}
                            >
                                {name}
                            </span>
                        </div>
                    </div>
                ))}
                <div 
                    className={styles.dots}
                    id="dotsId"
                >
                    ...
                </div>
                <div 
                    className={styles.rankingItem}
                    id={`rankingItem${additionalRank1.rank}Id`}
                    key={additionalRank1.rank}
                >
                    <span 
                        className={styles.rank}
                        id={`rank${additionalRank1.rank}Id`}
                    >
                        {additionalRank1.rank}
                    </span>
                    <div 
                        className={styles.rankHolder}
                        id={`rankHolder${additionalRank1.rank}Id`}
                    >
                        <img 
                            alt={additionalRank1.name} 
                            className={styles.rankHolderImage} 
                            id={`rankHolderImage${additionalRank1.rank}Id`}
                            src={additionalRank1.imageUrl} 
                        />
                        <span 
                            className={styles.rankHolderName}
                            id={`rankHolderName${additionalRank1.rank}Id`}
                        >
                            {additionalRank1.name}
                        </span>
                    </div>
                </div>
                <div 
                    className={styles.rankingItem} 
                    id={`rankingItem${accountHolderRank.rank}Id`}
                    key={accountHolderRank.rank}
                >
                    <span 
                        className={styles.rank}
                        id={`rank${accountHolderRank.rank}Id`}
                    >
                        {accountHolderRank.rank}
                    </span>
                    <div 
                        className={styles.rankHolder}
                        id={`rankHolder${accountHolderRank.rank}Id`}
                    >
                        <img 
                            alt={accountHolderRank.name} 
                            className={styles.rankHolderImage} 
                            id={`rankHolderImage${accountHolderRank.rank}Id`}
                            src={accountHolderRank.imageUrl} 
                        />
                        <span 
                            className={styles.rankHolderName}
                            id={`rankHolderName${accountHolderRank.rank}Id`}
                        >
                            {accountHolderRank.name} (Your Rank)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RankingSection;
