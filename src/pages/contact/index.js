import Newsletter from "@/components/Newsletter";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";

export default function Contact() {
  return (
    <>
      <SeoHead title='İletişim | KAZEMLER' />
      <Layout>
        <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/images/plazas.jpg)' }} >
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative max-w-6xl mx-auto px-4 py-12">
            <br />
            <br />
            <br />
            <h1 className="text-5xl font-extrabold my-6 animate-fade-in text-center">Contact</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6012.077387818447!2d28.987268000000004!3d41.111846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab54b7efb98d5%3A0xac34d0462f5f7c92!2sBili%C5%9Fim%20Vadisi%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1744546548781!5m2!1str!2str"
                  className="w-full h-96 rounded-xl border"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-6 text-white">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="text-lg">
                  You can contact us using the information below.
                </p>
                <div className="space-y-2 text-base">
                  <p>
                    <span className="font-semibold">Address:</span><br />
                    Ayazağa District, Kemerburgaz Street, Informatics Valley Building, No: 7A, Floor: 7, 34396, Sarıyer / Istanbul
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span><br />
                    <a href="tel:+902122223344" className="text-blue-300 hover:underline">
                      +90 532 411 06 64</a>
                  </p>
                  <p>
                    <span className="font-semibold">E-Mail:</span><br />
                    <a href="mailto:info@kazemler.com" className="text-blue-300 hover:underline">
                      info@kazemler.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
