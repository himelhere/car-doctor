import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen my-28 bg-base-200">
            <div className="hero-content flex-col gap-32 lg:flex-row">
                <div className='relative'>
                    <img src={person} className='max-w-md w-[460px] h-[473px]  object-cover' alt="person" />
                    <img src={parts} className=' absolute -right-20 -bottom-16 object-cover w-[320px] h-[332px] max-w-xs border-white border-8 rounded-lg' alt="parts" />
                </div>
                <div className='max-w-md'>
                    <h1 className="text-5xl font-bold">About</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;