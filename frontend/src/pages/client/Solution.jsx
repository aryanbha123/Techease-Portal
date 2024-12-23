import React, { useState, useEffect } from 'react'
import { IconButton, Button, TextField, Divider } from '@mui/material'
import {
  ArrowDropUp,
  Help,
  Menu,
  Fullscreen,
  ExitToApp,
  ArrowDropDown,
  FullscreenExit
} from '@mui/icons-material'
import axios from 'axios'
import { handleFullScreen } from '../../libs/helpers'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SolutionWarningModal from '../../components/modals/SolutionWarningModal'

const Solution = () => {
  const navigate = useNavigate()
  const [response, setResponse] = useState({})
  const [open, setOpen] = useState(false)
  const [submit, setSubmit] = useState()
  const [currentQuiz, setCurrentQuiz] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const questionsPerPage = 1
  const { id } = useParams()
  const [windowDimensions, setWindowDimensions] = useState([
    window.innerHeight,
    window.innerWidth
  ])

  // changehandeler
  const changehandeler = e => {
    const { name, value } = e.target
    setResponse({ ...response, [name]: value })
  }

  const getQuiz = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/quiz/${id}`
      )
      if (res.data) {
        setCurrentQuiz(res.data)
        const initialResponse = res.data.questions.reduce((acc, q) => {
          acc[q._id] = '' // Default value for each question
          return acc
        }, {})
        setResponse(initialResponse)
      }
    } catch (error) {
      alert('Error Fetching Quiz')
      navigate('/login')
    }
  }

  useEffect(() => {
    getQuiz()

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // setOpen(true)
        // alert('Tab switching is not allowed during the quiz!')
      }
    }
    const handelResize = () => {
      if (
        window.innerHeight < windowDimensions[0] ||
        window.innerWidth < windowDimensions[1]
      ) {
        setOpen(true)
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

  const submitHandler = () => {
    console.log(response)
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
            <Link to={'/user/quiz'} className='text-[#757575]'>
              <ExitToApp color='inherit' />
              <small> Exit</small>
            </Link>
            <Divider flexItem orientation='vertical' />
            <IconButton>
              <Menu />
            </IconButton>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className='flex flex-col h-[calc(100vh-70px)] pl-5 pr-28 py-10'>
        {currentQuestions.map((question, index) => (
          <div key={index} className='flex justify-between gap-5'>
            <div className='mb-8 flex-1 px-4 rounded-lg'>
              <h1 className='text-lg font-semibold mb-6 text-gray-900'>
                Q{(currentPage - 1) * questionsPerPage + index + 1}:{' '}
                {question.question}
              </h1>
              {question.image ? (
                <img
                  src={question.image}
                  alt={`Question ${index + 1}`}
                  className='w-96 h-auto rounded-lg mb-4'
                />
              ) : (
                <img
                  src='https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?resize=300%2C169&ssl=1'
                  className='w-96'
                />
              )}
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
                        className={`${
                          response[question._id] != option._id
                            ? 'bg-white text-gray-900 '
                            : 'bg-sky-800 text-white'
                        }   relative rounded-3xl cursor-pointer items-center px-5 w-full h-[50px] flex gap-1`}
                      >
                        <input
                          required
                          type='radio'
                          name={`${question._id}`}
                          value={`${option?._id}`}
                          className='absolute w-full cursor-pointer h-full opacity-0 z-10'
                          onChange={changehandeler}
                        />
                        <span className='absolute text-inherit z-9 w-full flex items-center py-2 h-[50px]'>
                          {option.text}
                        </span>
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
                    autoFocus
                    value={response[`${question._id}`]}
                    onChange={changehandeler}
                    name={`${question._id}`}
                    fullWidth
                    variant='standard'
                    label='Enter Answer'
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <Divider flexItem orientation='vertical' />

        <div className='flex fixed bottom-7 right-32 justify-end'>
          {currentPage === totalPages ? (
            <div className='flex gap-2'>
              <Button variant='contained' onClick={handlePreviousPage}>
                Prev
              </Button>
              <Button onClick={submitHandler} variant='contained'>
                Submit
              </Button>
            </div>
          ) : (
            <div className='flex gap-2'>
              {currentPage != 1 && (
                <Button variant='contained' onClick={handlePreviousPage}>
                  Prev
                </Button>
              )}
              <Button variant='contained' onClick={handleNextPage}>
                Next
              </Button>
            </div>
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
      </div>

      {open && <SolutionWarningModal setOpen={setOpen} />}
      {submit && <ConfirmModal />}
    </main>
  )
}

export default Solution

const ConfirmModal = () => {
  return (
    <div id='YOUR_ID' className='fixed z-50 inset-0 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>

        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>

        <div
          className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div className='hidden sm:block absolute top-0 right-0 pt-4 pr-4'>
            <button
              type='button'
              data-behavior='cancel'
              className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              <span className='sr-only'>Close</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='sm:flex sm:items-start'>
            <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10'>
              <svg
                className='h-6 w-6 text-blue-600'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                />
              </svg>
            </div>
            <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
              <h3
                className='text-lg leading-6 font-medium text-gray-900'
                id='modal-headline'
              >
                Are you sure you want to submit quiz ?
              </h3>
              <div className='mt-2'>
                <p className='text-sm text-gray-500'>
                  You will not be allowed to change your resposne once submitted
                </p>
              </div>
            </div>
          </div>
          <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
            <button
              type='button'
              data-behavior='commit'
              className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
            >
              Commit
            </button>
            <button
              type='button'
              data-behavior='cancel'
              className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
