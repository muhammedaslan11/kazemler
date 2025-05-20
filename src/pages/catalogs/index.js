import React from 'react';
import SeoHead from '../../components/SeoHead';
import Layout from '../../components/Layout/Layout';

const Catalogs = () => {
    return (
        <>
            <SeoHead title={'Catalogs | KAZEMLER'} />
            <Layout>
                <div className='relative overflow-hidden text-white py-20 px-6'>
                    <div className='absolute inset-0 opacity-20 bg-cover bg-center' style={{ backgroundImage: 'url(/images/plazas.jpg)' }}></div>
                    <div className='relative max-w-5xl mx-auto text-center'>
                        <br />
                        <br />
                        <br />
                        <h1 className='text-5xl font-extrabold my-6 animate-fade-in'>Catalogs</h1>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Catalogs;
