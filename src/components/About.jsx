import AboutPic from '/assets/AboutPic.jpeg';

const About = () => {
    return (
        <>

            <div
                className="w-full h-[260px] mt-[180px] text-white bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${AboutPic})` }}
            >
                <div className='grid grid-cols-2  gap-x-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-24 m-auto items-center  '>
                    <div className='flex gap-x-4 '>
                        <p className='sm:text-[30px] text-[17px] font-bold'>50M</p>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-[14px] sm:text-[17px] font-bold text-[#C4C9C7]'>Notifications</p>
                            <p className='text-[14px] sm:text-[17px] font-bold text-[#C4C9C7]'>Sent</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 '>
                        <p className='text-[17px] font-bold sm:text-[30px]'>142k+</p>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-[14px] sm:text-[17px] font-bold text-[#C4C9C7]'>Total </p>
                            <p className='text-[14px] sm:text-[17px] font-bold text-[#C4C9C7]'>Subscriber</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 mt-5 sm:mb-5'>
                        <p className='text-[17px] font-bold sm:text-[30px]'>450+</p>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-[14px] sm:text-[17px] font-bold text-[#C4C9C7]'>Total Push</p>
                            <p className='text-[14px] sm:text-[17px] font-bold text-[#C4C9C7]'>Integration</p>
                        </div>
                    </div>
                    <div className='flex   gap-x-4 mt-5 sm:mb-5'>
                        <p className='text-[17px] font-bold sm:text-[30px]'>$1M</p>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-[14px] sm:text-[17px] font-bold text-[#C4C9C7]'>In Grants</p>
                            <p className='text-[14px] sm:text-[17px] font-bold text-[#C4C9C7]'>Given</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;