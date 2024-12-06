import React from 'react';

const List = [
  {
    number: "1",
    title: "Download the application",
    description: "lorem ipsum dolor aset..."
  },
  {
    number: "2",
    title: "Open your account",
    description: "Sign up to invest and set up your account from the dashboard."
  },
  {
    number: "3",
    title: "Download the application",
    description: "lorem ipsum dolor aset..."
  }
]

const Step = () => {
  return (
    <section className="bg-[#3b7ab7] mt-36 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-32">
        <div className='w-96'>
          <p className='uppercase  '>step</p>
          <h2 className="text-3xl  text-white mb-8 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {List.map((step, index) => (
            <div key={index} className='rounded-lg bg-white/5 p-4'>
              <h1 className="text-8xl font-bold  mb-2 bg-gradient-to-b from-white to-[#3b7ab7]
              bg-clip-text text-transparent">{step.number} </h1>
              <p className="text-2xl  text-white mb-4">{step.title}</p>
              <p className="text-gray-300">{step.description} </p>
            </div>
          ))}
        </div>  
      </div>
      
    </section>
  );
};

export default Step;