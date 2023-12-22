import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web series</h2>
      <User name={'Kranti Jangid (Function)'} />
      <UserClass name={'Kranti Jangid (Class)'} />
    </div>
  );
};

export default About;
