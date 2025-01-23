import { Link } from 'react-router-dom'


function Navbar({ aboutRef, educationRef, skillsRef, projectsRef, contactmeRef }) {
  const aboutSection = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const educationSection = () => {
    educationRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const skillsSection = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const projectsSection = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const contactmeSection = () => {
    contactmeRef.current.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 ">
        <div className="flex flex-shrink-0 items-center">
          <Link
            to="/"
            className=" text-[#16f2b3] text-xl font-semibold md:text-3xl">
            BIKASH KUMAR CHOUDHURY
          </Link>
        </div>

        <ul className="hidden mt-4 md:flex h-screen max-h-0 w-full items-start text-sm md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0" id="navbar-default">
          <li>
            <Link onClick={aboutSection} className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link onClick={educationSection} className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link onClick={skillsSection} className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link onClick={projectsSection} className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
          <li>
            <Link onClick={contactmeSection} className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#contact-me"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div></Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;