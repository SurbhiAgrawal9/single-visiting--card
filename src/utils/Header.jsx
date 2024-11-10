import React, { useEffect, useState } from 'react';
import { CgDarkMode } from "react-icons/cg";
import useStorage from '../hooks/useStorage';

const Header = () => {
    const [theme, setTheme] = useState('light');
    const [storage, setStorage, removeStorage] = useStorage('theme');

    const handleTheme = () => {
        const elem = document.getElementsByTagName('html')[0];

        if (theme === 'light') {
            elem.classList.remove('dark');
            elem.classList.add('light');
            setTheme('dark');
            setStorage('dark');
            return;
        } else if (theme === 'dark') {
            elem.classList.remove('light');
            elem.classList.add('dark');
            setTheme('light');
            setStorage('light');
            return;
        }
    }

    useEffect(() => {
        const elem = document.getElementsByTagName('html')[0];

        if (storage === 'dark') {
            elem.classList.add('dark');
            elem.classList.remove('light');
            setTheme('dark');
        } else {
            elem.classList.add('light');
            elem.classList.remove('dark');
            setTheme('light');
        }
    }, [storage]);

    return (
        <div className='w-full h-max py-2 px-4 shadow-md bg-white dark:bg-gray-900 dark:shadow-dark flex items-center justify-between'>
            <h1 className='text-2xl text-blue-500 dark:text-white'>Your company name</h1>
            <button
                onClick={handleTheme}
                className='flex items-center gap-1'
            >
                <CgDarkMode className='dark:text-white text-2xl' /> {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    )
}

export default Header;