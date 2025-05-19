import React from 'react';
import SeoHead from '../../components/SeoHead';
import Layout from '../../components/Layout/Layout';

const Privacy = () => {
    const policies = [
        {
            title: 'Data Collection',
            description: 'We collect only the necessary data to provide better services and enhance your experience on our platform. This includes personal information, usage data, and communication preferences.'
        },
        {
            title: 'Data Usage',
            description: 'Your data is used to improve our services, personalize your experience, and communicate important updates. We do not share your data with third parties without your consent.'
        },
        {
            title: 'Data Protection',
            description: 'We prioritize your privacy and take all necessary steps to protect your data from unauthorized access, breaches, and misuse.'
        },
        {
            title: 'Your Rights',
            description: 'You have the right to access, update, or delete your personal data at any time. Please contact us for any such requests.'
        }
    ];

    return (
        <>
            <SeoHead title={'Privacy Policies | KAZEMLER'} />
            <Layout>
                <div className='relative overflow-hidden text-white py-20 px-6'>
                    <div className='absolute inset-0 opacity-20 bg-cover bg-center' style={{ backgroundImage: 'url(/images/plazas.jpg)' }}></div>
                    <div className='relative max-w-5xl mx-auto text-center'>
                        <h1 className='text-5xl font-extrabold my-6 animate-fade-in'>Privacy Policies</h1>
                        <p className='text-xl leading-8 mb-10 animate-slide-up'>At <strong>KAZEMLER</strong>, we take your privacy seriously. Learn more about how we collect, use, and protect your personal information.</p>
                        <img src='/images/cont.jpg' alt='Privacy' className='w-full h-auto rounded-2xl shadow-lg mb-10' />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-left animate-slide-up'>
                            {policies.map((policy, index) => (
                                <div key={index} className='bg-white/5 p-6 rounded-2xl shadow-lg'>
                                    <h2 className='text-3xl font-bold mb-4'>{policy.title}</h2>
                                    <p className='text-lg leading-7'>{policy.description}</p>
                                </div>
                            ))}
                        </div>
                        <img src='/images/plazas.jpg' alt='Our Team' className='w-full h-auto rounded-2xl shadow-lg my-10' />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Privacy;
