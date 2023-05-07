import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg max-w-md mx-auto p-6 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl leading-none font-extrabold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 leading-loose">{content}fffffff</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-0 w-full h-64 text-white pointer-events-none z-0"
      >
        <path
          fillOpacity="1"
          d="M 0 64 L 48 74.2 C 96 85 192 107 288 138.5 C 384 170 480 213 576 208 C 672 203 768 149 864 138.5 C 960 128 1056 160 1152 154.7 C 1248 149 1344 107 1392 85.8 L 1440 64 L 1440 320 L 1392
            320 C1305.8,320,1187,320,1032,320C876,320,684,320,540,320C396,320,300,320,204,320C108,320,60,320,30,320C12.4,320,-3,312,-12,298.7C -20.6,285.3,-24.3,266.7,-24,248C -24.3,229.3,-20.6,210.7,-12,197.3C -3,184,12.4,176,
            30,165.3C 60,154.7,108,141.3,204,144 C 300,149,396,171,492,170.7C 588,171,684,149,780,133.3C 876,117,972,107,1068,122.7C 1164,139,1260,181,1308,202.7L 1356 224 L 1356 0 L 1308 0 C1221.8,0,
           1103,0,948,0C793,0,601,0,457,0C313,0,217.9-1.6,121.9-5.2C25.9-8.8,-70.1,-16.4,-147,-26 L 48 -16 Z"
        ></path>
      </svg>
    </div>
  );
};

export default Card;