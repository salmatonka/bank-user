import React from 'react';

const ErrorPage = () => {
    return (
        <div className="container mx-auto min-h-screen bg-gray-800">
            <div className="flex items-center h-full p-16  text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But don't worry, you can find plenty of other things on our homepage.</p>
                        <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold text-gray-800 bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">Back to homepage</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;