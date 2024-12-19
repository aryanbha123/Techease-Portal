import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { debounce } from 'lodash';

export default function IndianCollegeSearch() {
  const [collegeList, setCollegeList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  // Debounced search to handle delayed API calls
  const debouncedSearch = debounce(async (text) => {
    if (!text) {
      setCollegeList([]); // Clear list if no search text
      return;
    }
    setLoading(true);
    try {
      // Filter by country: India
      const response = await axios.get(`http://universities.hipolabs.com/search?country=India&name=${text}`);
      setLoading(false);
      // Ensure we clear the old list and add only the latest search results
      setCollegeList(response.data);
    } catch (error) {
      console.error('Error fetching college data:', error);
      setLoading(false);
    }
  }, 500);

  useEffect(() => {
    if (searchText) {
      debouncedSearch(searchText);
    } else {
      setCollegeList([]); // Clear list when search is cleared
    }
  }, [searchText]);

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <TextField
        label="Search for Indian Colleges"
        fullWidth
        variant="outlined"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        style={{ marginBottom: '20px' }}
      />

      {loading && <CircularProgress size={24} />}

      <List>
        {!loading && collegeList.length === 0 && searchText && (
          <ListItem>No colleges found</ListItem>
        )}
        {collegeList.map((college, index) => (
          <ListItem key={index}>
            <ListItemText primary={college.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
