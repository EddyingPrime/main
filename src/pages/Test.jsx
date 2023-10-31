

export default function  {
  const [gameData, setGameData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingCategory] = useState("alphabetical");
  const [searchQuery, setSearchQuery] = useState("");
  const cardsPerPage = 12;

  // const image = "/src/assets/Images/image.png";

  useEffect(() => {
    async function fetchGameData() {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: {
          "sort-by": "alphabetical",
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
        setOriginalData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchGameData();
  }, [sortingCategory]);

  // index range per current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  let currentCards = gameData.slice(indexOfFirstCard, indexOfLastCard);

  // Page
  const page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // sort latest
  const sort1 = () => {
    const sortData = [...originalData].sort((a, b) =>
      a.release_date > b.release_date ? -1 : 1
    );
    console.log(sortData);
    setGameData(sortData);
  };
  // previews latest
  const sort2 = () => {
    const sortData = [...originalData].sort((a, b) =>
      a.release_date > b.release_date ? 1 : -1
    );
    console.log(sortData);
    setGameData(sortData);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    initiateSearch();
  };

  const initiateSearch = () => {
    const query = searchQuery.toLowerCase();
    setSearchQuery(query);
    if (query == "") {
      setGameData(originalData);
    } else {
      setGameData(
        originalData.filter((data) => data.title.toLowerCase().includes(query))
      );
    }
  };
  return (
    <>
      <NavBar />
      <div className="tablet:mx-20 , phone:px-3">
        <div className="border bg-white">
          <div className="col-span-4  bg-accent">
            <div className="flex border">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-xs p-1 rounded-md bg-white focus:outline-none border m-2"
                />
                <button type="submit" style={{ display: "none" }}></button>
              </form>
              <button
                className={`bg-white text-xs m-2 p-1 rounded-md ${
                  sortingCategory === "alphabetical" ? "selected" : ""
                }`}
                onClick={() => sort1()}
              >
                Latest Release
              </button>
              <button
                className={`bg-white text-xs m-2 p-1 rounded-md ${
                  sortingCategory === "alphabetical" ? "selected" : ""
                }`}
                onClick={() => sort2()}
              >
                Previous Release
              </button>
            </div>
            <div className="flex justify-end border">
              <button
                onClick={() => page(currentPage - 1)}
                disabled={currentPage <= 1}
                className={`text-xs px-2 py-1 rounded-md bg-white focus:outline-none border m-2 ${
                  currentPage <= 1 ? "disabled" : ""
                }`}
              >
                &#60;
              </button>

              <div>
                {Array.from(
                  Array(Math.min(4, Math.ceil(gameData.length / cardsPerPage))),
                  (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => page(i + 1)}
                      className={`phone: text-xs px-2 py-1 rounded-md bg-white focus:outline-none border m-2 ${
                        i + 1 === currentPage ? "selected" : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  )
                )}
              </div>
              <button
                onClick={() => page(currentPage + 1)}
                disabled={
                  currentPage >= Math.ceil(gameData.length / cardsPerPage)
                }
                className={`text-xs px-2 py-1 rounded-md bg-white focus:outline-none border m-2 ${
                  currentPage >= Math.ceil(gameData.length / cardsPerPage)
                    ? "disabled"
                    : ""
                }`}
              >
                &#62;
              </button>
            </div>
          </div>


          <div className="col-span-4 m-6">
            <div className="grid row-4 mx-10 
            tablet:grid-cols-3 row-4 gap-10
            desktop:grid-cols-4
            ">
              {currentCards.map((game, index) => (
                <div key={index} className="p-2 bg-lgray rounded-2xl card">
                  <img
                    src={game.thumbnail}
                    alt={`Game ${index + 1}`}
                    className="object-cover w-full rounded-xl"
                  />



                  <div className=" mt-2 flex gap-1">
                    <span className="text-white m-0 p-1 border rounded-lg text-xs">
                      {game.genre}
                    </span>
                    <span className="text-white m-0 p-1 border rounded-lg text-xs">
                      {game.platform}
                    </span>
                  </div>


                  <div className="hover-content p-4 text-white rounded-2xl">
                    <a href={game.game_url} target="_blank" rel="noreferrer">
                      <h3 className="text-xl font-bold py-5">{game.title}</h3>
                      <p className="text-xs font-bold">
                        {game.short_description}
                      </p>
                      <p className="text-xm py-4">{game.publisher}</p>
                      <span className="text-xs">{game.release_date}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4 flex gap-2 border bg-accent">
            <button
              onClick={() => page(currentPage - 1)}
              disabled={currentPage <= 1}
              className={`text-xs px-2 py-1 rounded-md bg-white focus:outline-none border m-2 ${
                currentPage <= 1 ? "disabled" : ""
              }`}
            >
              &#60;
            </button>
            <div>
              {Array.from(
                Array(Math.min(4, Math.ceil(gameData.length / cardsPerPage))),
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => page(i + 1)}
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
              onClick={() => page(currentPage + 1)}
              disabled={
                currentPage >= Math.ceil(gameData.length / cardsPerPage)
              }
              className={`text-xs px-2 py-1 rounded-md bg-white focus:outline-none border m-2 ${
                currentPage >= Math.ceil(gameData.length / cardsPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              &#62;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
