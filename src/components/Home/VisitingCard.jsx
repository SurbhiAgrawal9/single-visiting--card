import React, { useRef, useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaShareAlt, FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaBuilding, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Spin, Modal, Button, Input } from 'antd';
import html2pdf from 'html2pdf.js';
import useId from '../../hooks/useId';
import { notify } from '../../utils/Notify';

import { PiPhoneCallLight } from "react-icons/pi";

const VisitingCard = () => {
    const [loading, setLoading] = useState(false);
    const [shareModalVisible, setShareModalVisible] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);
    const cardRef = useRef();
    const userId = useId();
    const url = window.location.href;

    const handleShare = () => {
        setShareModalVisible(true);
    };

    const handleCopyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            setLinkCopied(true);
            notify('success', 'Link copied to clipboard!');
        });
    };

    const handleDownloadPDF = () => {
        const element = cardRef.current;
        setLoading(true);
        try {
            html2pdf()
                .from(element)
                .save(`${userId}.pdf`)
                .then(() => {
                    setLoading(false);
                });
            notify('success', 'Download successful');
        } catch (error) {
            console.error('Error generating PDF:', error);
            notify('error', 'Error generating PDF');
            setLoading(false);
        }
    };

    const goto = (link) => {
        window.location.href = link;
    };

    const data = {
        name: 'John Smith',
        profile: 'https://media.istockphoto.com/id/1355051102/photo/indoor-portrait-of-cheerful-businessman-in-corporate-attire.jpg?s=612x612&w=0&k=20&c=GMz18iNd090elsUC-N5KQH8oKKUO7GxhJL3w6a0gGKM=', // Replace with a fictional image URL
        role: 'Business Development Manager',
        company: 'your company name ',
        website: 'your website',
        email: 'arjun.mehta@innovatesolutions.com',
        phone: '+911234567890',
        address: '20 Cooper Square, New York, NY 10003, USA'
    };

    // const shareLinks = {
    //     whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
    //     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    //     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    //     twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
    //     email: `mailto:?subject=Check out this link&body=${encodeURIComponent(url)}`
    // };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="p-6 bg-white shadow-lg dark:shadow-dark rounded-lg dark:bg-gray-900" ref={cardRef}>
                {/* Visiting Card Info */}
                <div className="flex items-center mb-4">
                    <img src={data.profile} alt="Profile" className="w-24 h-24 rounded-full shadow-md object-cover" />
                    <div className="ml-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{data.name}</h2>
                        <p className="text-gray-600 dark:text-gray-300">{data.role}</p>
                    </div>
                </div>

                {/* Contact Icons */}
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex flex-col items-center gap-1'>
                        {/* <FaPhone
                            className='w-10 h-10 bg-green-500 rounded-full p-2 cursor-pointer text-white  top-2 right-2 z-10'
                            onClick={() => goto(`tel:${data.phone}`)}
                        /> */}

<PiPhoneCallLight  className='w-10 h-10 bg-green-500 rounded-full p-2 cursor-pointer text-white rotate-right z-10'
    onClick={() => goto(`tel:${data.phone}`)}
/>
                       
    
                        <h3>Call</h3>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <FaWhatsapp
                            className='w-10 h-10 bg-green-500 rounded-full p-2 cursor-pointer text-white'
                            onClick={() => goto(`https://wa.me/${data.phone}`)}
                        />
                        <h3>Whatsapp</h3>
                    </div>
                    
                </div>

                {/* More Info */}
                <div className="border-t border-gray-300 my-4"></div>
                <div className="text-gray-800 dark:text-gray-300 space-y-2">
                    <div className="flex items-center gap-2">
                        <FaBuilding /> {data.company}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGlobe /> <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a>
                    </div>
                    
                   
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {data.address}
                    </div>
                </div>

            

              
       </div>
       </div>
    );
};

export default VisitingCard;
