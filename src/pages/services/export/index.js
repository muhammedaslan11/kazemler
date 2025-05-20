import React from 'react';
import SeoHead from '../../../components/SeoHead';
import Layout from '../../../components/Layout/Layout';

const ExportService = () => {
    return (
        <>
            <SeoHead title={'Export Service | KAZEMLER'} />
            <Layout>
                <div className='relative bg-cover bg-center' style={{ backgroundImage: 'url(/images/busnss.jpg)' }} >
                    <div className='absolute inset-0 bg-black/90' />
                    <br />
                    <br />
                    <br />
                    <div className='max-w-5xl lg:mx-auto px-4 py-12 relative'>
                        <h1 className='text-4xl font-bold mb-6 text-white'>Export Service</h1>
                        <h3 className='text-2xl mb-4 text-gray-300'>What's the Export Service?</h3>
                        <p className='leading-8 text-lg text-gray-200 mb-6'>
                            We provide a seamless and enjoyable experience for all your needs. Explore unique features with <strong className='font-bold text-white'>KAZEMLER</strong>.
                        </p>
                        <img src='/images/busnss.jpg' alt='Export Service' className='w-full h-auto rounded-2xl shadow-lg mb-8' />
                        <p className='leading-8 text-lg text-gray-200'>
                            Companies with an Export Department are the fastest, most effective and reliable solution to increase your international connections and customer portfolio for overseas sales in a short period of 6 months.
                        </p>
                        <br />
                        <br />
                        <br />
                        <p className='leading-8 text-lg text-gray-200'>
                            If you have an export department or export personnel and want to increase your offers, this support is for you!
                        </p>
                        <br />
                        <br />
                        <br />
                        <p className='leading-8 text-lg text-gray-200'>
                            Our goal is to find new connections and customers in the target countries determined in the target market research conducted based on needs and performance analysis.                        </p>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ExportService;