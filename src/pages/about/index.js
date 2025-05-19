import React from 'react';
import SeoHead from '../../components/SeoHead';
import Layout from '../../components/Layout/Layout';

const About = () => {
    return (
        <>
            <SeoHead title={'Hakkımızda | KAZEMLER'} />
            <Layout>
                <div className='relative overflow-hidden text-white py-20 px-6'>
                    <div className='absolute inset-0 opacity-10 bg-cover bg-center' style={{ backgroundImage: 'url(/images/plazas.jpg)' }}></div>
                    <div className='relative max-w-5xl mx-auto text-center'>
                        <br />
                        <br />
                        <br />
                        <h1 className='text-5xl font-extrabold my-6 animate-fade-in'>Who We Are</h1>
                        <p className='text-xl leading-8 mb-10 animate-slide-up'>At <strong>KAZEMLER</strong>, we offer a seamless and enjoyable experience tailored to your needs. We specialize in consulting, production, and trade, paving the way for innovation and excellence in the industry.</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-left animate-slide-up'>
                            <div>
                                <h2 className='text-3xl font-bold mb-4'>Our Mission</h2>
                                <p className='text-lg leading-7'>To empower businesses with tailored solutions that foster growth, innovation, and lasting success. We prioritize quality, integrity, and strong partnerships.</p>
                                <p className='text-lg leading-7'>To empower businesses with tailored solutions that foster growth, innovation, and lasting success. We prioritize quality, integrity, and strong partnerships.</p>
                                <p className='text-lg leading-7'>To empower businesses with tailored solutions that foster growth, innovation, and lasting success. We prioritize quality, integrity, and strong partnerships.</p>
                                <p className='text-lg leading-7'>To empower businesses with tailored solutions that foster growth, innovation, and lasting success. We prioritize quality, integrity, and strong partnerships.</p>
                                <p className='text-lg leading-7'>To empower businesses with tailored solutions that foster growth, innovation, and lasting success. We prioritize quality, integrity, and strong partnerships.</p>
                            </div>
                            <div>
                                <h2 className='text-3xl font-bold mb-4'>Our Vision</h2>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                                <p className='text-lg leading-7'>To be a global leader in the consulting, production, and trade sectors, known for our innovative approach and impactful solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;
