import React from "react";
import Image from "next/image";
import logo from "../images/logo_tuc_2.png";
import { useState } from "react";
// importing the calendar date picker
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { SearchIcon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date()); // gives you today's date
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = () => {
    router.push({
      pathname: "/webPages/Search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(), // now this .toISOString method converts the date object to string and then passes it to the query field of the url of the page
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  const handleUserCLick = () => {
    router.push({
      pathname: "/webPages/login",
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
      {/* left section */}
      <div
        onClick={() => router.push("/")} // implementing the router provided by the nextjs framework, which pushes the current page aside to view to previous page
        className="relative flex items-center h-10 w-11 cursor-pointer my-auto"
      >
        <Image
          src={logo}
          layout="fill"
          objectFit="container"
          objectPosition="left"
        />
      </div>
      {/* mid section - search section */}
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="px-5 bg-transparent flex-grow outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder={placeholder || "Search"}
        />
        {/* search icon svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hidden md:inline-flex w-8 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        {/* search icon svg */}
      </div>
      {/* right section */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        {/* GLobe icon jsx */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 m-3 cursor-pointer hidden md:inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        {/* GLobe icon jsx */}
        <div className="flex items-center space-x-2 border-2 rounded-full p-1">
          {/* MenuIcon jsx */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:scale-110 transition transform duration-200 ease-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {/* MenuIcon jsx */}

          {/* userCircle icon jsx */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:scale-125 transition transform duration-200 ease-out"
            onClick={handleUserCLick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          {/* userCircle icon jsx */}
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#32a84e"]}
            onChange={handleSelect}
          />
          <div className="flex border-b-2 items-center ">
            {/* flex grow takes the maximum space an element can take */}
            <h1 className="text-2xl font-semibold flex-grow text-gray-600">
              Number of Guests
            </h1>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => {
                setNoOfGuests(e.target.value);
              }}
              type="number"
              className="w-12 pl-3 outline-none text-green-600"
              min={1}
            />
          </div>
          <div className="flex mx-auto space-x-64 mt-2">
            <button
              onClick={() => setSearchInput("")} // resets the search input to an empty string so that the search is cancelled
              className="text-red-400 hover:scale-105 hover:bg-red-100 px-2 py-1 rounded-lg transition transform duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={search}
              className="text-green-600 hover:scale-105 hover:bg-green-100 px-2 py-1 rounded-lg transition transform duration-150"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
