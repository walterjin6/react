import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setJob, setId, setEmployer } from '../store/postsSlice'
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import {
  useGetEmployerQuery,
} from '../store/apiSlice'
import SearchResults from './SearchResults'
const Employer = () => {
  const [viewJob, setViewJob] = useState(false)
  const quillModules = {
    toolbar: false,
  };
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log(id)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetEmployerQuery(id)
  let content
  if (isLoading) {
    content = (
      <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="flex items-center w-full space-x-2">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[400px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[440px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[360px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  } else if (isSuccess) {
    console.log(data)
    const { logo, company_name, website, company_description, location } = data
    console.log(company_description)
    content = (
      <div className='flex-col gap-4'>
        <article className={`media ${company_name == 'Queensland University of Technology (QUT)' ? 'bg-blue-950' : 'bg-slate-500'} border border-gray-300 p-4 mb-4 rounded-lg shadow-lg`}
        >
          <div class="flex justify-start">
            <div className="w-[8rem] h-[8rem] mr-4 ">
              <img src={logo} alt={company_name} className="w-full h-full object-contain rounded-md" />
            </div>
            <div class="flex flex-col gap-6">
              <h1 class="text-3xl font-bold text-white">{company_name}</h1>
              <div class="flex  gap-6">
                <div class="text-white flex items-center justify-start gap-2">
                  <MdLocationPin />
                  {location}
                </div>
                {
                  website &&
                  <div class="text-white flex items-center justify-start gap-2">
                    <AiOutlineGlobal />
                    {website}
                  </div>}
              </div>
            </div>
          </div>
        </article>
        <div class="flex justify-start gap-20 mt-6 mb-2">
          <div className={` cursor-pointer text-xl text-gray-500 font-bold   ${viewJob || 'underline'}`}
            onClick={() => { setViewJob(false) }}
          >Institution Description</div>
          <div className={` cursor-pointer text-xl text-gray-500 font-bold   ${viewJob && 'underline'}`}
            onClick={() => { setViewJob(true) }}
          >View Jobs</div>
        </div>
        <div className=''>
          {
            viewJob
              ?
              <SearchResults q={{ employer_id: id || 0 }} />
              :
              <div className={`max-h-50 overflow-y  border border-gray-300 p-4 mb-4 rounded-lg shadow-lg  ${company_name == 'Queensland University of Technology (QUT)' && 'bg-blue-950'}`}>
                <div className={`wrapper  ${company_name == 'Queensland University of Technology (QUT)' && 'text-white'}`}>
                  <div dangerouslySetInnerHTML={{ __html:  company_description  }} />
                  {company_name === 'Queensland University of Technology (QUT)' && (
                    <style>
                      {`
        .wrapper span {
          color: white !important;
        }
        .wrapper a {
          color: yellow !important;
        }
      `}
                    </style>
                  )}
                </div>
              </div>
          }
        </div>
      </div>
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default Employer
