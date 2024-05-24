import React from 'react'

const Experience = () => {
     const experienceItems = [
       {
         id: 1,
         image: "html.png",
         title: "HTML",
       },
       {
         id: 2,
         image: "css.jpg",
         title: "CSS",
       },
       {
         id: 3,
         image: "javascript.png",
         title: "JavaScript",
       },
       {
         id: 4,
         image: "java.png",
         title: "Java",
       },
       {
         id: 5,
         image: "oracle.png",
         title: "Oracle",
       },
       {
         id: 6,
         image: "spring.png",
         title: "Spring",
       },
     ];

  return (
    <div name="Experience" className="max-w-screen-2xl container font-serif mx-auto px-4 md:px-20 my-16 py-10">
      <h1 className="text-4xl font-bold mb-5">Experience</h1>
      <span className="underline text-lg">
        I,ve more than 1 year of Experience in below tecnologies.
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 my-5 gap-10">
        {experienceItems.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="flex flex-col justify-center items-center border-[2px] md:w-[200px] md:h-[200px] rounded-full shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 px-6"
              >
                <img
                  src={item.image}
                  className="w-[150px] bg-white rounded-full p-1"
                  alt=""
                />
                <div>
                  <div className="font-bold text-lg px-2 mb-2">
                    {item.title}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Experience
