import React from 'react';
import { notify } from './Notify';

const ComingSoon = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">Coming Soon</h1>
                <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-400">We're working hard to bring you something amazing!</p>
                <div className="mt-8">
                    <button
                        className="px-6 py-3 rounded-lg bg-pink-700 text-white text-lg hover:bg-pink-800 transition duration-300"
                        onClick={() => notify('info', 'This feature is under development')}
                    >
                        Notify Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;