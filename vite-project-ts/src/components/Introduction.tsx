import React from 'react';

const Introduction = () => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center pl-20">
        <p className='font-bold text-l'>Hello everyone! My name is</p>
        <h1 className='font-bold text-4xl text-white font-RobotoMono'>Praval Kollipara</h1>
        <h2 className='font-bold text-2xl font-RobotoMono'>Software/Machine Learning Engineer</h2>
        <div className='w-6/12'>
          <p className="font-RobotoMono">
                  I am a software engineer with a passion for building things. I am about to complete
                  my final year at Purdue University double majoring in Computer Science and Data Science and double
                  minoring in Political Science and Entrepreneurship.
                  I have experience in building full stack web applications and machine learning models.
                  I am always looking to learn new things and enjoy working on interesting projects. However, my true passion
                  lies in creating products to solve real world problems and using technology for social good.
          </p>
        </div>
    </div>
  )
};

export default Introduction;
