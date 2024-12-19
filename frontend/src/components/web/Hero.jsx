import React from 'react';

export default function Hero() {
    return (
        <>
            <section className="lg:py-20 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 flex-col flex items-center text-center">
                        <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
                            Built for Seamless Online Education
                        </h2>
                        <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
                            Empowering learning through technology, making education more accessible, engaging, and rewarding.
                        </p>
                        <div className="flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                            <a
                                href="#"
                                className="cursor-pointer bg-indigo-600 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-white transition-all duration-500 focus:outline-none hover:bg-indigo-700"
                            >
                                Get Started
                            </a>
                            <a
                                href="#"
                                className="cursor-pointer bg-indigo-50 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-indigo-600 transition-all duration-500 focus:outline-none hover:bg-indigo-100"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                        {/* Feature 1 */}
                        <div className="relative w-full h-auto md:col-span-2">
                            <div className="bg-gray-800 rounded-2xl flex flex-row flex-wrap">
                                <div className="p-5 xl:p-8 w-full md:w-1/2">
                                    <div className="block">
                                        <svg
                                            width="30"
                                            height="30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                        >
                                            <path
                                                d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                                        Streamlined Online Learning Tools
                                    </h3>
                                    <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                                        Access courses and materials seamlessly with minimal effort, enhancing your educational journey.
                                    </p>
                                    <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                        Explore Features
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="relative w-full h-auto">
                            <div className="bg-indigo-500 rounded-2xl p-5 xl:p-8 h-full">
                                <div className="block">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                                    Innovative EdTech Solutions
                                </h3>
                                <p className="text-xs font-normal text-white mb-8">
                                    Modernize your learning process with the latest educational technology tailored for you.
                                </p>
                                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="relative w-full h-auto">
                            <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
                                <div className="block">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                                    Transform Knowledge Into Growth
                                </h3>
                                <p className="text-xs font-normal text-white mb-8">
                                    Leverage personalized plans to gain insights and foster growth in your field.
                                </p>
                                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                    Discover More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
