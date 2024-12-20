import React from 'react';
import Slider from 'react-slick';
import sliderSettings from '../../../libs/sliderSettings';

export default function Aptitude() {
    return (
        <section className="bg-gray-100 px-10 py-8 overflow-hidden">
            <Slider centerMode centerPadding='150px'  {...sliderSettings}>
                {Array(7).fill(0).map((_, idx) => (
                    <Card key={idx} />
                ))}
            </Slider>
        </section>
    );
}

const Card = () => {
    return (
        <article className="border rounded-lg shadow-md bg-white p-5 flex flex-col justify-between leading-normal transition-transform transform ">
            {/* Quiz Image */}
            <img
                src="https://cxotoday.com/wp-content/uploads/2023/02/qualcomm.jpeg"
                alt="Qualcomm"
                className="h-28 w-full object-cover rounded-t-lg"
            />
            
            {/* Card Content */}
            <div className="pt-3">
                <p className="text-sm text-gray-600 flex items-center mb-2">
                    <svg
                        className="fill-current text-gray-500 w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path>
                    </svg>
                    Members only
                </p>
                
                <a
                    href="#"
                    className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                    Can coffee make you a better developer?
                </a>
                
                <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                </p>
            </div>
            
            {/* Author Information */}
            <footer className="flex items-center mt-4">
                <a href="#">
                    <img
                        className="w-10 h-10 rounded-full mr-4"
                        src="https://tailwindcss.com/img/jonathan.jpg"
                        alt="Avatar of Jonathan Reinink"
                    />
                </a>
                <div className="text-sm">
                    <a
                        href="#"
                        className="text-gray-900 font-semibold leading-none hover:text-indigo-600"
                    >
                        Jonathan Reinink
                    </a>
                    <p className="text-gray-600">Aug 18</p>
                </div>
            </footer>
        </article>
    );
};
