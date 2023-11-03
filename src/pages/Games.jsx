import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Games() {
    const [data, setGameData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 20;
    const [selectedGenre, setSelectedGenre] = useState("all"); // State to store selected genre

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {},
        headers: {
            'X-RapidAPI-Key': '01ccb379c2mshcab4c4b3ada3b4bp17f1edjsn6e22b74878b4',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options)
            .then((res) => {
                setGameData(res.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const filteredGames = selectedGenre === 'all' ? data : data.filter(game => game.genre === selectedGenre);

    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleFilterChange = (event) => {
        setCurrentPage(1); // Reset page when changing filter
        setSelectedGenre(event.target.value);
    };

    return (
        <>
            <NavBar />
            <main className="flex justify-evenly mt-10">
                <div className="">
                    <select onChange={handleFilterChange} value={selectedGenre}>
                        <option value="all">All Genres</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Shooter">Shooter</option>
                        {/* Add other genre options here */}
                    </select>
                </div>
                <div className="">
                    <div className="grid p-4 gap-x-4 gap-y-4 tablet:grid tablet:grid-cols-2 desktop:grid-cols-4">
                        {filteredGames.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage).map((game, index) => (
                            <div key={index} className="bg-white w-[260px] p-2 rounded drop-shadow-xl hover:scale-105 hover:ease-in-out">
                                <img className="w-[250px] h-[160px] rounded" src={game.thumbnail} alt="" />
                                <ul className="flex p-2 gap-2">
                                    <li className="flex border-[0.01rem] border-accent rounded px-2 text-dark text-[10px] font-Titilium items-center hover:bg-accent">
                                        <a href="">{game.genre}</a>
                                    </li>
                                    <li className="flex border-[0.01rem] border-accent rounded px-2 text-dark text-[10px] font-Titilium items-center hover:bg-accent">
                                        {game.platform}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center space-x-2">
                        {currentPage > 1 && (
                            <button onClick={handlePrevPage}>Previous</button>
                        )}
                        {[...Array(totalPages).keys()].map((index) => {
                            const pageNumber = currentPage + index;
                            return (
                                <button
                                    key={index + 1}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`px-3 py-1 rounded focus:outline-none ${currentPage === pageNumber ? 'bg-accent text-white' : ''}`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                        {currentPage < totalPages && (
                            <button onClick={handleNextPage}>Next</button>
                        )}
                    </div>
                </div>
                <div className="">
                    Details
                </div>
            </main>
        </>
    );
}
