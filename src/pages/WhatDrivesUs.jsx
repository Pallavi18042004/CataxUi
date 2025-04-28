
function WhatDrivesUs() {
    const drives = [
      {
        image:"/assets/responsible.png",  
        title: "Responssible",
        description: "We deliver innovative solutions to simplify complex crypto tax challenges for our clients."
      },
      {
        image:"/assets/purpose.png",
        title: "Purpose",
        description: "Your experience is our priority. We focus on providing personalized support to meet your requirements."
      },
      {
        image:"/assets/community.png",
        title: "Comitmment",
        description: "We take full responsibility for our work, offering free handling of income tax queries."
      },
      {
        image:"/assets/grit.png",
        title: "Grit",
        description: "We believe in open communication, keeping you informed about every step."
      },
      {
        image:"/assets/strategy.png",
        title: "Strategy",
        description: "We have an in-depth understanding of complexities, and our strategies are always thoughtfully designed."
      },
      {
        image:"/assets/vantage.png", 
        title: "Vantage",
        description: "Every day, we work diligently to maintain our long-term viability and to address the world's most pressing problems."
      },
    ];
  
    return (
      <section className="py-16 bg-gradient-to-r from-white to-[#f7f3f5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {drives.map((item, index) => (
              <div key={index} className="text-center  space-y-3 flex  flex-col items-center justify-center mt-12">
                
                <img className="w-[43px] h-[43px]" src={item.image} alt="" />
                
                <h3 className="text-xl  font-semibold ">{item.title}</h3>
                <p className="text-gray-600 text-base max-w-56">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default WhatDrivesUs;
  