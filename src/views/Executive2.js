import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import executive from "../utils/executive.json";
import { Link } from 'react-router-dom'

const Executive2 = () => {
    return (

        
        <div className="">
            <Helmet>
        <title>Academic Executive Jobs</title>
        <meta name="description" content="As an academic executive, you will have the opportunity to work with talented and dedicated staff, students, alumni, and stakeholders, contribute to the vision and mission. " />
        <meta name="keywords" content="Academic Executive Jobs, Executive AcademicJobs" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-2xl ">Academic Executive Jobs</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 rounded-2xl ">
        
          <p >Academic Executive Jobs contain leadership, management, and direction for a specific academic unit or function within a higher education institution. Academic Executive Jobs set the goals and objectives of the unit or function, overseeing the academic programs and activities, ensuring the quality and standards of teaching and research, supporting and developing the staff and students, and managing the financial and human resources.  </p>
          </div>
          <div className="newLine mb-2"></div>
         
          

          <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Choose Higher Ed Executive Jobs</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full">
          {executive.map(({ Title,Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/executive/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
        <div className="newLine"></div>
      </div>
    </div>
        

          


    </div>
          


          
           
     
                <SearchResults q={{ q: "executive" || 0 }} />
            </div>
        
    );
};

export default Executive2;