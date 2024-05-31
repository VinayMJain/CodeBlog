import React from 'react';
import styles from './RankingSection.module.css';

const rankings = [
    { rank: 1, imageUrl: 'images/userData/YuvrajPatel.jpg', name: 'Yuvraj Patel' },
    { rank: 2, imageUrl: 'images/userData/user2.jpeg', name: 'Jane Smith' },
    { rank: 3, imageUrl: 'images/userData/user3.jpeg', name: 'Michael Johnson' },
    { rank: 4, imageUrl: 'images/userData/user4.jpeg', name: 'Emily Davis' },
    { rank: 5, imageUrl: 'images/userData/user1.jpeg', name: 'Christine Brown' },
];

const additionalRank1 = { rank: 122, imageUrl: 'images/userData/user5.jpeg', name: 'Alex Turner' };
const accountHolderRank = { rank: 123, imageUrl: 'images/userData/user6.jpeg', name: 'Reed Richards' };

function RankingSection() {
    return (
        <div className={styles.rankingsSection}>
            <h1 id="globalRankingsHeadingId" className={styles.globalRankingsHeading}>
                Global Rankings
            </h1>
            <div className={styles.rankingsTable}>
                {rankings.map(({ rank, imageUrl, name }) => (
                    <div className={styles.rankingItem} key={rank}>
                        <span className={styles.rank}>{rank}</span>
                        <div className={styles.rankHolder}>
                            <img src={imageUrl} alt={name} className={styles.rankHolderImage} />
                            <span className={styles.rankHolderName}>{name}</span>
                        </div>
                    </div>
                ))}
                <div className={styles.dots}>...</div>
                <div className={styles.rankingItem} key={additionalRank1.rank}>
                    <span className={styles.rank}>{additionalRank1.rank}</span>
                    <div className={styles.rankHolder}>
                        <img src={additionalRank1.imageUrl} alt={additionalRank1.name} className={styles.rankHolderImage} />
                        <span className={styles.rankHolderName}>{additionalRank1.name}</span>
                    </div>
                </div>
                <div className={styles.rankingItem} key={accountHolderRank.rank}>
                    <span className={styles.rank}>{accountHolderRank.rank}</span>
                    <div className={styles.rankHolder}>
                        <img src={accountHolderRank.imageUrl} alt={accountHolderRank.name} className={styles.rankHolderImage} />
                        <span className={styles.rankHolderName}>{accountHolderRank.name} (Your Rank)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RankingSection;
