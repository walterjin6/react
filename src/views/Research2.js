import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import research from "../utils/research.json";
import { Link } from 'react-router-dom'

const Research2 = () => {
    return (

     
        
        <div className="">
            <Helmet>
        <title>Academic Lecturer Jobs</title>
        <meta name="description" content="Do you have a passion for discovering new knowledge and solving real-world problems? If so, you might be interested in applying for a researcher position at one of the top universities." />
        <meta name="keywords" content="Academic Researcher Jobs. Researcher positions" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-2xl ">Academic Research Jobs</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 rounded-2xl ">
        
          <p >Researcher jobs create original and innovative research in their fields of interest, often as part of a larger project or team. Researchers typically have a PhD or equivalent qualification, as well as relevant skills and experience in data analysis, methodology, and communication. Researcher jobs may also be involved in teaching, supervision, and outreach activities, depending on their role and contract type. </p>
          </div>
          <div className="newLine mb-2"></div>
         
          

          <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Choose Higher Ed Research Jobs</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
          {research.map(({ Title,Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? ' md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/research/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
        <div className="newLine"></div>
      </div>
    </div>
        

          


    </div>
          


          
           
     
                <SearchResults q={{ q: "research" || 0 }} />
            </div>
        
    );
};

export default Research2;