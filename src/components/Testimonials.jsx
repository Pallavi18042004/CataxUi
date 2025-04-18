import React, { useState } from "react";
import TestimonialSection from "./TestimonialSection"; // adjust the path if needed
import testimonialData from "../data/testimonialData"; // if you're using separate file
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Testimonials = () => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div>
            <TestimonialSection data={testimonialData} isShow={isShow} />
            <div className="flex items-center justify-center gap-x-5 sm:gap-x-[30px]">
                <span className='w-24 sm:w-[260px] h-0 border border-[#A64D79] inline-block'></span>
                <span
                    onClick={() => setIsShow(!isShow)}
                    className={`text-[#A64D79] text-[28px] sm:text-[40px] ${isShow && "rotate-180"} `}><MdKeyboardDoubleArrowDown /></span>
                <span className='w-24 sm:w-[260px] h-0 border border-[#A64D79] inline-block'></span>

            </div>
        </div>

    );
};

export default Testimonials;