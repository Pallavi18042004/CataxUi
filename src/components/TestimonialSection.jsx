import React from "react";

const TestimonialCard = ({ item }) => (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
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

const TestimonialSection = ({ data }) => {
    const allCols = [data.first_col_data, data.second_col_data, data.third_col_data];

    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            <div className="text-center mb-10">
                <p className="font-semibold text-3xl lg:text-4xl">Testimonials</p>
                <p className="text-base text-gray-600 mt-2">
                    Why do people trust us with their crypto taxes? Check out their testimonials <br /> and see what made them choose us.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCols.map((col, i) => (
                    <div key={i} className="flex flex-col gap-6">
                        {col.map((item, idx) => (
                            <TestimonialCard key={idx} item={item} />
                        ))}
                    </div>
                ))}
            </div>
        </section>

    );
};

export default TestimonialSection;
