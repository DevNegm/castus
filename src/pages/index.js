import HomeOne from "./HomeOne";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import Help from "./Help";
import Login from "./Login";
import Work from "./Work";
import Error from "./Error";
import Job from "./Job";
import JobDetails from "./JobDetails";



const routes = [
  { path: '/', component: <About />},
  { path: '/about', component: <About />},
  { path: '/faq', component: <Faq />},
  { path: '/help', component: <Help />},
  { path: '/login', component: <Login />},
  { path: '/work', component: <Work />},
  { path: '/contact', component: <Contact />},
  { path: '/job', component: <Job />},
  { path: '/job-details', component: <JobDetails />},
  { path: '*', component: <Error />},



]

export default routes;