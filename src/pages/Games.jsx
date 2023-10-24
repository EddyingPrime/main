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
    <div className=" grid col-4 gap-4 mx-3 px-3">
      <div className="p-8 text-center col-span-4">
        <img src={"/"} className="" />
      </div>
      <div className="col-span-4 flex gap-2">
        <select
          value={currentPage}
          onChange={(e) => paginate(Number(e.target.value))}
          className="text-xs px-1 py-1 rounded-md bg-whitefocus:outline-none border"
        >
          {Array.from(
            Array(Math.ceil(gameData.length / cardsPerPage)),
            (_, i) => (
              <option key={i + 1} value={i + 1}>
                Page {i + 1}
              </option>
            )
          )}
        </select>
        <select
          value={sortingCategory}
          onChange={(e) => setSortingCategory(e.target.value)}
          className="text-xs px-1 py-1 rounded-md bg-whitefocus:outline-none border"
        >
          <option value="alphabetical">Sort by Name</option>
          <option value="genre">Sort by Genre</option>
          <option value="release_date">Sort by Date</option>
        </select>
      </div>
      <div className="grid grid-rows-2 col-span-1 gap-4">
        <div className="p-2 text-center"></div>

        <div className="p-2 text-center">
          <img src={"/"} className="" />
        </div>
      </div>
      <div className="tablet:col-span-3">
        <div className="grid desktop:grid-cols-4 row-4, tablet:grid-cols-3 row-3  gap-10">
          {currentCards.map((game, index) => (
            <div key={index} className="p-2 bg-dark">
              <a href={game.game_url} target="_blank" rel="noreferrer">
                <img
                  src={game.thumbnail}
                  alt={`Game ${index + 1}`}
                  className="object-cover w-full"
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
      <div className="col-span-4">
        <select
          value={currentPage}
          onChange={(e) => paginate(Number(e.target.value))}
          className="text-xs px-1 py-1 rounded-md bg-whitefocus:outline-none border"
        >
          {Array.from(
            Array(Math.ceil(gameData.length / cardsPerPage)),
            (_, i) => (
              <option key={i + 1} value={i + 1}>
                Page {i + 1}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}
