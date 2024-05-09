import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Experience = () => {
    return (
        <div className="bg-[#0a192f] min-h-screen text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
                <div className="pb-8">
                    <p className="text-4xl py-4 font-bold border-b-4 border-orange-300 text-center">Experience</p>
                    <p className="text-center text-2xl py-4">Checkout some recent work</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div" style={{ backgroundImage: `url(${logo})` }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Applications
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div" style={{ backgroundImage: `url(${logo})` }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Applications
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div" style={{ backgroundImage: `url(${logo})` }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Applications
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div" style={{ backgroundImage: `url(${logo})` }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Applications
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div" style={{ backgroundImage: `url(${logo})` }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Applications
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div" style={{ backgroundImage: `url(${logo})` }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Applications
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center py-4">
                    <Link to="/contact" className="text-gray-300 group border px-6 py-3 flex items-center shadow-md hover:bg-gray-950 hover:border-pink-600 transition duration-300 ease-in-out">
                        Lets Next
                        <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className=" ml-2"/>
                      </span>
                    </Link>
                </div> 
                </div>
            </div>
        </div>
    );
};

export default Experience;
