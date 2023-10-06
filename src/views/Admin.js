import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setJob, setId, setEmployer } from '../store/postsSlice'
import SearchResults from './SearchResults'
import adminData from "../utils/admin.json";
import { Helmet } from "react-helmet";
const Admin = () => {
  const dispatch = useDispatch()
  let { admin } = useParams();
  admin = admin.replace(/-/g, ' ')
  console.log(admin)
  console.log(admin)

  const { Name, Title, Description , Keyword, content: content1 } = adminData.find(item => item.Name === admin);
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
export default Admin
