"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import blob from '@/assets/Blob 2.png';
import Image from 'next/image';
import img1 from '@/assets/kiran-makhijani.jpeg';
import img3 from '@/assets/aiman-asad.jpeg';
import img2 from '@/assets/naseema-lokhandwala.jpg';
import img4 from '@/assets/susmita-chakraborty.jpg';
import { Router } from 'next/router';

const therapists = [
    {
        name: 'Kiran Makhijani',
        deg: 'Psychotherapist',
        exp: '8 Years Experience',
        expert: 'Expertise in : Counseling, Psychotherapy, Clinical Assessments',
        img: img1,
    },
    {
        name: 'Aiman Asad',
        deg: 'Clinical Psychologist',
        exp: '10 Years Experience',
        expert: 'Expertise in : Mental health advocate , Clinical Assessments, Counselling',
        img: img2,
    },
    {
        name: 'Naseem Kachwala',
        deg: 'Counseling Psychologist',
        exp: '13 Years Experience',
        expert: 'Expertise in : Corporate Programs ,Psychotherapy, Addiction Specialist',
        img: img3,
    },
    {
        name: 'Susmita Chakraborty',
        deg: 'Psychologist & Therapist',
        exp: '11 Years Experience',
        expert: 'Expertise in : Trauma-Informed Care, Queer Affirmative, Mindfulness Therapist',
        img: img4,
    },
];

const Therapist = () => {
    const [selectedTherapist, setSelectedTherapist] = useState(0);

    const changeCard = (index) => {
        setSelectedTherapist(index);
        window.location.href = `#${therapists[selectedTherapist].name.replace(" ", "").toLowerCase()}`
    };

    return (
        <div className='grid md:grid-cols-2 pt-5 '>
            <div id={`${therapists[selectedTherapist].name.replace(" ", "").toLowerCase()}`} >
                <h2 className='footer-class heading  text-[#26275F]'>
                    Home to India’s Top Therapists
                </h2>
                <div className='flex gap-2 items-center '>
                    <p className='text-[#8A84E2] '>
                        To get started, click
                        <br />
                        on the button beside
                    </p>
                    <Link aria-label="contact" href='#contact-us'>
                        <svg className='w-10 h-10' width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="36.5" cy="36.5" r="36.5" fill="#C84309" />
                            <path d="M54.7071 37.7071C55.0976 37.3166 55.0976 36.6834 54.7071 36.2929L48.3431 29.9289C47.9526 29.5384 47.3195 29.5384 46.9289 29.9289C46.5384 30.3195 46.5384 30.9526 46.9289 31.3431L52.5858 37L46.9289 42.6569C46.5384 43.0474 46.5384 43.6805 46.9289 44.0711C47.3195 44.4616 47.9526 44.4616 48.3431 44.0711L54.7071 37.7071ZM19 38H54V36H19V38Z" fill="white" />
                        </svg>
                    </Link>
                </div>
                <ul>
                    <li className='relative '>
                        <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-full' width={blob.width} height={200} src={blob.src} alt="" />
                        <div className='relative px-8 py-16 md:p-36'>
                            <h3 className=' subheading font-bold text-center text-[#26275F]'>{therapists[selectedTherapist].name}</h3>
                            <p className=' text-white text-center'>{therapists[selectedTherapist].deg}</p>
                            <p className='text-center'>{therapists[selectedTherapist].exp}</p>
                            <p className=' text-center'>{therapists[selectedTherapist].expert}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <ul className=' grid place-content-center grid-cols-2 mt-10 md:mt-0 gap-4'>
                    {therapists.map((item, index) => (
                        <li
                            onClick={() => changeCard(index)}
                            className={`max-w-max mx-auto cursor-pointer ${index === 0 || index === 2 ? '' : 'mt-10'}`}
                            key={index}
                        >
                            <Image className=' rounded-box aspect-square object-cover' height={200} src={item.img} width={200} alt={item.name} />
                            <p className='flex items-center justify-center gap-2 mt-2 text-[#26275F] header-class'>
                                <span className='w-2 h-2 md:bg-[#EA1410] rounded-full block'></span>
                                <b className='text-center md:text-left'>{item.name}</b>
                            </p>
                            <p className='text-center text-[#8A84E2]'>{item.deg}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Therapist;
