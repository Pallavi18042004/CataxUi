import React, { useState, useEffect } from "react";

const TestimonialCard = ({ item }) => (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
            <img src={item.image} alt={item.title} className="w-10 h-10 rounded-full" />
            <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.subtitle1}</p>
            </div>
        </div>
        <p className="mb-2 text-gray-800">{item.subtitle2}</p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-2">
            {item.specification.map((point, idx) => (
                <li key={idx}>{point}</li>
            ))}
        </ul>
        {item.subtitle3 && <p className="italic text-gray-500">"{item.subtitle3}"</p>}
    </div>
);

const TestimonialSection = ({ data, isShow }) => {
    const allCols = [data.first_col_data, data.second_col_data, data.third_col_data];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            <div className="text-center mb-10">
                <p className="font-medium text-[24px] sm:text-[24px] lg:text-[48px]">Testimonials</p>
                <p className="text-base text-gray-600 mt-2">
                    Why do people trust us with their crypto taxes? Check out their testimonials <br /> and see what made them choose us.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {allCols.map((col, i) => (
                    <div key={i} className="flex flex-col gap-6">
                        {(isShow ? col : (isMobile ? col.slice(0, 1) : col.slice(0, 2))).map((item, idx) => (
                            <TestimonialCard key={idx} item={item} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;
