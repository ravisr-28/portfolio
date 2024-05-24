import React from 'react'

const Portfolio = () => {
    const cardItems = [
        {
            id:1,
            image:"mongodb.png",
            name:"MongoDB"
        },
        {
            id:2,
            image:"express.png",
            name:"ExpressJS"
        },
        {
            id:3,
            image:"reactjs.png",
            name:"ReactJS"
        },
        {
            id:4,
            image:"node.png",
            name:"NodeJS"
        },
        {
            id:5,
            image:"python.webp",
            name:"Python"
        },
        {
            id:6,
            image:"java.png",
            name:"Java"
        },
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10">
        <h1 className='text-4xl font-bold font-serif mb-5'>Portfolio</h1>
        <span className='underline font-semibold font-serif text-lg'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 my-5 gap-6'>
            {cardItems.map((item)=>{
                return (
                  <>
                    <div
                      key={item.id}
                      className="md:h-[300px] md:w-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 px-6"
                    >
                      <img
                        src={item.image}
                        className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                        alt=""
                      />
                      <div>
                        <div className="font-bold font-serif text-lg px-2 mb-2">
                          {item.name}
                        </div>
                        <h1 className="px-2 text-gray-700">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </h1>
                      </div>
                      <div className='flex justify-around'>
                        <button className="bg-sky-500 hover:opacity-80 px-4 py-2 rounded-lg mt-4">
                          Video
                        </button>
                        <button className="bg-green-500 hover:opacity-80 px-4 py-2 rounded-lg mt-4">
                          Source Code
                        </button>
                      </div>
                    </div>
                  </>
                );
            })}
        </div>
    </div>
  );
}

export default Portfolio
