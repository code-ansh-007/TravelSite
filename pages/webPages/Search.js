import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";

const searchResults = [
  {
    img: "https://links.papareact.com/xqj",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: 30,
    total: "£117 total",
    long: -0.0022275,
    lat: 51.5421655,
  },
  {
    img: "https://links.papareact.com/hz2",
    location: "Private room in center of London",
    title: "Independant luxury studio apartment",
    description:
      "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
    star: 4.3,
    price: 40,
    total: "£157 total",
    long: -0.095091,
    lat: 51.48695,
  },
  {
    img: "https://links.papareact.com/uz7",
    location: "Private room in center of London",
    title: "London Studio Apartments",
    description:
      "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
    star: 3.8,
    price: 35,
    total: "£207 total",
    long: -0.135638,
    lat: 51.521916,
  },
  {
    img: "https://links.papareact.com/6as",
    location: "Private room in center of London",
    title: "30 mins to Oxford Street, Excel London",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.1,
    price: 55,
    total: "£320 total",
    long: -0.069961,
    lat: 51.472618,
  },
  {
    img: "https://links.papareact.com/xhc",
    location: "Private room in center of London",
    title: "Spacious Peaceful Modern Bedroom",
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
    star: 5,
    price: 60,
    total: "£450 total",
    long: -0.08472,
    lat: 51.510794,
  },
  {
    img: "https://links.papareact.com/pro",
    location: "Private room in center of London",
    title: "The Blue Room In London",
    description:
      "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
    star: 4.23,
    price: 65,
    total: "£480 total",
    long: -0.094116,
    lat: 51.51401,
  },
  {
    img: "https://links.papareact.com/8w2",
    location: "Private room in center of London",
    title: "5 Star Luxury Apartment",
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 3.85,
    price: 90,
    total: "£650 total",
    long: -0.109889,
    lat: 51.521245,
  },
];

const Search = () => {
  const router = useRouter();
  // destructuring the router.query object to get the details passed by the user of the website which we can further used to make fetch queries to the server for rendering the available lands or hotels or some thing of that sort
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(
    new Date(parseInt(startDate)),
    "dd MMMM yy"
  );
  const formattedendDate = format(new Date(parseInt(endDate)), "dd MMMM yy");
  const range = `${formattedStartDate} to ${formattedendDate}`;

  //   console.log(searchResults);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-10 px-6">
          <p className="text-xs">
            Showing stays for {noOfGuests} {noOfGuests > 1 ? "guests" : "guest"}{" "}
            from - {range}
          </p>
          <h1 className="text-3xl mt-3 mb-6">Stays in {location}</h1>
          <div className="flex flex-col">
            {searchResults?.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
                long={item.long}
                lat={item.lat}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

// server side rendering function

// export async function getServerSideProps() {
//   const searchResults = await fetch("https://links.papareact.com/isz").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       searchResults,
//     },
//   };
// }
