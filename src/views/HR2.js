import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import hr from "../utils/hr.json";
import { Link } from 'react-router-dom'

const HR2 = () => {
    return (

        
        <div className="">
            <Helmet>
        <title>Academic Human Resources Jobs</title>
        <meta name="description" content="To be eligible for Academic Human Resources Jobs on academic job board, you will need to have a bachelor’s degree or higher in human resources management or a related field. " />
        <meta name="keywords" content="Academic Human Resources Jobs, Human Resources AcademicJobs" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-2xl ">Academic Human Resources Jobs</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 rounded-2xl ">
        
          <p >Academic Human Resources Jobs concern aspects of human resources management and administration in higher education institutions. Academic Human Resources Jobs are responsible for tasks such as recruitment, performance management, employee relations, training and development, payroll, benefits, and compliance. Academic Human Resources Jobs call for the development and implementation of human resources policies and procedures that align with the academic mission and vision of your institution. </p>
          </div>
          <div className="newLine mb-2"></div>
         
          

          <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Choose Higher Ed Human Resources Jobs</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
          {hr.map(({ Title,Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? ' md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/hr/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
        <div className="newLine"></div>
      </div>
    </div>
        

          


    </div>
          


          
           
     
                <SearchResults q={{ q: "human resources" || 0 }} />
            </div>
        
    );
};

export default HR2;