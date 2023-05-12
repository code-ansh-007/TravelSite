import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import styles from "../styles/Home.module.css";

const exploreData = [
  {
    img: "https://links.papareact.com/5j2",
    location: "London",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/1to",
    location: "Manchester",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/40m",
    location: "Liverpool",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/msp",
    location: "York",
    distance: "4-hour drive",
  },
  {
    img: "https://links.papareact.com/2k3",
    location: "Cardiff",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/ynx",
    location: "Birkenhead",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/kji",
    location: "Newquay",
    distance: "6-hour drive",
  },
  {
    img: "https://links.papareact.com/41m",
    location: "Hove",
    distance: "2-hour drive",
  },
];

const cardsData = [
  {
    img: "https://links.papareact.com/2io",
    title: "Outdoor getaways",
  },
  {
    img: "https://links.papareact.com/q7j",
    title: "Unique stays",
  },
  {
    img: "https://links.papareact.com/s03",
    title: "Entire homes",
  },
  {
    img: "https://links.papareact.com/8ix",
    title: "Pet allowed",
  },
];

export default function Home() {
  //destructuring the props passing value returned by the getStaticProps function
  return (
    <div className="">
      <Head>
        <title>The Unorganized Camper</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-10">
        {/* small cards sub section of the maon section */}
        <section className="pt-6">
          <h2 className="text-3xl pb-5 font-semibold text-gray-700">
            Explore Nearby
          </h2>
          {/* pull some stuff from the server, for server side rendering */}
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        {/* medium cards sub section of the main section */}

        <section>
          <h2 className="text-3xl py-8 font-semibold text-gray-700">
            Explore Anywhere
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-4">
            {cardsData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          desc="Wishlists curated by The Unorganized Camper"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

// server side rendering function(commented now due to errors related to accessing the json file in the link provided my papareact

// export async function getStaticProps() {
//   // const exploreData = await fetch("https://links.papareact.com/pyp").then(
//   //   (res) => res.json()
//   // );

//   // const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
//   //   res.json()
//   // );

//   return {
//     props: {
//       // exploreData,
//       // cardsData,
//     },
//   };
// }
