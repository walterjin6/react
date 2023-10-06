import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';

import { Link } from 'react-router-dom'

const PostJob = () => {
    return (

        
        <div className="">
            <Helmet>
        <title>Post a job</title>
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
         
          

   
    </div>
        
    <div className="max-w-1240 mx-auto px-10">
      <div className="my-40" id="packages">
        <div className="text-center mb-35">
          <h2 className="text-yellow-400 font-bold text-2xl uppercase">Job Posting Packages</h2>
          <p className="text-white">All prices are in USD. Ads are live for up to 60 days, and include the employer logo and ad performance metrics.</p>
        </div>

        <div className="flex flex-wrap justify-center ">
          {/* Single Job Posting */}
          <div className="w-1/5 bg-[#f4a10c] rounded p-4 mb-10">
            <h3 className="font-bold text-2xl text-center text-black">Single Job Posting</h3>
            <p className="text-center">Explore our classic ads.</p>
            <div className="flex flex-col mt-5">
              <div className="flex justify-between mb-5">
                <p className="font-bold">Basic Post</p>
                <div className="flex items-center">
                  <p className="text-xl">$315</p>
                  <a href="/employer-products/?action=buy_product&product_sid=14" className="btn">Buy</a>
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <p className="font-bold">Priority Listing</p>
                <div className="flex items-center">
                  <p className="text-xl">$465</p>
                  <a href="/employer-products/?action=buy_product&product_sid=15" className="btn">Buy</a>
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <p className="font-bold">Social + Priority</p>
                <div className="flex items-center">
                  <p className="text-xl">$615</p>
                  <a href="/employer-products/?action=buy_product&product_sid=16" className="btn">Buy</a>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">HR Jobs</p>
                <div className="flex items-center">
                  <p className="text-xl">$99</p>
                  <a href="/employer-products/?action=buy_product&product_sid=29" className="btn">Buy</a>
                </div>
              </div>
            </div>
            <div className="mt-7.2">
              <p>Package includes:</p>
              <ul className="pl-8">
                <li>30 day single job listing</li>
                <li>Includes free employer account</li>
                <li>Ad performance metrics</li>
                <li>Edit your job posting anytime</li>
              </ul>
            </div>
          </div>

          {/* 5 Job Pack */}
          <div className="w-1/5 bg-[#f4a10c] rounded p-4 mb-10">
            <h3 className="font-bold text-2xl text-center text-black">5 Job Pack</h3>
            <p className="text-center">Post 5 Jobs at anytime.</p>
            <h3 className="bg-[#f4a10c] rounded-full p-3 font-bold text-2xl text-center text-black mb-5">MOST POPULAR</h3>
            <div className="flex flex-col mt-5">
              <div className="flex justify-between mb-5">
                <p className="font-bold">Basic Post</p>
                <div className="flex items-center">
                  <p className="text-xl">$1,418</p>
                  <a href="/employer-products/?action=buy_product&product_sid=17" className="btn">Buy</a>
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <p className="font-bold">Priority Listing</p>
                <div className="flex items-center">
                  <p className="text-xl">$2,168</p>
                  <a href="/employer-products/?action=buy_product&product_sid=29" className="btn">Buy</a>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Social + Priority</p>
                <div className="flex items-center">
                  <p className="text-xl">$2,918</p>
                  <a href="/employer-products/?action=buy_product&product_sid=34" className="btn">Buy</a>
                </div>
              </div>
            </div>
            <div className="mt-7.2">
              <p>Package includes:</p>
              <ul className="pl-8">
                <li>30 day job listings</li>
                <li>Edit your job postings anytime</li>
                <li>Job credits do not expire</li>
                <li>Saving 10%</li>
              </ul>
            </div>
          </div>

          {/* 10 Job Pack */}
          <div className="w-1/5 bg-[#f4a10c] rounded p-4 mb-10">
            <h3 className="font-bold text-2xl text-center text-black">10 Job Pack</h3>
            <p className="text-center">Post 10 jobs at anytime.</p>
            <div className="flex flex-col mt-5">
              <div className="flex justify-between mb-5">
                <p className="font-bold">Basic Post</p>
                <div className="flex items-center">
                  <p className="text-xl">$2,520</p>
                  <a href="/employer-products/?action=buy_product&product_sid=18" className="btn">Buy</a>
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <p className="font-bold">Priority Listing</p>
                <div className="flex items-center">
                  <p className="text-xl">$4,020</p>
                  <a href="/employer-products/?action=buy_product&product_sid=35" className="btn">Buy</a>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Social + Priority</p>
                <div className="flex items-center">
                  <p className="text-xl">$5,520</p>
                  <a href="/employer-products/?action=buy_product&product_sid=36" className="btn">Buy</a>
                </div>
              </div>
            </div>
            <div className="mt-7.2">
              <p>Package includes:</p>
              <ul className="pl-8">
                <li>30 day single job listings</li>
                <li>Edit your job postings anytime</li>
                <li>Job credits do not expire</li>
                <li>Saving 20%</li>
              </ul>
            </div>
          </div>

          {/* Unlimited Packs */}
          <div className="w-1/5 bg-[#f4a10c] rounded p-4 mb-10">
            <h3 className="font-bold text-2xl text-center text-black">Unlimited Packs</h3>
            <p className="text-center">Fairly based on how many employees you have.</p>
            <div className="flex flex-col mt-5">
              <div className="flex justify-between mb-5">
                <p className="font-bold">{'< 2000 Staff'}</p>
                <div className="flex items-center">
                  <p className="text-xl">$14,000</p>
                  <a href="/employer-products/?action=buy_product&product_sid=26" className="btn">Buy</a>
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <p className="font-bold">{'< 4000 Staff'}</p>
                <div className="flex items-center">
                  <p className="text-xl">$19,000</p>
                  <a href="/employer-products/?action=buy_product&product_sid=19" className="btn">Buy</a>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">{'> 4000 Staff'}</p>
                <div className="flex items-center">
                  <p className="text-xl">$26,000</p>
                  <a href="/employer-products/?action=buy_product&product_sid=23" className="btn">Buy</a>
                </div>
              </div>
            </div>
            <div className="mt-7.2">
              <p>Package includes:</p>
              <ul className="pl-8">
                <li>Use anytime within 12 months</li>
                <li>Edit your job postings anytime</li>
                <li>Job credits do not expire</li>
                <li>Saving 70%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-white text-center">
          <p className="mb-0">
            <a href="/pricing/" className="text-yellow-400"><strong></strong></a>
            &nbsp;
          </p>
        </div>
      </div>
    </div>
          


    </div>
          


          
           
     
              
            </div>
        
    );
};

export default PostJob;