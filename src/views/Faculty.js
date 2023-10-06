import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import category from "../utils/category.json";
import { Link } from 'react-router-dom'

const Faculty = () => {
    return (

        
        <div className="">
            <Helmet>
        <title>Academic Faculty Jobs</title>
        <meta name="description" content="Are you looking for a rewarding career at one of the nation’s leading universities? Do you want to work in a diverse and inclusive environment that fosters academic excellence, Jesuit values, and service to others? If so, you might be interested in exploring the job opportunities at Boston College. " />
        <meta name="keywords" content="Boston College Academic Jobs, AcademicJobs Boston College" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4a10c] text-white rounded-2xl ">Search for a Faculty Position in Academia</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 rounded-2xl ">
        
          <p >Our page lists all the academic faculty from various disciplines and institutions around the world. You can browse by field of study, location, rank, salary, and more.
             You can apply directly to the jobs that interest you or connect with the faculty members to learn more about their work and opportunities. Our page is updated regularly with new and exciting academic jobs. Don’t miss this chance to advance your academic career.  </p>
          </div>
          <div className="newLine mb-2"></div>
         
          

          <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Choose Higher Ed Job faculty / Specialty</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full">
          {category.map(({ Title,Name, break1, isBold }, key) => (
            <li className={`flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/faculty/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
        <div className="newLine"></div>
      </div>
    </div>
        

          


    </div>
          


          
           
     
                <SearchResults q={{ q: "faculty" || 0 }} />
            </div>
        
    );
};

export default Faculty;