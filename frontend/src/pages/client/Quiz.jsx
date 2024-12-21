import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography, InputAdornment, InputLabel, FormControl, Input, IconButton } from "@mui/material";
import { ArrowRight, Edit, Lock, Refresh, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LoadingModal from "../../components/modals/LoadingModal";
import Slider from "react-slick";
import SliderSettings from "../../libs/sliderSettings";
const Addquiz = React.lazy(() => import("../../components/modals/Addquiz"));

export default function InfiniteScrollWithMongo() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);  // Track current page
  const [hasMore, setHasMore] = useState(true);  // For determining if more items exist
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch Items function with pagination
  const fetchItems = async (fetchLimit) => {
    try {
      setLoading(true);
      const limit = fetchLimit || 9;
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/quiz/get?page=${page}&limit=${limit}&search=${searchQuery}`
      );
      const newItems = response.data.data;

      setItems((prevItems) => (page === 1 ? newItems : [...prevItems, ...newItems]));
      if (newItems.length < limit) {
        setHasMore(false);  // If there are fewer items than the limit, stop loading more
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(9);  // Fetch items when page or search query changes
  }, [searchQuery, page]);

  const handleSearch = () => {
    setPage(1);  // Reset to the first page when searching
    setItems([]);  // Clear existing items
    setSearchQuery(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Handle Next Page
  const handleNextPage = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Handle Previous Page
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div className="flex gap-6 justify-between bg-white pr-5">
        <div className="flex items-center gap-3 border-none p-5">
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">Search Quiz</InputLabel>
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={handleKeyPress}
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Button variant="contained" color="primary" sx={{ color: "#f1f1f1", fontWeight: "bold" }} onClick={handleSearch}>
            Search
          </Button>
        </div>
        <div className="items-center flex justify-between">
          <div>
            <IconButton>
              <Refresh />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Infinite Scroll */}
      <section className="bg-gray-100 px-10 py-8 overflow-hidden">
        <Slider centerMode={false} {...SliderSettings} className="">

          {items && items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="max-w-fit">
                <article className="border w-64 rounded-lg shadow-md bg-white p-5 flex flex-col justify-between leading-normal transition-transform transform ">
                  {/* Quiz Image */}
                  <img
                    src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                    alt="Qualcomm"
                    className="h-28 w-full object-cover rounded-t-lg"
                  />

                  {/* Card Content */}
                  <div className="pt-3">

                    {
                      !item.isAvailable ?
                        <p className="text-sm text-gray-600 flex items-center mb-2">
                          <svg
                            className="fill-current text-gray-500 w-4 h-4 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path>
                          </svg>
                          Locked
                        </p> : <>
                          <Link to={'/user/attempt/' + item._id} className="text-sm text-gray-600 flex items-center mb-2">
                            Attempt <ArrowRight />
                          </Link>
                        </>
                    }

                    <Link
                      href="#"
                      className="text-gray-900 font-bold text-sm mb-2 hover:text-indigo-600 inline-block"
                    >
                      {item.title}
                    </Link>

                    <p className="text-gray-700 text-xs h-20 overflow-x-hidden overflow-y-auto">
                      {item.description || "No Description "}
                    </p>
                    <small className="text-xs" >Creator : {item.creator.name}</small>
                  </div>

                </article>
              </div>
            ))
          ) : (
            // <div className="flex bg-white text-center p-5 w-full">No Quiz Found</div>
            <></>
          )}


        </Slider>
        {
          loading && <LoadingModal />
        }
      </section>
      <section className="bg-gray-100 px-10 py-8 overflow-hidden">
        <Slider centerMode={false} {...SliderSettings} className="">
          {/* {items && items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="max-w-fit">
                <Card opensAt={item.opensAt} closeAt={item.closeAt} _id={item._id} title={item.title} createdAt={item.createdAt} updatedAt={item.updatedAt} />
              </div>
            ))
          ) : (
            // <div className="flex bg-white text-center p-5 w-full">No Quiz Found</div>
            <></>
          )} */}
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

        </Slider>
        {
          loading && <LoadingModal />
        }
      </section>
      <section className="bg-gray-100 px-10 py-8 overflow-hidden">
        <Slider centerMode={false} {...SliderSettings} className="">
          {/* {items && items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="max-w-fit">
                <Card opensAt={item.opensAt} closeAt={item.closeAt} _id={item._id} title={item.title} createdAt={item.createdAt} updatedAt={item.updatedAt} />
              </div>
            ))
          ) : (
            // <div className="flex bg-white text-center p-5 w-full">No Quiz Found</div>
            <></>
          )} */}
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

        </Slider>
        {
          loading && <LoadingModal />
        }
      </section>
      <section className="bg-gray-100 px-10 py-8 overflow-hidden">
        <Slider centerMode={false} {...SliderSettings} className="">
          {/* {items && items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="max-w-fit">
                <Card opensAt={item.opensAt} closeAt={item.closeAt} _id={item._id} title={item.title} createdAt={item.createdAt} updatedAt={item.updatedAt} />
              </div>
            ))
          ) : (
            // <div className="flex bg-white text-center p-5 w-full">No Quiz Found</div>
            <></>
          )} */}
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

        </Slider>
        {
          loading && <LoadingModal />
        }
      </section>
    </>
  );
}
const Card = () => {
  return (
    <article className="border rounded-lg shadow-md bg-white p-5 flex flex-col justify-between leading-normal transition-transform transform ">
      {/* Quiz Image */}
      <img
        src="https://cxotoday.com/wp-content/uploads/2023/02/qualcomm.jpeg"
        alt="Qualcomm"
        className="h-28 w-full object-cover rounded-t-lg"
      />

      {/* Card Content */}
      <div className="pt-3">
        <p className="text-sm text-gray-600 flex items-center mb-2">
          <svg
            className="fill-current text-gray-500 w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path>
          </svg>
          Locked
        </p>

        <Link
          href="#"
          className="text-gray-900 font-bold text-sm mb-2 hover:text-indigo-600 inline-block"
        >
          Can coffee make you a better developer?
        </Link>

        <p className="text-gray-700 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.
        </p>
      </div>

    </article>
  );
};