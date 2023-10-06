import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setJob, setId, setEmployer } from '../store/postsSlice'
import SearchResults from './SearchResults'
import categoryData from "../utils/category.json";
import { Helmet } from "react-helmet";
const Category = () => {
  const dispatch = useDispatch()
  let { category } = useParams();
  category = category.replace(/-/g, ' ')
  console.log(category)
  console.log(category)

  const { Name, Title, Description , Keyword, content: content1 } = categoryData.find(item => item.Name === category);
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
      <SearchResults q={{ q: Name }} />
    </div>
  )
  return <div className='overflow-y w-full'>{content}</div>
}
export default Category
