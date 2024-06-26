import { HiArrowNarrowRight } from "react-icons/hi";
import img from '../assets/My Pic.png'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-[#0a192f] w-full min-h-screen flex flex-col sm:flex-row items-center justify-center">
            <div className="max-w-[1000px] mx-6 sm:mx-12 px-2 flex flex-col justify-center w-full">
                <p className="text-orange-300">Hi, My name is</p>
                <h1 className="text-3xl sm:text-6xl font-bold text-white">Md Kawser Ahmed</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-gray-400">I am Frontend Developer.</h2>
                <p className="text-gray-400 py-4 max-w-[700px]">What sets me apart is my dedication to creating solutions that not only meet the technical requirements but also delight users and drive business goals. Whether it's building responsive websites, dynamic web applications, or interactive prototypes, I thrive on the challenge of bringing ideas to life through code.</p>
            </div>
            
            <div className="text-center">
                <img className="w-40 sm:w-fit h-40 sm:h-96 rounded-full" src={img} alt="Profile Picture" /> 
                
                <div className="text-center py-4">
                    <Link to="/about" className="text-gray-300 group border px-6 py-3 flex items-center shadow-md hover:bg-gray-950 hover:border-pink-600 transition duration-300 ease-in-out">
                        View work 
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-2"/>
                        </span>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
