import React from "react";
import TestimonialSection from "./TestimonialSection"; // adjust the path if needed
import testimonialData from "../data/testimonialData"; // if you're using separate file

const Testimonials = () => {
    return (
        <div>
            <TestimonialSection data={testimonialData} />
        </div>
    );
};

export default Testimonials;