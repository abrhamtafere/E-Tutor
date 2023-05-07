import Servicecard from "./Servicecard";
import { info } from '../utils/Serviceinfo';

const Service = () => {
  return(
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center py-10">
        <div>
          <h1 className='text-4xl font-bold mfont-Rampart px-20   w-1/2 flex items-center'>Services</h1>
        </div>
        <div className="md:w-1/2 text-justify px-5">
          <h1>Our e-tutor platform offers a range of services to help learners enhance their knowledge and skills in various domains. With our online education and tutoring services, students can access high-quality resources from the comfort of their own homes, allowing them to learn at their own pace and on their schedule.
          </h1>
        </div>
      </div>
      <div className="p-10 flex flex-col md:flex-row justify-evenly items-center">
        {
          info.map((el) => (
            
            <Servicecard title={el.title} description={el.description} link={el.link} img={el.img} />
          ))
        }
      </div>
    </>
    
  );
}

export default Service;