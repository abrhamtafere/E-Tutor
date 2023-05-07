import { popular } from '../utils/Serviceinfo';
import Servicecard from './Servicecard';
const Popular = () => {
  return(
    <>
      <div className="w-full bg-white p-10">
        <h1 className="text-4xl font-dmserif font-bold ">Popular Courses</h1>
        <p className="text-[#D1A825] font-bold ">E-Tutor Education</p>
      </div>
      <div className="">
        <div className="p-10 flex flex-col md:flex-row justify-evenly items-center">
          {
            popular.map((el) => (
              
              <Servicecard title={el.title} description={el.description} link={el.link} img={el.img} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Popular;