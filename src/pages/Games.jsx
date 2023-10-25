import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Games() {
  const [gameData, setGameData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingCategory, setSortingCategory] = useState("alphabetical");
  const cardsPerPage = 12;

  useEffect(() => {
    async function fetchGameData() {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: {
          "sort-by": sortingCategory,
        },
        headers: {
          "X-RapidAPI-Key":
            "b3e8d8175emshef7f44fe5460655p158376jsn3e1860802868",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setGameData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchGameData();
  }, [sortingCategory]);

  // index range per current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = gameData.slice(indexOfFirstCard, indexOfLastCard);

  //  Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <NavBar />
      <div className=" grid col-4 gap-4 mx-3 px-3">
        <div className="p-8 text-center col-span-4">
          <img src={"/"} className="" />
        </div>
        <div className="col-span-4 flex gap-2 justify-end">
          <div className="col-span-4 flex gap-2">
            <div>
              {Array.from(
                Array(Math.min(4, Math.ceil(gameData.length / cardsPerPage))),
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`text-xs px-2 py-1 rounded-md bg-white focus:outline-none border m-2 ${
                      i + 1 === currentPage ? "selected" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage >= Math.ceil(gameData.length / cardsPerPage)
              }
              className={`text-xs px-2 py-1 rounded-md bg-white focus:outline-none border m-2 ${
                currentPage >= Math.ceil(gameData.length / cardsPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2 col-span-1 gap-4 ">
          <ul className="">
            <li>
              {" "}
              <button
                className={`text-m px-2 py-1 rounded-md bg-white focus:outline-none  ${
                  sortingCategory === "alphabetical" ? "selected" : ""
                }`}
                onClick={() => setSortingCategory("alphabetical")}
              >
                Sort by Name
              </button>
            </li>
            <li>
              {" "}
              <button
                className={`text-m px-2 py-1 rounded-md bg-white focus:outline-none  ${
                  sortingCategory === "genre" ? "selected" : ""
                }`}
                onClick={() => setSortingCategory("genre")}
              >
                Sort by Genre
              </button>
            </li>
            <li>
              {" "}
              <button
                className={`text-m px-2 py-1 rounded-md bg-white focus:outline-none ${
                  sortingCategory === "release_date" ? "selected" : ""
                }`}
                onClick={() => setSortingCategory("release_date")}
              >
                Sort by Date
              </button>
            </li>
          </ul>
          <div className="p-2 text-center">
            <img src={"/"} className="" />
          </div>
        </div>
        <div className="tablet:col-span-3">
          <div className="grid desktop:grid-cols-4 row-4, tablet:grid-cols-3 row-3 gap-10">
            {currentCards.map((game, index) => (
              <div key={index} className="p-2 bg-dark rounded-2xl">
                <a href={game.game_url} target="_blank" rel="noreferrer">
                  <img
                    src={game.thumbnail}
                    alt={`Game ${index + 1}`}
                    className="object-cover w-full rounded-xl"
                  />
                </a>
                <div className="mt-2 flex gap-1">
                  <span className="text-white m-0 p-1 border rounded-lg text-xs">
                    {game.genre}
                  </span>
                  <span className="text-white m-0 p-1 border rounded-lg text-xs">
                    {game.platform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 flex gap-2">
          <div>
            {Array.from(
              Array(Math.min(4, Math.ceil(gameData.length / cardsPerPage))),
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`text-xs px-2 py-1 rounded-md bg-white focus:outline-none border m-2 ${
                    i + 1 === currentPage ? "selected" : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage >= Math.ceil(gameData.length / cardsPerPage)}
            className={`text-xs px-2 py-1 rounded-md bg-white focus:outline-none border m-2 ${
              currentPage >= Math.ceil(gameData.length / cardsPerPage)
                ? "disabled"
                : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
