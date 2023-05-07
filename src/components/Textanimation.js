import { TypeAnimation} from 'react-type-animation';
const Textanimation = ({text}) => {
  return(
    <>
      <TypeAnimation
      sequence={text}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block', color: '#D1A825' }}
    />
    </>
  )
}

export default Textanimation;