import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setJob, setId, setEmployer } from '../store/postsSlice'
import SearchResults from './SearchResults'
import  careerAdviceData from "../utils/careerAdvice.js";

import { Helmet } from "react-helmet";
const CareerAdvice = () => {
  const dispatch = useDispatch()
  let { careerAdvice } = useParams();
  careerAdvice = careerAdvice.replace(/-/g, ' ')
  console.log(careerAdvice)
  console.log(careerAdvice)

  const { Name, Title, Description, Keyword, content: content1, content2 } = careerAdviceData.find(item => item.Name === careerAdvice);
  let content
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className='flex-col gap-2'>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <meta name="keywords" content={Keyword} />
      </Helmet>
      <h1 className='max-h-50 overflow-y  border border-gray-300 p-4 mb-4 rounded-lg shadow-lg'>
        {Title}
      </h1>
      <div className='max-h-50 overflow-y  border border-gray-300 p-4 mb-4 rounded-lg shadow-lg'>
        {content1}
      </div>
      <div className='max-h-50 overflow-y border border-gray-300 p-4 mb-4 rounded-lg shadow-lg' dangerouslySetInnerHTML={{ __html: content2 }} />



    </div>
  )
  return <div className='overflow-y w-full'>{content}</div>
}
export default CareerAdvice
