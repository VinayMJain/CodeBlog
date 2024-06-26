import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './BlogSection.module.css';
import Card from '../../common/Card/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import blogs from '../../../blogs.json';

const UnsplashAccessKey = 'aVhwloBHIg3J6I1FchuFQt-rr1kwoHJR-lpfzPYBjnI'; // Replace with your Unsplash API access key

function BlogSection({ selectedCategory, selectedSortOption }) {
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

  // Filter and truncate titles based on the selected category
  const filteredBlogs = selectedCategory === 'all'
    ? blogs.flatMap(category => category.blogs)
    : blogs.find(category => category.category === selectedCategory).blogs;

  // Sort blogs based on the selected sort option
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (selectedSortOption === 'date') {
      return new Date(b.date) - new Date(a.date);
    } else if (selectedSortOption === 'atoz') {
      return a.title.localeCompare(b.title);
    } else if (selectedSortOption === 'ztoa') {
      return b.title.localeCompare(a.title);
    }
    // Add more sorting options here (e.g., views, likes)
    return 0;
  });

  const allTitles = sortedBlogs.reduce((titles, blog) => {
    const truncatedTitle = blog.title.length > 25 ? blog.title.substring(0, 20) + "..." : blog.title;
    titles.push({ ...blog, title: truncatedTitle });
    return titles;
  }, []);


  return (
    <div className={styles.container}>
      
      <div className={styles.blogContainer} id='blogContainerId'>
        {/* {photos.map((photo) => (
          <Card 
            image={photo.urls.small} 
            key={photo.id} 
            title={photo.alt_description || 'Untitled'} 
          />
        ))} */}
        {allTitles.map((blog,index) => (
          <Card 
            image={photos[Math.floor(Math.random() * (19 - 1 + 1)) + 1].urls.small}
            key={index} 
            title={blog.title} 
          />
        ))}
      </div>

{/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            {allTitles.map((blog,index) => (
              <Card 
                image={photos[Math.floor(Math.random() * (19 - 1 + 1)) + 1].urls.small}
                key={index} 
                title={blog.title} 
              />
        ))}
          </Grid>
        ))}
      </Grid>
    </Box> */}

    </div>
  );
}

export default BlogSection;
