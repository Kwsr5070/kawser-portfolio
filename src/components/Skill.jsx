import css from '../assets/css.png'
import html from '../assets/html.webp'
import JavaScript from '../assets/js.webp'
import node from '../assets/5968322.png'
import react from '../assets/React.webp'
import tailwind from '../assets/tailwind-css7675.logowik.com.webp'
import github from '../assets/25231.png'
import AWS  from '../assets/Amazon_Web_Services-Logo.wine.png'
import { Link } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Skill = () => {
    return (
        <div className='bg-[#0a192f] w-full min-h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl  py-4 text-bold border-b-4 border-orange-300 text-center'>Skills</p>
                    <p className='text-center text-2xl py-2'>/These ar the technologies I've work with</p>
                </div> 
                <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={html} alt="HTML Icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt="CSS Icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript Icon" />
                        <p className='my-4'>Javscript</p>
                    </div>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt="REACT Icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="Tailwind Icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="Github Icon" />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={node} alt="node Icon" />
                        <p className='my-4'>NODE</p>
                    </div>
                    <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt="AWS Icon" />
                        <p className='my-4'>AWS</p>
                    </div>
                    <div className="text-center py-4">
                    <Link to="/experience" className="text-gray-300 group border px-6 py-3 flex items-center shadow-md hover:bg-gray-950 hover:border-pink-600 transition duration-300 ease-in-out">
                        Lets next 

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

export default Skill;