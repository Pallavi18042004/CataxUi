import React from 'react';

const countries = [
    { name: 'Italy', flag: '🇮🇹', image: '' },
    { name: 'Italy', flag: '🇮🇹', image: '' },
    { name: 'Singapore', flag: '🇸🇬', image: '' },
    { name: 'Malaysia', flag: '🇲🇾', image: '' },
    { name: 'Nether land', flag: '🇳🇱', image: '' },
    { name: 'Poland', flag: '🇵🇱', image: '' },
    { name: 'Australia', flag: '🇦🇺', image: '' },
    { name: 'Nether land', flag: '🇳🇱', image: '' },
    { name: 'Siberia', flag: '🇺🇿', image: '' },
    { name: 'America', flag: '🇺🇸', image: '' },
];

const GridCard = ({ name, flag, image }) => (
    <div className="rounded-xl overflow-hidden shadow-md w-[242px] h-[162px] sm:w-full sm:h-[200px] lg:h-[230px] bg-gray-300 relative">
        {image && (
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
            />
        )}
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded text-white text-xs sm:text-sm font-medium flex items-center gap-1">
            {name} <span>{flag}</span>
        </div>
    </div>
);

const Available = () => {
    return (
        <div className="bg-white py-12 px-4">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">Now Available In</h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    Not just India anymore! Now available internationally. Catax supports crypto tax <br />
                    calculations for a growing list of countries worldwide.
                </p>
            </div>

            {/* Grid Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
                {countries.map((country, idx) => (
                    <GridCard key={idx} {...country} />
                ))}
            </div>
        </div>
    );
};

export default Available;
