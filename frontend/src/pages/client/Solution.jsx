import React, { useState, useEffect } from 'react'
import {
  ArrowDropUp,
  ArrowDropDown,
  ExitToApp,
  Fullscreen,
  Help,
  Menu
} from '@mui/icons-material'
import {
  IconButton,
  Typography,
  Button,
  TextField,
  Divider
} from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Solution = () => {
  const [response, setResponse] = useState([])
  const [open, setOpen] = useState(false)
  const [currentQuiz, setCurrentQuiz] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedOption, setSelectedOption] = useState(null) // Track selected option
  const questionsPerPage = 1 // Only one question per page
  const { id } = useParams()
  const [windowDimensions, setWindowDimensions] = useState([
    window.innerHeight,
    window.innerWidth
  ])
  // Fetch Quiz Data
  const getQuiz = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/quiz/${id}`
      )
      if (res.data) {
        setCurrentQuiz(res.data)
      }
    } catch (error) {
      console.error('Error fetching quiz:', error)
    }
  }

  useEffect(() => {
    getQuiz()
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setOpen(true)
        // alert('Tab switching is not allowed during the quiz!')
      }
    }
    const handelResize = () => {
      if(window.innerHeight < windowDimensions[0] || window.innerWidth < windowDimensions[1]){
        setOpen(true);
      }
    }
    const disableShortcuts = e => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'v')) || // Copy-paste
        (e.metaKey && (e.key === 'c' || e.key === 'v')) // For Mac users
      ) {
        e.preventDefault()
        alert('Copy-paste is disabled!')
      } else if (e.key == 'f') {
        handleFullScreen()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('resize', handelResize)
    document.addEventListener('keydown', disableShortcuts)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('resize', handelResize)
      document.removeEventListener('keydown', disableShortcuts)
    }
  }, [])

  // Pagination Logic
  const indexOfLastQuestion = currentPage * questionsPerPage
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
  const currentQuestions =
    currentQuiz?.questions.slice(indexOfFirstQuestion, indexOfLastQuestion) ||
    []

  const totalPages = currentQuiz
    ? Math.ceil(currentQuiz.questions.length / questionsPerPage)
    : 0

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  // Handle Fullscreen
  const handleFullScreen = () => {
    const element = document.getElementById('root')
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else {
      console.error('Fullscreen API is not supported in this browser.')
    }
  }

  const handleOptionClick = optionText => {
    setSelectedOption(optionText) // Allow only one answer
  }

  return (
    <main className='font-[Lato] bg-[#f6f6f6] h-screen w-screen overflow-x-hidden overflow-y-scroll'>
      {/* Header */}
      <header className='h-[70px] bg-white relative w-full'>
        <nav className='fixed items-center bg-white z-20 px-10 w-full flex justify-between h-[70px] shadow-lg'>
          <div className='flex'>
            <img src='/assets/techease.jpg' className='h-8' alt='' />
          </div>
          <div className='flex gap-3 items-center'>
            <IconButton onClick={handleFullScreen}>
              <Fullscreen />
            </IconButton>
            <Divider flexItem orientation='vertical' />
            <span className='text-[#757575]'>
              <Help color='inherit' />
              <small>Help</small>
            </span>
            <Divider flexItem orientation='vertical' />
            <span className='text-[#757575]'>
              <ExitToApp color='inherit' />
              <small> Exit</small>
            </span>
            <Divider flexItem orientation='vertical' />
            <IconButton>
              <Menu />
            </IconButton>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <section className='flex flex-col h-[calc(100vh-70px)] pl-5 pr-28 py-10'>
        {currentQuestions.map((question, index) => (
          <div key={question._id} className='flex justify-between gap-5'>
            <div className='mb-8 flex-1 px-4 rounded-lg'>
              <h1 className='text-lg font-semibold mb-6 text-gray-900'>
                Q{(currentPage - 1) * questionsPerPage + index + 1}:{' '}
                {question.question}
              </h1>
              {question.image && (
                <img
                  src={question.image}
                  alt={`Question ${index + 1}`}
                  className='w-96 h-auto rounded-lg mb-4'
                />
              )}
              {/* <p className='overflow-x-hidden h-[calc(100vh-200px)]  overflow-y-scroll'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                aperiam quam molestiae aliquam. Iure, a mollitia reprehenderit
                officia sit, et cumque atque commodi ipsam, quasi vel magni
                voluptates necessitatibus doloribus? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eius vel ut blanditiis porro,
                fugit quod veritatis nobis consequatur laborum repudiandae
                itaque eaque eos harum impedit atque modi nisi? Incidunt,
                consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eum culpa placeat, maxime autem dolore nobis sit numquam
                quidem excepturi ex aut debitis corrupti in animi rem laborum
                quod doloribus quis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eum culpa placeat, maxime autem dolore nobis
                sit numquam quidem excepturi ex aut debitis corrupti in animi
                rem laborum quod doloribus quis? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eum culpa placeat, maxime autem
                dolore nobis sit numquam quidem excepturi ex aut debitis
                corrupti in animi rem laborum quod doloribus quis? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Eum culpa placeat,
                maxime autem dolore nobis sit numquam quidem excepturi ex aut
                debitis corrupti in animi rem laborum quod doloribus quis? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eum culpa
                placeat, maxime autem dolore nobis sit numquam quidem excepturi
                ex aut debitis corrupti in animi rem laborum quod doloribus
                quis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum culpa placeat, maxime autem dolore nobis sit numquam quidem
                excepturi ex aut debitis corrupti in animi rem laborum quod
                doloribus quis?
              </p> */}
            </div>

            <div className='flex justify-start flex-[0.8]'>
              {question.category === 'MCQ' && (
                <div className='w-full'>
                  <h1 className='text-lg font-semibold mb-6 text-sky-900'>
                    Choose the correct option
                  </h1>
                  <div className='flex w-full flex-col gap-3'>
                    {question.options.map(option => (
                      <div
                        key={option._id}
                        className={`option ${
                          selectedOption === option.text
                            ? 'bg-navy text-white'
                            : 'shadow-md'
                        }`}
                        onClick={() => handleOptionClick(option.text)}
                      >
                        <Typography className='label'>{option.text}</Typography>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {question.category === 'Text' && (
                <div className='w-full pr-16'>
                  <h1 className='text-lg font-semibold mb-6 text-sky-900'>
                    Analyze the question & type your answer below
                  </h1>

                  <TextField
                    fullWidth
                    variant='standard'
                    label='Enter Answer'
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <div className='flex fixed bottom-7 right-32 justify-end'>
          {currentPage === totalPages && (
            <Button variant='contained'>Submit</Button>
          )}
        </div>
        <div className='relative'>
          <div className='fixed right-3 overflow-x-hidden overflow-y-auto rounded-sm bg-[#f1f1f1] top-[80px] shadow-xl w-24 gap-5 flex flex-col items-center max-h-[calc(100vh-100px)]'>
            <ArrowDropUp />
            {currentQuiz?.questions.map((_, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrentPage(idx + 1)
                }}
                style={{
                  height: '40px',
                  width: '40px'
                }}
                className={`cursor-pointer ${
                  currentPage === idx + 1
                    ? 'border-sky-900 border-2 bg-[#f1f1f1] text-sky-900 font-semibold shadow-sm'
                    : 'bg-sky-900 text-white'
                } flex items-center p-3 relative z-50 justify-center h-10 w-10 rounded-full`}
              >
                <span>{idx + 1}</span>
              </div>
            ))}
            <ArrowDropDown />
          </div>
        </div>
      </section>

      {open && <Warning setOpen={setOpen} />}
    </main>
  )
}

export default Solution

const Warning = ({ setOpen }) => (
  <div className='fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog '>
    <div className='relative px-4 min-h-screen md:flex md:items-center md:justify-center'>
      <div className=' opacity-25 w-full h-full absolute z-10 inset-0'></div>
      <div className='bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg'>
        <div className='md:flex items-center'>
          <div className='rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto'>
            <i className='bx bx-error text-3xl'>&#9888;</i>
          </div>
          <div className='mt-4 md:mt-0 md:ml-6 text-center md:text-left'>
            <p className='font-bold'>Warning!</p>
            <p className='text-sm text-gray-700 mt-1'>
              Tab Swicthing or Window Minimizing is not allowed One more
              cheating attempt will automatically submit your quiz !
            </p>
          </div>
        </div>
        <div className='text-center md:text-right mt-4 md:flex md:justify-end'>
          <button
            onClick={() => {
              setOpen(false)
            }}
            id='confirm-delete-btn'
            className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)
