import React from 'react';
import SeoHead from '../../components/SeoHead';
import Layout from '../../components/Layout/Layout';

const Privacy = () => {
    const policies = [
        {
            title: 'Veri Toplama',
            description: 'Platformumuzda daha iyi hizmet verebilmek ve deneyiminizi geliştirebilmek için yalnızca gerekli verileri topluyoruz. Bunlar kişisel bilgiler, kullanım verileri ve iletişim tercihlerini içerir.'
        },
        {
            title: 'Veri Kullanımı',
            description: 'Verileriniz, hizmetlerimizi iyileştirmek, deneyiminizi kişiselleştirmek ve önemli güncellemeleri iletmek için kullanılır. Verilerinizi izniniz olmadan üçüncü taraflarla paylaşmıyoruz.'
        },
        {
            title: 'Veri Koruma',
            description: 'Gizliliğinizi öncelikli tutuyor ve verilerinizi yetkisiz erişim, sızıntı ve kötüye kullanımdan korumak için tüm gerekli önlemleri alıyoruz.'
        },
        {
            title: 'Haklarınız',
            description: 'Kişisel verilerinize erişme, güncelleme veya silme hakkına sahipsiniz. Bu tür talepleriniz için lütfen bizimle iletişime geçin.'
        }
    ];

    return (
        <>
            <SeoHead title={'Gizlilik Politikası | KAZEMLER'} />
            <Layout>
                <div className='relative overflow-hidden text-white py-20 px-6'>
                    <div className='absolute inset-0 opacity-20 bg-cover bg-center' style={{ backgroundImage: 'url(/images/plazas.jpg)' }}></div>
                    <div className='relative max-w-5xl mx-auto text-center'>
                        <h1 className='text-5xl font-extrabold my-6 animate-fade-in'>Gizlilik Politikası</h1>
                        <p className='text-xl leading-8 mb-10 animate-slide-up'>
                            <strong>KAZEMLER</strong> olarak gizliliğinize önem veriyoruz. Kişisel bilgilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi edinin.
                        </p>
                        <img src='/images/cont.jpg' alt='Gizlilik' className='w-full h-auto rounded-2xl shadow-lg mb-10' />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-left animate-slide-up'>
                            {policies.map((policy, index) => (
                                <div key={index} className='bg-white/5 p-6 rounded-2xl shadow-lg'>
                                    <h2 className='text-3xl font-bold mb-4'>{policy.title}</h2>
                                    <p className='text-lg leading-7'>{policy.description}</p>
                                </div>
                            ))}
                        </div>
                        <img src='/images/plazas.jpg' alt='Ekibimiz' className='w-full h-auto rounded-2xl shadow-lg my-10' />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Privacy;
