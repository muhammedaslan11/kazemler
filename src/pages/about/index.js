import React from 'react';
import SeoHead from '../../components/SeoHead';
import Layout from '../../components/Layout/Layout';

const About = () => {
    return (
        <>
            <SeoHead title={'Hakkımızda | KAZEMLER'} />
            <Layout>
                <div className='relative overflow-hidden text-white py-20 px-6'>
                    <div className='absolute inset-0 opacity-20 bg-cover bg-center' style={{ backgroundImage: 'url(/images/plazas.jpg)' }}></div>
                    <div className='relative max-w-5xl mx-auto text-center'>
                        <br />
                        <br />
                        <br />
                        <h1 className='text-5xl font-extrabold my-6 animate-fade-in'>Biz Kimiz?</h1>
                        <p className='text-xl leading-8 mb-10 animate-slide-up'>
                            <strong>KAZEMLER</strong> olarak, ihtiyaçlarınıza özel, sorunsuz ve keyifli bir deneyim sunuyoruz.
                            Danışmanlık, üretim ve ticaret alanlarında uzmanlaşarak sektörde yenilik ve mükemmeliyetin öncüsüyüz.
                        </p>
                        <img src='/images/busnss.jpg' alt='Misyonumuz' className='w-full h-auto rounded-2xl shadow-lg mb-10' />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-left animate-slide-up'>
                            <div>
                                <h2 className='text-3xl font-bold mb-4'>Misyonumuz</h2>
                                <p className='text-lg leading-7'>
                                    İşletmelere büyüme, yenilik ve kalıcı başarı sağlayan çözümler sunmak.
                                    Kalite, dürüstlük ve güçlü iş ortaklıklarını ön planda tutuyoruz.
                                </p>
                                <img style={{ width: '500px', height: '400px', objectFit: 'contain' }} src='/images/kazemler_logo.png' alt='Misyon' className='w-full h-auto rounded-2xl shadow-lg my-6' />
                            </div>
                            <div>
                                <h2 className='text-3xl font-bold mb-4'>Vizyonumuz</h2>
                                <p className='text-lg leading-7'>
                                    Danışmanlık, üretim ve ticaret sektörlerinde yenilikçi yaklaşımı ve etkili çözümleriyle tanınan global bir lider olmak.
                                </p>
                                <img style={{ width: '500px', height: '400px', objectFit: 'contain' }} src='/images/HugeGlobal.svg' alt='Vizyon' className='w-full h-auto rounded-2xl shadow-lg my-6' />
                            </div>
                        </div>
                        <img src='/images/plazas.jpg' alt='Ekibimiz' className='w-full h-auto rounded-2xl shadow-lg my-10' />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;
