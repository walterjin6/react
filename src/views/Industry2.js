import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import industry from "../utils/industry.json";
import { Link } from 'react-router-dom'

const Industry2 = () => {
    return (

        
        <div className="">
            <Helmet>
        <title>Academic Industry Jobs</title>
        <meta name="description" content="As an academic industry job, you will have the opportunity to work with leading companies and organizations, collaborate with diverse and talented professionals. " />
        <meta name="keywords" content="Academic Industry Jobs, Industry AcademicJobs" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-2xl ">Academic Industry Jobs</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 rounded-2xl ">
        
          <p >Academic Industry Jobs are positions that involve working in industry-related fields such as science, engineering, biotechnology, information technology, health, business, and more. Academic Industry Jobs are tasked with research and development, designing and testing products and services, consulting and advising clients, managing projects and teams, and more. </p>
          </div>
          <div className="newLine mb-2"></div>
         
          

          <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Choose Higher Ed Industry Jobs</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full">
          {industry.map(({ Title,Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/industry/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
        <div className="newLine"></div>
      </div>
    </div>
        

          


    </div>
          


          
           
     
                <SearchResults q={{ q: "industry" || 0 }} />
            </div>
        
    );
};

export default Industry2;