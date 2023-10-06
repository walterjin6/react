import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home"
import TermsConditions from "./views/TermsConditions"
import JobSearch from "./views/JobSearch"
import AboutAJ from "./views/AboutAJ"
import Employer from "./views/Employer"
import Category from "./views/Category"
import Faculty from "./views/Faculty"
import Position from "./views/Position"
import Position2 from "./views/Position2"
import HR from "./views/HR"
import HR2 from "./views/HR2"
import Lecturer from "./views/Lecturer"
import Lecturer2 from "./views/Lecturer2"
import Industry from "./views/Industry"
import Industry2 from "./views/Industry2"
import Executive from "./views/Executive"
import Executive2 from "./views/Executive2"
import Admin from "./views/Admin"
import Admin2 from "./views/Admin2"
import CareerAdvice from "./views/CareerAdvice"
import Careeradvice2 from "./views/Careeradvice2"
import Student from "./views/Student"
import Students from "./views/Students"
import PostJob from "./views/PostJob"

import Rankings from "./views/Rankings"
import FAQ from "./views/FAQ"
import ContactUs from "./views/ContactUs"
import DiversayStatement from "./views/DiversayStatement"
import FindEmployers from "./views/FindEmployers"
import Australia from "./views/Australia"
import India from "./views/India"
import Asia from "./views/Asia"
import Africa from "./views/Africa"
import Europe from "./views/Europe"
import SouthAmerica from "./views/SouthAmerica"
import MiddleEast from "./views/MiddleEast"
import Canada from "./views/Canada"
import UK from "./views/UK"
import NewZealand from "./views/NewZealand"
import USA from "./views/USA"
import SiteMap from "./views/SiteMap"
import BostonCollege from "./views/BostonCollege"
import NortheasternUniversity from "./views/NortheasternUniversity"
import MassachusettsAmherst from "./views/MassachusettsAmherst"
import TuftsUniversity from "./views/TuftsUniversity"
import BostonUniversity from "./views/BostonUniversity"
import QUT from "./views/QUT"
import Layout from './components/Layout'
import JobDetailPage from "./views/JobDetailPage";
//import Region from "./views/Region"
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route exact path='/Global' element={<Navigate to='/' replace />} />
          <Route path='/' index element={<Home />} />
          <Route exact path='/home/' element={<Home />} />
          <Route path='/term-of-use/' element={<TermsConditions />} />
          <Route path='/find-jobs/' element={<JobSearch />} />
          <Route path='/find-jobs/:name?' element={<JobSearch />} />
          <Route path='/Employer/:name/:id?' element={<Employer />} />
          <Route path='/faculty/' element={<Faculty />} />
          <Route exact path='/QUT/' element={<QUT />} />

          <Route path='/job/:name/:id?' element={<JobDetailPage />} />
          <Route path='/faculty/:category?' element={<Category />} />
          <Route path='/position/:position?' element={<Position />} />
          <Route path='/position/' element={<Position2 />} />
          <Route path='/hr/:hr?' element={<HR />} />
          <Route path='/hr/' element={<HR2 />} />
          <Route path='/lecturer/:lecturer?' element={<Lecturer />} />
          <Route path='/lecturer/' element={<Lecturer2 />} />
          <Route path='/industry/:industry?' element={<Industry />} />
          <Route path='/industry/' element={<Industry2 />} />
          <Route path='/executive/:executive?' element={<Executive />} />
          <Route path='/executive/' element={<Executive2 />} />
          <Route path='/admin/:admin?' element={<Admin />} />
          <Route path='/admin/' element={<Admin2 />} />
          <Route path='/career-advice/:careerAdvice?' element={<CareerAdvice />} />
          <Route path='/academic-happiness/' element={<Careeradvice2 />} />
          <Route path='/student/:student?' element={<Student />} />
          <Route path='/student/' element={<Students />} />
          <Route path='/post-job/' element={<PostJob />} />
          <Route path='/the-university-rankings/' element={<Rankings />} />
          <Route path='/about-academic-jobs/' element={<AboutAJ />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/find-jobs/' element={<JobSearch />} />
          <Route path='/diversity-statement/' element={<DiversayStatement />} />
          <Route path='/contact-us/' element={<ContactUs />} />
          <Route path='/top-universities/' element={<FindEmployers />} />
          <Route exact path='/sitemap/' element={<SiteMap />} />

          <Route exact path='/company/3604/boston-college/' element={<BostonCollege />} />
          <Route exact path='/company/3285/northeastern-university/' element={<NortheasternUniversity />} />
          <Route exact path='/company/3396/university-of-massachusetts-amherst/' element={<MassachusettsAmherst />} />
          <Route exact path='/company/3460/tufts-university/' element={<TuftsUniversity />} />
          <Route exact path='/company/3190/boston-university/' element={<BostonUniversity />} />
          <Route exact path='/queensland-university-of-technology/' element={<QUT />} />



          <Route exact path='/Australia/' element={<Australia />} />
                  <Route exact path='/USA/' element={<USA />} />
          <Route exact path='/Asia/' element={<Asia />} />
          <Route exact path='/Africa/' element={<Africa />} />
          <Route exact path='/India/' element={<India />} />
          <Route exact path='/UK/' element={<UK />} />
          <Route exact path='/New-Zealand/' element={<NewZealand />} />
          <Route exact path='/South-America/' element={<SouthAmerica />} />
          <Route exact path='/Canada/' element={<Canada />} />
          <Route exact path='/Europe/' element={<Europe />} />
          <Route exact path='/Middle-East/' element={<MiddleEast />} />
          {/* <Route path='/:name' element={<Region />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter