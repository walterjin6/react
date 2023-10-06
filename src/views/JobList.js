import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setJob, setId, setStatusId } from '../store/postsSlice'
import Job from './Job'
import Modal from '../components/Modal'
import JobDetail from './JobDetail'
const JobList = ({ data, nextPage }) => {
  console.log('JobList')
  const dispatch = useDispatch()
  let content
  const [isOpen, setIsOpen] = useState(false)
  console.log(data)
  content = data.map((job, index) => {
    const { id } = job;
    //console.log(job)
    return (
      <div
        className={`font-bold ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
        onClick={() => {
          dispatch(setJob(job))
          if (window.innerWidth <= 768) {
            setIsOpen(true)
          }
        }}
        key={index}
      >
        <Job job={job} />
      </div>
    );
  });
  return <div className='overflow-y w-full'>
    {content}
    < button type="button" className="load-more bg-white py-2 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-100"
      onClick={() => nextPage()}
    >
      Load more
    </button >
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false)
      }}
    >
      <button onClick={() => {
        setIsOpen(false)
      }}>Close</button>
      <JobDetail />
    </Modal>
  </div>
}
export default JobList
