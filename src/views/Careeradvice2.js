import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

import careerAdvice from "../utils/careerAdvice";

const Careeradvice2 = () => {
  return (


    <div className="">
      <Helmet>
        <title>Academic Career Advice</title>
        <meta name="description" content="Are you looking for a rewarding career at one of the nation’s leading universities? Do you want to work in a diverse and inclusive environment that fosters academic excellence, Jesuit values, and service to others? If so, you might be interested in exploring the job opportunities at Boston College. " />
        <meta name="keywords" content="Boston College Academic Jobs, AcademicJobs Boston College" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#f4ac10] text-white rounded-2xl ">ACADEMIC JOBS
          CAREER ADVICE</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>


        <div className="py-4 px-7 bg-[#f4ac10] text-white rounded-2xl ">

          <p >Are you looking for career advice, tips, and insights from academics and researchers? Check out these academic jobs blogs and learn from the experts in your field. Whether you are a PhD student, a postdoc, or a professor, you will find valuable information and inspiration to advance your academic career. Read these blogs now and discover the best opportunities and practices for academic success.</p>
        </div>


        <div className="bg-white flex flex-col  ">
       

        <ul className=" mb-8 text-left grid grid-cols-3 gap-2 py-10 px-1 h-auto w-full ">
        
            
            <li className="text-1xl font-bold py-1 px-7 max-h-50 overflow-y  text-[#f4ac10] border border-gray-300 p-4 mb-4 rounded-lg shadow-lg "><Link to="/career-advice/how-to-land-your-dream-college-job-a-step-by-step-guide/">  <img
        src="https://iloveacademicjobs.com/files/pictures/Dream_Job_2.PNG"
        alt="How to Land Your Dream College Job: A Step-by-Step Guide"
        className=""
      /> How to Land Your Dream College Job: A Step-by-Step Guide</Link></li>

<li className="text-1xl font-bold py-1 px-7 max-h-50 overflow-y text-[#f4ac10] border border-gray-300 p-4 mb-4 rounded-lg shadow-lg" ><Link to="/career-advice/exploring-the-global-landscape-of-academic-jobs-opportunities-and-challenges/">  <img
        src="https://iloveacademicjobs.com/files/pictures/Global_Opportunities_2.PNG"
        alt="Exploring the Global Landscape of Academic Jobs: Opportunities and Challenges"
        className=""
      /> Exploring the Global Landscape of Academic Jobs: Opportunities and Challenges</Link></li>

<li className="text-1xl font-bold py-1 px-7  max-h-50 overflow-y text-[#f4ac10] border border-gray-300 p-4 mb-4 rounded-lg shadow-lg  "><Link to="/career-advice/exploring-the-benefits-of-academic-jobs-online-why-virtual-hiring-is-on-the-rise/">  <img
        src="https://iloveacademicjobs.com/files/pictures/Virtual_Hiring.PNG"
        alt="Exploring the Benefits of Academic Jobs Online: Why Virtual Hiring is on the Rise"
        className=""
      /> Exploring the Benefits of Academic Jobs Online: Why Virtual Hiring is on the Rise</Link></li>



              </ul>
             

              </div>

      </div>

     

    </div>

  );
};

export default Careeradvice2;