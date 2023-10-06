import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';

const TuftsUniversity = () => {
    return (

        
        <div className="">
            <Helmet>
        <title>Tufts University Jobs</title>
        <meta name="description" content="If you have any questions about the application process or the job requirements, you can contact the Office of Human Resources at hr@tufts.edu or 617-627-3272. You can also visit the Work at Tufts website4 for more information about the benefits, policies, and events related to working at Tufts University. " />
        <meta name="keywords" content="Tufts University Jobs, AcademicJobs Tufts University" />
      </Helmet>
            <div className="relative">
            
                <div
                    className="bg-cover bg-center bg-repeat"
                    
                >
                    <div className="max-w-screen-xl mx-auto py-12 px-6 text-gray-700">
                        <h1 className="text-orange-500 text-2xl font-semibold">Tufts University Jobs</h1>
                        <p>
                            Tufts University is a private research university located in Medford, Massachusetts. It has more than 11,000 undergraduate and graduate students, and offers more than 150 majors and minors in nine colleges and schools. Tufts University is also known for its experiential learning model, which integrates classroom instruction with co-op, internships, research, service, and global opportunities. Tufts University is classified as an R1 research university by the Carnegie Classification of Institutions of Higher Education1, and has produced many prestigious scholars and awards1. It also has a strong commitment to social justice and community engagement, inspired by its urban and global mission2. Tufts University’s athletic teams are the Jumbos, and they compete in the NCAA Division III New England Small College Athletic Conference in various sports, including basketball, hockey, soccer, and lacrosse. The men’s lacrosse team has won three national championships1. </p>


                    </div>
                </div>
                <SearchResults q={{ q:"Tufts University jobs" }} /> 
            </div>
        </div>
    );
};

export default TuftsUniversity;