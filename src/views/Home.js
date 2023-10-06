import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import category from "../utils/category.json";
import position from "../utils/position.json";
import hr from "../utils/hr.json";
import research from "../utils/research.json";
import lecturer from "../utils/lecturer.json";
import industry from "../utils/industry.json";
import executive from "../utils/executive.json";
import admin from "../utils/admin.json";
import careerAdvice from "../utils/careerAdvice";
import { Helmet } from "react-helmet";
import DispatchLink from '../components/DispatchLink'
const Home = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  const region = useSelector((state) => state.posts.region)
  console.log(region)
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (region !== "Global") {
      //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
      //dispatch(setRegion(countryMappings[country.toLowerCase()]))
      //dispatch(setSearchJobCriteria(a))
      //navigate(`/find-jobs`)
      navigate("/find-jobs", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[region].searchLocation } });
    } else {
      const fetchLocation1 = async () => {
        try {
          const response = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66");
          const result = await response.json();
          return result.country.name
        } catch (error) {
          return ""
        }
      }
      fetchLocation1()
        .then(country => {
          //sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          //alert(countryMappings[country.toLowerCase()])
          //alert(countryMappings[country.toLowerCase()])
          dispatch(setRegion(countryMappings[country.toLowerCase()]))
          //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          //alert(region)
          //dispatch(setSearchJobCriteria(a)) 
          //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
          navigate("/find-jobs", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[countryMappings[country.toLowerCase()]].searchLocation } });
          //navigate(`/find-jobs/${countryMappings1[sessionStorage.getItem("location")].searchLocation}`);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  };
  return (
    <div className='px-7'>
      <div className="bg-white min-h-screen flex flex-col items-center  justify-center ">
        <div className='h-[40vh] flex flex-col items-end justify-end'>
          <Helmet>
            <title>Academic Jobs - The Number 1 job board for Higher Ed jobs, Top University Recruitment & College Jobs.</title>
            <meta name="description" content="Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily." />
            <meta name="keywords" content="Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs" />
          </Helmet>
          <img
            src="https://academicjobs.s3.amazonaws.com/img/_misc/academic-jobs-logo.png"
            alt="Google Logo"
            className="pl-4 w-[20rem] mb-[1rem] "
          />
        </div>
        <div className='w-full md:w-3/5 h-[60vh] flex flex-col items-top '>
          <form className=' flex flex-col gap-1 items-center md:items-end w-full' onSubmit={handleFormSubmit}>
            <div className="flex flex-col  gap-2 md:flex-row md:gap-0 mx-18 w-full  mt-5 md:border rounded-lg p-2 md:shadow-md ">
              <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none border rounded-lg shadow-md md:border-none md:shadow-none"
                placeholder="Jobs Search"
                ref={keyWordRef}
              />
              <button className="px-4 py-2 bg-[#f4a10c] text-white rounded-md hover:bg-orange-600"
                type="submit"
              >
                Search In Your Country
              </button>
            </div>
            <h2 className='underline text-[#f4a10c]'
              onClick={() => {
                const a = {}
                if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
                dispatch(setSearchJobCriteria(a))
                dispatch(setRegion('Global'))
                navigate(`/find-jobs`)
              }}
            >Or Search Globally</h2>
          </form >
        </div>
      </div>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20">ALL THE BEST UNIVERSITY JOBS</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className=" px-7 ">Find the best academic positions and administrative jobs in higher ed. Search for academic jobs, college careers and faculty positions online. </p>
          <p className=" px-7">Seek and apply for lecturer, research, uni admin and senior academic jobs in every university in your country or globally. Whether you are a professor, researcher, lecturer, or administrator, you can find the latest opportunities in higher education on academic jobs online.</p>
          <p className=" px-7"></p>
        </div>
      </div>
      <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">Top Universities To Work For</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            
          <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/employer/queensland-university-of-technology/3786/" className='text-[#003463] font-bold'>Queensland University of Technology (QUT)</Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/QUT-lecturing/" >QUT Lecturing Jobs</Link></li>
                  <li><Link to="/find-jobs/QUT-research/" >QUT Research Jobs</Link></li>
                  <li><Link to="/find-jobs/QUT-professor/" >QUT Professorial Jobs</Link></li>
                  <li><Link to="/find-jobs/QUT-university-Executive/" >QUT Executive</Link></li>
                  <li><Link to="/find-jobs/QUT-university-Administration/" >QUT Administration</Link></li>
                  <li><Link to="/find-jobs/QUT-university-Human-Resources/" >QUT Human Resources</Link></li>
                </ul>
              </ul>
            </div>
            
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/employer/bond-university/3785/" className='text-[#f4a10c] font-bold'>Bond University</Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/bond-university-lecturing/" >Bond Lecturing Jobs</Link></li>
                  <li><Link to="/find-jobs/bond-university-research/" >Bond Research Jobs</Link></li>
                  <li><Link to="/find-jobs/bond-university-professor/" >Bond Professorial Jobs</Link></li>
                  <li><Link to="/find-jobs/bond-university-Executive/" >Bond Executive</Link></li>
                  <li><Link to="/find-jobs/bond-university-Administration/" >Bond Administration</Link></li>
                  <li><Link to="/find-jobs/bond-university-Human-Resources/" >Bond Human Resources</Link></li>
                </ul>
              </ul>
            </div>
           
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="https://www.academicjobs.com/employer/university-of-california-san-diego/3149/" className='text-[#f4a10c] font-bold'>University of California San Diego</Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/UCSD-lecturing/" >UCSD Lecturing Jobs</Link></li>
                  <li><Link to="/find-jobs/UCSD-research/" >UCSD Research Jobs</Link></li>
                  <li><Link to="/find-jobs/UCSD-professor/" >UCSD Professorial Jobs</Link></li>
                  <li><Link to="/find-jobs/UCSD-university-Executive/" >UCSD Executive</Link></li>
                  <li><Link to="/find-jobs/UCSD-university-Administration/" >UCSD Administration</Link></li>
                  <li><Link to="/find-jobs/UCSD-university-Human-Resources/" >UCSD Human Resources</Link></li>
                </ul>
              </ul>
            </div>

            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/employer/harvard-university/3100/" className='text-[#f4a10c] font-bold'>Harvard University</Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/harvard-university-lecturing/" >Harvard Lecturing Jobs</Link></li>
                  <li><Link to="/find-jobs/harvard-university-research/" >Harvard Research Jobs</Link></li>
                  <li><Link to="/find-jobs/harvard-university-professor/" >Harvard Professorial Jobs</Link></li>
                  <li><Link to="/find-jobs/harvard-university-Executive/" >Harvard Executive</Link></li>
                  <li><Link to="/find-jobs/harvard-university-Administration/" >Harvard Administration</Link></li>
                  <li><Link to="/find-jobs/harvard-university-Human-Resources/" >Harvard Human Resources</Link></li>
                </ul>
              </ul>
            </div>

          </div>
        </div>
      </div>


      <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 "><Link to="/the-university-rankings/" >The University Rankings/ Top Academic Careers</Link></h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
            <div className="column">
              <ul className="">
               
                <ul className="pb-4">
                  <li><Link to="/employer/harvard-university/3100/" >	Harvard University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/stanford-university/3101/" >	Stanford University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/university-of-cambridge/12635/" >	University of Cambridge</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/massachusetts-institute-of-technology/3103/" >MIT</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/university-of-california-berkeley/3105/" >	University of California, Berkeley</Link></li>
              
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
            
                <ul className="innerUL">
                  <li><Link to="https://www.academicjobs.com/employer/princeton-university/3104/" >	Princeton University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/university-of-oxford/3099/" >	University of Oxford</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/columbia-university/3127/" >	Columbia University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/caltech/3128/" >Caltech</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/University-of-Chicago/3126/" >	University of Chicago</Link></li>
               
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
             
                <ul className="innerUL">
                  <li><Link to="https://www.academicjobs.com/employer/yale-university/3125/" >	Yale University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/Cornell-University/3138/" >Cornell University</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/university-of-california-los-angeles/3136/" >UCLA</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/university-of-pennsylvania/3131/" >UPenn</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/johns-hopkins-university/3130/" >Johns Hopkins University (JHU)</Link></li>
                
                </ul>
              </ul>
            </div>

            <div className="column">
              <ul className="">
             
                <ul className="innerUL">
                  <li><Link to="https://www.academicjobs.com/employer/university-college-london/12527/" >University College London (UCL)</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/eth-zurich/3132/" >ETH Zurich</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/university-of-tokyo/3155/" >The University of Tokyo (UTokyo)</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/new-york-university-nyu/3144/" >New York University (NYU)</Link></li>
                  <li><Link to="https://www.academicjobs.com/employer/duke-university/3139/" >	Duke University (Duke)</Link></li>
                
                </ul>
              </ul>
            </div>

          </div>
        </div>
      </div>
     

      <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 "><Link to="/lecturer/" >Find Lecturer Jobs</Link></h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
          {lecturer.map(({ Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/lecturer/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 "><Link to="/research/" >Find Research Jobs</Link></h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
          {research.map(({ Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/research/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 "><Link to="/position/" >Find Academic Positions / Roles</Link></h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
          {position.map(({ Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/position/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 "><Link to="/executive/">Find Academic Executive jobs</Link></h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
          {executive.map(({ Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/executive/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 "><Link to="/admin/">Find Academic Admin/Support jobs</Link></h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
          {admin.map(({ Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/admin/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 "><Link to="/hr/">Find Academic HR jobs</Link></h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
          {hr.map(({ Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/hr/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 "><Link to="/industry/">Find Academic Industry jobs</Link></h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
          {industry.map(({ Name, break1, isBold }, key) => (
            <li className={`pb-2 flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/industry/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
      </div>


      


      <div className="bg-white flex flex-col  ">
        <h2 className="text-1xl font-bold py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 "><Link to="/faculty/">Choose Higher Ed Job faculty / Specialty</Link></h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
          {category.map(({ Name, break1, isBold }, key) => (
            <li className={` flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#f4a10c]' : ''}`} key={key}>
              <Link to={`/faculty/${Name.replace(/\s+/g, '-')}/`}>{Name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Home