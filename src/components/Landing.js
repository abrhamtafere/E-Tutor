import Textanimation from "./Textanimation";
import img5 from "../assets/images/img0.jfif";
import Button from './Button';

const Landing = ( )=> {
  const style = "bg-[#AF8910]";
  const text = ['Web Development', 2000,'Mobile App Development', 2000, 'Ai Trainings', 2000, 'Short Trainings', 2000, 'Free Books', 2000,'Online Education', 3000];

  return(
    <div className='text-white w-full h-screen flex flex-col lg:flex-row justify-between relative'>
      <div className="text-start ">
       <h1 className='text-5xl text-white font-bold px-10 my-5 md:px-32'>E-Tutor <br/>Education<br/>
         <Textanimation text={text}/>
       </h1>
       <Button style={style}>Get Started Today</Button>
      </div>
      <div className="p-10 ">
        <img src={img5} alt='placeholder' className="img-fluid"/>
        <p className="text-2xl text-center text-slime-200 hidden md:block">
          Whether you are looking to learn<br/> new skills or enhance your existing<br/>  ones, our e-tutor platform has<br/> everything  you need to succeed.<br/> Join us today and  unlock your full<br/> potential !</p>
          <p className="text-2xl text-center text-slime-200 block md:hidden">
            Join us today and  unlock your full potential !</p>
      </div>
      
    </div>
  );
}

export default Landing;