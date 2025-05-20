import Layout from '@/components/Layout/Layout';
import SeoHead from '@/components/SeoHead';
import React from 'react';

const About = () => {
    return (
        <>
            <SeoHead title={'About Us | KAZEMLER'} />
            <Layout>
                <div className='relative overflow-hidden text-white py-20 px-6'>
                    <div className='absolute inset-0 opacity-20 bg-cover bg-center' style={{ backgroundImage: 'url(/images/plazas.jpg)' }}></div>
                    <div className='relative max-w-5xl mx-auto text-center'>
                        <br />
                        <br />
                        <br />
                        <h1 className='text-5xl font-extrabold my-6 animate-fade-in'>Who We Are</h1>
                        <p className='text-xl leading-8 mb-10 animate-slide-up'>At <strong>KAZEMLER</strong>, we offer a seamless and enjoyable experience tailored to your needs. We specialize in consulting, production, and trade, paving the way for innovation and excellence in the industry.</p>
                        <img src='/images/busnss.jpg' alt='Our Mission' className='w-full h-auto rounded-2xl shadow-lg mb-10' />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-left animate-slide-up'>
                            <div>
                                <h2 className='text-3xl font-bold mb-4'>Our Mission</h2>
                                <p className='text-lg leading-7'>To empower businesses with tailored solutions that foster growth, innovation, and lasting success. We prioritize quality, integrity, and strong partnerships.</p>
                                <img style={{ width: '500px', height: '400px', objectFit: 'contain' }} src='/images/Illustration2.png' alt='Mission' className='w-full h-auto rounded-2xl shadow-lg my-6' />
                            </div>
                            <div>
                                <h2 className='text-3xl font-bold mb-4'>Our Vision</h2>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <img style={{ width: '500px', height: '400px', objectFit: 'contain' }} src='/images/HugeGlobal.svg' alt='Vision' className='w-full h-auto rounded-2xl shadow-lg my-6' />
                            </div>
                        </div>
                        <img src='/images/plazas.jpg' alt='Our Team' className='w-full h-auto rounded-2xl shadow-lg my-10' />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;
