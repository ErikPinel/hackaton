
import './home.css'
import SimpleAccordion from './Accordion'


function HomePage() {
  

    return (
        /// navbar
      <div className="Homepage">
        <h1>
            select hospital department
        </h1>

       <div>
            <SimpleAccordion className='accordion-container' ></SimpleAccordion>
            </div>


        <span className='departmentsContainer'>cardiology</span>
        <span className='departmentsContainer'>oncology</span>
        <span className='departmentsContainer'>haematology</span>


      </div>
    );
  }
  
  export default HomePage;
  