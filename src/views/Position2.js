import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import position from "../utils/position.json";
import { Link } from 'react-router-dom'

const Position2 = () => {
    return (

        
        <div className="">
            <Helmet>
        <title>Academic Position Jobs</title>
        <meta name="description" content="To be eligible for Academic position Jobs on academic job board, you will need to have a bachelor’s degree or higher in a relevant discipline, as well as relevant work experience. " />
        <meta name="keywords" content="Academic Position Jobs, AcademicJobs Positions" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-2xl ">Academic Position Jobs</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 rounded-2xl ">
        
          <p >Academic position Jobs are positions are many roles and responsibilities in higher education institutions. Academic position Jobs can deliver lectures and tutorials, conducting research and publishing papers, supervising students and staff, developing curriculum and assessment, consulting and collaborating with external partners.  </p>
          </div>
          <div className="newLine mb-2"></div>
         
          

          <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Choose Higher Ed Position Jobs</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full">
          {position.map(({ Title,Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/position/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
        <div className="newLine"></div>
      </div>
    </div>
        

          


    </div>
          


          
           
     
                <SearchResults q={{ q: "position" || 0 }} />
            </div>
        
    );
};

export default Position2;