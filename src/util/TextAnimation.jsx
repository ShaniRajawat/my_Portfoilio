import { TypeAnimation } from 'react-type-animation';

const TextAnimation = ({statement1, statement2, statement3}) => {
  return (
    <TypeAnimation
      sequence={[
        statement1,
        2000,
        statement2,
        2000,
        statement3,
        2000,
      ]}
      wrapper="span"
      speed={60}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;