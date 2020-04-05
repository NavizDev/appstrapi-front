import "../public/assets/styles/tailwind.css";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Home = (props) => {
  return (
    <body className="bg-gray-300">
      <div className="flex bg-gray-100">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img className="h-10" src="/img/lgoo.svg" alt="Workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src="/img/beach.jpg"
              alt="Workcation"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl">
              Tou can work grom anywhere.
              <span className="block text-indigo-500">
                Take advantage of it
              </span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation
            </p>
            <div className="mt-4">
              <Link href="/dashboard" passHref>
                <a
                  className="inline-block px-4 py-2 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 focus:inline-none focus:shadow-outline text-sm text-white uppercase tracking-wider font-semibold sm:text-base"
                  href="#"
                >
                  Book your scape
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 h-full w-full object-center object-cover"
            src="/img/beach.jpg"
            alt="Workcation"
          />
        </div>
      </div>
    </body>
  );
};

Home.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default Home;
