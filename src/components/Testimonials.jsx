import React from "react";
import TestimonialSection from "./TestimonialSection"; // adjust the path if needed
import testimonialData from "../data/testimonialData"; // if you're using separate file
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Testimonials = () => {
    return (
        <div>
            <TestimonialSection data={testimonialData} />
            <div className="flex items-center justify-center gap-x-[30px]">
                <span className='w-[260px] h-0 border border-[#A64D79] inline-block'></span>
                <span className='text-[#A64D79]'><MdKeyboardDoubleArrowDown size={45} /></span>
                <span className='w-[260px] h-0 border border-[#A64D79] inline-block'></span>

            </div>
        </div>

    );
};

export default Testimonials;