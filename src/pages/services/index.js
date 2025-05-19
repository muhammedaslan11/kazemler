import React from 'react';
import SeoHead from '../../components/SeoHead';
import Layout from '../../components/Layout/Layout';
import Services from '@/components/Services';

const Index = () => {
    return (
        <>
            <SeoHead title={'Services | KAZEMLER'} />
            <Layout>
                <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/images/plazas.jpg)' }} >
                    <div className="absolute inset-0 bg-black/90 z-0" />
                    <div className="relative z-10">
                        <br />
                        <br />
                        <br />
                        <Services />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Index;
