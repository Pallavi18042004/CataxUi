import React from 'react';


const Available = () => {
    return (
        <>
            <div id='countries' className='flex flex-col gap-y-[50px] mt-[150px]'>
                <div className='w-[90%] sm:w-[59%] m-auto flex flex-col gap-y-[px25] '>
                    <h3 className='text-[24px] sm:text-[48px] md:text-[48px] font-medium text-center pl-2 '>Now Available In</h3>
                    <div className="flex flex-col items-center mt-5 text-center">
                        <p className='text-[15px] text-[#383838]'>
                            Not just India anymore! Now available internationally. Catax supports crypto tax
                        </p>
                        <p className='text-[15px] text-[#383838]'>
                            calculations for a growing list of countries worldwide.
                        </p>
                    </div>
                </div>

                <div className='grid gap-y-[25px] lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 justify-center w-[70%] lg:w-[82%] m-auto'>
                    <div className='flex flex-col items-center gap-y-[25px]'>
                        <img className='w-[242px] border] ' src="/assets/image1.png" alt="" />
                        <img className='w-[242px] h-[216]' src="/assets/image2.png" alt="" />
                    </div>
                    <div className='flex flex-col items-center gap-y-[25px]'>
                        <img className='w-[242px] h-[324]' src="/assets/image3.png" alt="" />
                        <img className='w-[242px] h-[324]' src="/assets/image4.png" alt="" />
                        <img className='w-[242px] h-[324]' src="/assets/image5.png" alt="" />
                    </div>
                    <div className='flex flex-col items-center gap-y-[25px]'>
                        <img className='w-[242px] border ' src="/assets/image6.png" alt="" />
                        <img className='w-[242px] h-[216]' src="/assets/image7.png" alt="" />
                    </div>
                    <div className='flex flex-col items-center gap-y-[25px]'>
                        <img className='w-[242px] h-[324]' src="/assets/image8.png" alt="" />
                        <img className='w-[242px] h-[324]' src="/assets/image9.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Available;
