import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Map from "../components/Map";
import { format } from "date-fns";

function Search({ searchResults }) {
  const router = useRouter();
  //ES6 destructuring
  const { location, startDate, endDate, numberGuests } = router.query;
  const formatedStartedDate = format(new Date(startDate), "dd MMMM yy");
  const formatedendDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartedDate} - ${formatedendDate} `;

  return (
    <div className="">
      <Header
        placeholder={`${location} | ${range} | ${numberGuests} guests `}
      />
      <main className=" flex ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            300+ Stays - {range} for
            {numberGuests} of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>
          <div className=" hidden lg:flex space-x-3 text-gray-800 whitespace-nowrap mb-5">
            <p className="button">Cancelation Flexibility</p>
            <p className="button ">Type of place</p>
            <p className="button">price</p>
            <p className="button ">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className=" flex  flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <SearchResults
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
