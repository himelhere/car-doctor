import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import NavBar from '../../Shared/NavBar';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="carousel w-full h-[560px] rounded-xl">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <img src={img1} className="w-full object-cover" />
                        <div className="absolute  justify-start items-center left-0 w-full h-full text-white bg-gradient-to-r from-[#151515] to-[#1515151A]">
                           <div className='w-1/2 lg:w-1/3 ml-8 lg:ml-20 mt-32 space-y-4 lg:space-y-7 flex flex-col'>
                           <h1 className='text-5xl lg:text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                            <button className="btn btn-warning text-white bg-amber-600 hover:bg-white hover:text-amber-600 hover:border-0">Discover More</button>
                            <button className="btn btn-outline text-white border-white hover:bg-amber-600 hover:border-0">Latest Project</button>
                            </div>
                           </div>
                        </div>
                        <div className="absolute flex justify-end  right-10 bottom-10">
                            <a href="#slide4" className="btn btn-circle mr-4 opacity-60 hover:bg-amber-600"><FaArrowLeft/></a>
                            <a href="#slide2" className="btn btn-circle opacity-60 hover:bg-amber-600"><FaArrowRight/></a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full object-cover" />
                        <div className="absolute  justify-start items-center left-0 w-full h-full text-white bg-gradient-to-r from-[#151515] to-[#1515151A]">
                           <div className='w-1/2 lg:w-1/3 ml-8 lg:ml-20 mt-32 space-y-4 lg:space-y-7 flex flex-col'>
                           <h1 className='text-5xl lg:text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                            <button className="btn btn-warning text-white bg-amber-600 hover:bg-white hover:text-amber-600 hover:border-0">Discover more</button>
                            <button className="btn btn-outline text-white border-white hover:bg-amber-600 hover:border-0">Latest Project</button>
                            </div>
                           </div>
                        </div>
                        <div className="absolute flex justify-end  right-10 bottom-10">
                            <a href="#slide1" className="btn btn-circle opacity-60 hover:bg-amber-600 mr-4"><FaArrowLeft/></a>
                            <a href="#slide3" className="btn btn-circle opacity-60 hover:bg-amber-600"><FaArrowRight/></a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full object-cover" />
                        <div className="absolute  justify-start items-center left-0 w-full h-full text-white bg-gradient-to-r from-[#151515] to-[#1515151A]">
                           <div className='w-1/2 lg:w-1/3 ml-8 lg:ml-20 mt-32 space-y-4 lg:space-y-7 flex flex-col'>
                           <h1 className='text-5xl lg:text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                            <button className="btn btn-warning text-white bg-amber-600 hover:bg-white hover:text-amber-600 hover:border-0">Discover more</button>
                            <button className="btn btn-outline text-white border-white hover:bg-amber-600 hover:border-0">Latest Project</button>
                            </div>
                           </div>
                        </div>
                        <div className="absolute flex justify-end  right-10 bottom-10">
                            <a href="#slide2" className="btn btn-circle opacity-60 hover:bg-amber-600 mr-4"><FaArrowLeft/></a>
                            <a href="#slide4" className="btn btn-circle opacity-60 hover:bg-amber-600"><FaArrowRight/></a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} className="w-full object-cover" />
                        <div className="absolute  justify-start items-center left-0 w-full h-full text-white bg-gradient-to-r from-[#151515] to-[#1515151A]">
                           <div className='w-1/2 lg:w-1/3 ml-8 lg:ml-20 mt-32 space-y-4 lg:space-y-7 flex flex-col'>
                           <h1 className='text-5xl lg:text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                            <button className="btn btn-warning text-white bg-amber-600 hover:bg-white hover:text-amber-600 hover:border-0">Discover more</button>
                            <button className="btn btn-outline text-white border-white hover:bg-amber-600 hover:border-0">Latest Project</button>
                            </div>
                           </div>
                        </div>
                        <div className="absolute flex justify-end  right-10 bottom-10">
                            <a href="#slide3" className="btn btn-circle opacity-60 hover:bg-amber-600 mr-4"><FaArrowLeft/></a>
                            <a href="#slide1" className="btn btn-circle opacity-60 hover:bg-amber-600"><FaArrowRight/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;