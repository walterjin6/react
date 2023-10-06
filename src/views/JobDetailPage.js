import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

import {
  useGetJobByIdQuery,
} from '../store/apiSlice'
const JobDetail = () => {

  const { id } = useParams();
  //console.log(employer)
  const {
    data: job,
    isLoading,
    isSuccess,
  } = useGetJobByIdQuery(id)
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
   
    const { id, company_name, logo, title, location, activation_date, description, how_to_apply, featured } = job
    // console.log(logo)
    content = (
      <div className='bg-white'>
        <div className="flex items-center p-4">
          <div className="w-1/4 pr-4">
            <img className="w-full" src={logo || ''} alt={company_name} />
          </div>
          <div className="w-3/4">
            <h1 className="text-2xl font-bold mb-2">
              {title}
            </h1>
            <div className="mb-4">
              <Link className="text-blue-500" to={`/employer/id/${id}`}>{location}</Link>
            </div>
            <div className="flex items-center">
              <a className="px-4 py-2 bg-[#f4a10c] text-white font-bold rounded-full" href={how_to_apply} data-toggle="modal" data-target="#apply-modal" data-href={how_to_apply} data-title="Apply to Specialist Teacher at Townsville Catholic Education Office" rel="nofollow">
                Apply Now
              </a>
              <div className="ml-4">
                <a className="text-blue-500" data-toggle="modal" data-target="#apply-modal" data-id="60078" title="Save" data-href="/saved-jobs/?id=60078&amp;action=save&amp;reload=✓" rel="nofollow" href="#"></a>
                <a tabIndex="-1" className="text-blue-500" role="button" rel="nofollow" aria-label="Share this job" data-original-title="" title=""></a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-6 bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-lg" '>
<span>{location}</span> <span>{new Date(activation_date).toLocaleDateString()}</span>
          {featured ? <span className="inline-block bg-[#f4a10c] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Featured</span> : ''}
        </div>
        <article className="wrapper media bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-lg" data-id="59972"
        >
          {/* <div className='wrapper'> */}
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </article>
        {/* <ReactQuill value={description} modules={quillModules} /> */}
      </div >
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default JobDetail
