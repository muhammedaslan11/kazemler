import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/Layout";
import Services from "../components/Services";
import SeoHead from "@/components/SeoHead";
import Map from "@/components/Map";

export default function Home() {
  return (
    <>
      <SeoHead title='KAZEMLER' />
      <Layout>
        <Hero />
        <Feature />
        <Services />
        <Map />
      </Layout>
    </>
  );
}
