import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-[#0a192f] w-full min-h-screen text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="text-right pb-8 pl-4">
                        <p className="text-4xl text-bold inline border-b-4 border-orange-300">About Me</p>
                    </div> 
                    <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                        <div>
                            <p className="text-3xl font-bold">Hello there!  I'm Kawser, a passionate frontend developer with a fresh perspective and a hunger to learn and grow in the ever-evolving world of web development.</p>
                        </div>
                        <div>
                            <p className="text-4xl text-bold text-center border-b-4 border-orange-300 gap-8 pb-3">My Journey So Far</p>
                            <p className="pb-4">
                            My journey into the world of frontend development began with a curiosity-driven dive into HTML, CSS, and JavaScript. What started as a hobby quickly turned into a passion as I discovered the power of crafting beautiful and interactive web experiences.
                            </p>
                           
                        </div>
                        <div>
                            <p className="text-4xl text-bold text-center border-b-4 border-orange-300 gap-8 pb-3">Why Frontend Development?</p>
                        I am drawn to frontend development because it allows me to blend my creative instincts with my technical skills. I love the process of turning design concepts into reality and creating user interfaces that are not just functional but also delightful to interact with.
                        </div>
                        <div>
                            <p className="text-4xl text-bold text-center border-b-4 border-orange-300 gap-8 pb-3">What Sets Me Apart</p>
                        As a fresher in the field, I bring a fresh perspective and an eagerness to explore new technologies and trends. I thrive in environments where I can collaborate with experienced developers, soak up knowledge like a sponge, and contribute my unique insights and ideas to the team.
                        </div>
                        <div>
                            <p className="text-4xl text-bold text-center border-b-4 border-orange-300 gap-8 pb-3">My Skills and Expertise</p>
                        While I may be new to the industry, I have already developed a solid foundation in frontend technologies such as HTML5, CSS3, JavaScript, and React.js. I am constantly honing my skills through online courses, tutorials, and hands-on projects, eager to stay ahead of the curve and adapt to the rapidly changing landscape of web development.
                        </div>
                        <div>
                            <p className="text-4xl text-bold text-center border-b-4 border-orange-300 gap-8 pb-3">What's Next?</p>
                        I am excited about the opportunities that lie ahead and am eager to dive deeper into frontend development, mastering new frameworks, exploring emerging technologies, and tackling increasingly complex challenges. I am seeking opportunities to collaborate with like-minded individuals and organizations where I can continue to learn, grow, and make a meaningful impact.
                        </div>
                        <div className="text-center">
                            <p className="text-4xl text-bold text-center border-b-4 border-orange-300 gap-8 pb-3">Let's Connect!</p>
                        If you're passionate about frontend development and are looking for a dedicated and enthusiastic team member, I'd love to connect! Feel free to reach out to me via email or connect with me on LinkedIn. Let's embark on this exciting journey together!
                        </div>
                    </div>
                    <div className="text-center py-4">
                    <Link to="/skill" className="text-gray-300 group border px-6 py-3 flex items-center shadow-md hover:bg-gray-950 hover:border-pink-600 transition duration-300 ease-in-out">
                        Go to Skills
                        <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className=" ml-2"/>
                      </span>
                    </Link>
                </div> 
                </div>
            </div>
       
    );
};

export default About;


