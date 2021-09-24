import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCards from "../components/MediumCards";
import SmallCards from "../components/SmallCards";
import Footer from "../components/Footer";

export default function Home({ smallCardData, mediumCardData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smallCardData?.map(({ img, location, distance }) => (
              <SmallCards
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">
            {mediumCardData?.map(({ img, title }) => (
              <MediumCards key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <section className="pt-6 mt-10  ">
        <Footer />
      </section>
    </div>
  );
}
export async function getStaticProps() {
  const smallCardData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const mediumCardData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return {
    props: { smallCardData, mediumCardData }, // will be passed to the page component as props
  };
}
