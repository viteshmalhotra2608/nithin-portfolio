import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Vitesh Malhotra, a 2023 graduate🎓 with a passion for crafting robust backend systems and captivating web applications. As a seasoned Software developer I specialize in both MEAN and MERN stacks🚀.
              <br />
              With a diverse skill set and an unwavering work ethic, I'm driven by my relentless pursuit of personal and professional growth. I am excited to be part of dynamic teams and make a significant impact in the field of technology and management. In a rapidly evolving tech landscape, I stay ahead by keeping my finger on the pulse of the latest industry trends and emerging skills.I'm excited to connect with like-minded professionals, share insights, and explore opportunities for collaboration. Let's <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/viteshmalhotra/' target='_blank'> connect </a> and embark on a journey of growth and innovation together.
                </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1QYASqVt-lqHLVG2AnjDCloU_A1l3B7Tv/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;