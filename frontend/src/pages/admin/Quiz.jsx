import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InfiniteScrollWithMongo() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newQuiz, setNewQuiz] = useState({ name: "", description: "" });

  // Fetch Items
  const fetchItems = async () => {
    try {
      const limit = 9;
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/quiz/get?page=${page}&limit=${limit}&search=${searchQuery}`
      );
      const newItems = response.data.data;

      setItems((prevItems) => (page === 1 ? newItems : [...prevItems, ...newItems]));
      setPage((prevPage) => prevPage + 1);

      if (newItems.length < limit) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchItems();
  }, [searchQuery]);

  const handleSearch = () => {
    setPage(1);
    setItems([]);
    setSearchQuery(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleAddQuiz = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/quiz/add`, newQuiz);
      setNewQuiz({ name: "", description: "" });
      setShowModal(false);
      setPage(1);
      fetchItems();
    } catch (error) {
      console.error("Error adding quiz:", error);
    }
  };

  return (
    <Box p={4}>
      {/* Top Bar */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        {/* Search */}
        <Box display="flex" gap={2} flex={1}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Box>

        {/* Add Quiz */}
        <Button
          variant="contained"
          color="success"
          onClick={() => setShowModal(true)}
        >
          Add Quiz
        </Button>
      </Box>

      {/* Infinite Scroll */}
      <InfiniteScroll
        dataLength={items.length}
        next={fetchItems}
        hasMore={hasMore}
        loader={<Typography align="center">Loading...</Typography>}
        endMessage={<Typography align="center">No more quizzes to display</Typography>}
      >
        <Grid container spacing={3}>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="text.primary">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description || "No description"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No quizzes found</Typography>
          )}
        </Grid>
      </InfiniteScroll>

      {/* Add Quiz Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>
            Add New Quiz
          </Typography>
          <TextField
            fullWidth
            label="Quiz Name"
            variant="outlined"
            value={newQuiz.name}
            onChange={(e) => setNewQuiz({ ...newQuiz, name: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Quiz Description"
            variant="outlined"
            value={newQuiz.description}
            onChange={(e) => setNewQuiz({ ...newQuiz, description: e.target.value })}
            margin="normal"
            multiline
            rows={4}
          />
          <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleAddQuiz}>
              Add Quiz
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
