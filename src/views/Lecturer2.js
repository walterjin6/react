import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import lecturer from "../utils/lecturer.json";
import { Link } from 'react-router-dom'

const Lecturer2 = () => {
    return (

      
        
        <div className="">
            <Helmet>
        <title>Academic Lecturer Jobs</title>
        <meta name="description" content="To find out more about the academic lecturer jobs available in higher education, browse our list of current lecturer job vacancies on this page. " />
        <meta name="keywords" content="Academic Lecturer Jobs. Lecturer positions" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-2xl ">Academic Lecturer Jobs</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 rounded-2xl ">
        
          <p >With lecturer jobs you will have the opportunity to work with some of the best minds in your discipline, collaborate with national and international partners, and access world-class facilities and resources. Lecturer jobs also have competitive salaries, generous benefits, and a supportive work environments. </p>
          </div>
          <div className="newLine mb-2"></div>
         
          

          <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Choose Higher Ed Lecturer Jobs</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
          {lecturer.map(({ Title,Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? ' md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/lecturer/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
        <div className="newLine"></div>
      </div>
    </div>
        

          


    </div>
          


          
           
     
                <SearchResults q={{ q: "lecturer" || 0 }} />
            </div>
        
    );
};

export default Lecturer2;