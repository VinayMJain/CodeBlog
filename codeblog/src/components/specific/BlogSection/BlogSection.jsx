import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './BlogSection.module.css';
import Card from '../../common/Card/Card';

const UnsplashAccessKey = 'aVhwloBHIg3J6I1FchuFQt-rr1kwoHJR-lpfzPYBjnI'; // Replace with your Unsplash API access key

function BlogSection() {
  const [photos, setPhotos] = useState([]);
  // const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchPhotos = async (searchQuery = '') => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: `Client-ID ${UnsplashAccessKey}`,
        },
        params: {
          query: searchQuery || 'random',
          per_page: 20, 
        },
      });
      setPhotos(response.data.results);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   fetchPhotos(query);
  // };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (photos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.blogContainer} id='blogContainerId'>
        {photos.map((photo) => (
          <Card 
            image={photo.urls.small} 
            key={photo.id} 
            title={photo.alt_description || 'Untitled'} 
          />
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
