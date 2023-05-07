import Button from './Button';
const Teacher = () => {
  return(
    <div className="flex flex-col md:flex-row py-5 h-screen">
      <div className="w-full h-full">
        <img src="./assets/images/teacher4t.png" alt="placehoder" className='h-full'/>
      </div>
      <div className="bg-black text-white p-5 md:p-20 mtext-center">
        <h1 className='text-3xl font-semibold pb-5' >Become a Remote Teacher</h1>
        <p>thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh </p>
        <br/><br/>
        <p>thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh thehfhfh </p>
        <Button>
          Register here
        </Button>
      </div>
    </div>
  );
}

export default Teacher;