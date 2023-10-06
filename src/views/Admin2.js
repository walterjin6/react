import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import admin from "../utils/admin.json";
import { Link } from 'react-router-dom'

const Admin2 = () => {
    return (

        
        <div className="">
            <Helmet>
        <title>Academic Admin and Support Jobs</title>
        <meta name="description" content="As an academic admin and support job, you will have the opportunity to work with diverse and talented people, contribute to the academic excellence and innovation of your institution. " />
        <meta name="keywords" content="Academic Admin and Support Jobs, Admin and Support AcademicJobs" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-2xl ">Academic Admin and Support Jobs</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 rounded-2xl ">
        
          <p >Academic Admin and support Jobs will need to have a diploma or higher qualification in business administration or a related field, as well as relevant work experience in academic administration and support. Academic Admin and support Jobs will also need to have excellent communication, interpersonal, organizational, and problem-solving skills. Academic Admin and support Jobs need to be familiar with the policies and procedures of the higher education sector, as well as the applicable laws and regulations.  </p>
          </div>
          <div className="newLine mb-2"></div>
         
          

          <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Choose Higher Ed Job faculty / Specialty</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full">
          {admin.map(({ Title,Name, break1, isBold }, key) => (
            <li className={`flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/admin/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
        <div className="newLine"></div>
      </div>
    </div>
        

          


    </div>
          


          
           
     
                <SearchResults q={{ q: "admin" || 0 }} />
            </div>
        
    );
};

export default Admin2;