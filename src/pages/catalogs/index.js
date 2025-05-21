import React from 'react';
import SeoHead from '../../components/SeoHead';
import Layout from '../../components/Layout/Layout';

const catalogs = [
    {
        id: 1,
        title: 'Barcode Katalog',
        description: 'Barcode ürünlerimiz ve detaylı bilgiler.',
        fileUrl: '/files/barcode-catalog.pdf',
    },
    {
        id: 2,
        title: 'Exoiste Katalog',
        description: 'Exoiste ürünlerimiz hakkında kapsamlı bilgi.',
        fileUrl: '/files/exoiste-catalog.pdf',
    },
    {
        id: 3,
        title: 'Jolib Katalog',
        description: 'Jolib serimizin katalog bilgileri.',
        fileUrl: '/files/jolib-catalog.pdf',
    },
    {
        id: 4,
        title: 'MOV Katalog',
        description: 'MOV ürünlerine dair bilgiler bu katalogda.',
        fileUrl: '/files/mov-catalog.pdf',
    },
    {
        id: 5,
        title: 'OrganixLab Katalog',
        description: 'OrganixLab markasına ait ürün katalogları.',
        fileUrl: '/files/organixlab-catalog.pdf',
    },
    {
        id: 6,
        title: 'Amino Acid Mineral (Scorpion Venom) Liquid',
        description: 'Sıvı formda amino asit ve mineral içeren özel ürünümüz.',
        fileUrl: '/files/amino-acid-mineral-scorpion-venom-liquid.pdf',
    },
    {
        id: 7,
        title: 'Amino Acid Mineral (Scorpion Venom) Powder',
        description: 'Toz formda amino asit ve mineral bazlı ürünümüz.',
        fileUrl: '/files/amino-acid-mineral-scorpion-venom-powder.pdf',
    },
];


const Catalogs = () => {
    return (
        <>
            <SeoHead title={'Kataloglar | KAZEMLER'} />
            <Layout>
                <div className='relative overflow-hidden text-white py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen'>
                    <div
                        className='absolute inset-0 opacity-30 bg-cover bg-center'
                        style={{ backgroundImage: 'url(/images/plazas.jpg)' }}
                    ></div>
                    <div className='relative max-w-5xl mx-auto text-center z-10'>
                        <h1 className='text-5xl font-extrabold my-6 tracking-wide animate-fade-in'>Kataloglar</h1>

                        <div className='mt-12 grid gap-8 md:grid-cols-3'>
                            {catalogs.map((catalog) => (
                                <div
                                    key={catalog.id}
                                    className='bg-gray-900 bg-opacity-95 rounded-xl p-8 text-left shadow-lg flex flex-col justify-between hover:shadow-[#DF9958] transition-shadow duration-300'
                                >
                                    <div>
                                        <h2 className='text-2xl font-semibold mb-3 text-[#DF9958]'>{catalog.title}</h2>
                                        <p className='text-gray-400 mb-6'>{catalog.description}</p>
                                    </div>
                                    <a
                                        href={catalog.fileUrl}
                                        download
                                        className='inline-block self-start bg-[#DF9958] hover:bg-yellow-600 transition px-6 py-3 rounded-md text-white font-semibold shadow-md'
                                    >
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Catalogs;
