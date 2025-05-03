import React from 'react'
import SeoHead from '../../components/SeoHead'
import Layout from '../../components/Layout/Layout'

const About = () => {
    return (
        <>
            <SeoHead title={'Hakkımızda | KAZEMLER'} />
            <Layout>
                <div className='max-w-5xl lg:mx-auto lg:mr-auto px-4 py-12 md:mx-6 md:mr-6 sm:mx-5 sm:mr-5 xs:mr-5'>
                    <h1 className='text-4xl font-bold text-center mb-10'>About Us | Who we are?</h1>
                    <div className='flex items-center text-lg'>
                        <div>
                            <p className='leading-8 mb-5 text-xl'>
                                We provide a seamless and enjoyable experience
                                for all your needs. Explore unique features
                                with <strong className='font-bold'>KAZEMLER</strong>.
                            </p>
                            <p className='leading-8 text-xl'>
                                Explore our features to boost
                                your business with powerful solutions tailored
                                to your needs. Operating in the fields of
                                consulting, production, and trade, <strong className='font-bold'>KAZEMLER</strong> is
                                a pioneer in the industry with strong partnerships and an innovative approach.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About