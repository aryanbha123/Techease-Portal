import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Typography,
} from '@mui/material'
import {
  ArrowRight,
  LockRounded,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Quiz () {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1) // Track current page
  const [hasMore, setHasMore] = useState(true) // For determining if more items exist
  const [searchTerm, setSearchTerm] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)

  // Fetch Items function with pagination
  const fetchItems = async fetchLimit => {
    try {
      setLoading(true)
      const limit = fetchLimit || 9
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/quiz/get?page=${page}&limit=${limit}&search=${searchQuery}`
      )
      const newItems = response.data.data

      setItems(prevItems =>
        page === 1 ? newItems : [...prevItems, ...newItems]
      )
      if (newItems.length < limit) {
        setHasMore(false) // If there are fewer items than the limit, stop loading more
      }
    } catch (error) {
      console.error('Error fetching items:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems(30) // Fetch items when page or search query changes
  }, [searchQuery, page])

  const handleSearch = () => {
    setPage(1) // Reset to the first page when searching
    setItems([]) // Clear existing items
    setSearchQuery(searchTerm)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // Handle Next Page
  const handleNextPage = () => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1)
    }
  }

  return (
    <div className='dark:bg-gray-900 bg-white transition-all duration-300'>
      {/* <div className='flex gap-6 justify-between dark:text-white text-black pr-5'>
        <div className='flex items-center gap-3 border-none p-5'>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl variant='standard'>
              <InputLabel
                htmlFor='input-with-icon-adornment'
                className='dark:text-[#f2f2f2]'
              >
                Search Quiz
              </InputLabel>
              <Input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyUp={handleKeyPress}
                id='input-with-icon-adornment'
                startAdornment={
                  // <InputAdornment position='start'>
                    <Search color='inherit' />
                  // </InputAdornment>
                }
                className='dark:bg-gray-800 dark:text-white'
              />
            </FormControl>
          </Box>
          <Button
            variant='contained'
            color='primary'
            sx={{ color: '#f1f1f1', fontWeight: 'bold' }}
            onClick={handleSearch}
            className='dark:bg-[#f1f1f1] dark:text-gray-900'
          >
            Search
          </Button>
        </div>
        <div className='items-center flex justify-between'>
          <div>
            <IconButton className='dark:text-white'>
              <Refresh />
            </IconButton>
          </div>
        </div>
      </div> */}

      {/* Items Section */}
      <section className='bg-gray-100 dark:bg-gray-800  py-8 overflow-hidden'>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-4'>
          {items &&
            items.map((item, index) => (
              <>
                <div key={index} class='bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
                  <div className='flex gap-3'>
                    <span class='rounded-md shadow-lg'>
                      <img
                        src='https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-brain-3d-illustration-business-businessman-png-image_5026470.png'
                        className='h-16 w-16 rounded-md'
                        alt=''
                      />
                    </span>
                    <div className='flex-1 flex flex-col'>
                      <small class='text-gray-900 dark:text-[#f3f3f3] text-lg'>
                        {item.title}
                      </small>
                      <small class='text-gray-900 mt-1 dark:text-[#f3f3f3] text-sm items-center ml-1 flex gap-1'>
                        {!item.isAvailable ? (
                          <>
                            <small>Locked</small>{' '}
                            <LockRounded fontSize='1.2rem' />
                          </>
                        ) : (
                          <Link to={'/user/attempt/' + item._id }>
                            <samll>Attempt</samll>
                            <ArrowRight />
                          </Link>
                        )}
                      </small>
                    </div>
                  </div>
                  <h3 class='text-slate-900 dark:text-white mt-5 text-sm font-medium tracking-tight'>
                    Duration :  {item.duration + " "} min.
                  </h3>
                  <p class='text-slate-500 dark:text-slate-400 mt-2 text-sm'>
                    {item.description || 'No description'}
                  </p>
                  <p class='text-slate-500 dark:text-slate-400 mt-2 text-sm'>
                    Created by : {item.creator.name}
                  </p>
                  <p class='text-slate-500 dark:text-slate-400 mt-2 text-sm'>
                    Category : {item.category || 'Miscellaneous' }
                  </p>
                </div>
              </>
            ))}
        </div>

        {/* View More Button */}
        {hasMore && !loading && (
          <p
            className='cursor-pointer text-gray-900 dark:text-[#f1f1f1] p-5 text-center w-full'
            onClick={handleNextPage}
          >
            View More
          </p>
        )}

        {/* Loading indicator */}
        {loading && (
          <div className='flex justify-center items-center h-screen'>
            <Typography>Loading...</Typography>
          </div>
        )}
      </section>
    </div>
  )
}
