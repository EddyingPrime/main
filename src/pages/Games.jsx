import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Games() {
    const [data, setGameData] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {
        },
        headers: {
          'X-RapidAPI-Key': '01ccb379c2mshcab4c4b3ada3b4bp17f1edjsn6e22b74878b4',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

      useEffect(() => {
        axios.request(options)
        .then((res) => {
            // Limit the data to the first 8 entries
            const limitedData = res.data.slice(0, 8);
            setGameData(limitedData);
        });
    }, []);
      


    return (
        <>
            <NavBar />
            <main className="flex justify-evenly">
                <div className="">
                    Filter Section
                </div>
                <div className="">
                    <div className="grid p-4 gap-x-4 gap-y-4
                            tablet:grid tablet:grid-cols-2
                            desktop:grid-cols-4">
                                {data.map((game, index) => (
                                    <div key={index} className="bg-white w-[240px] p-2 rounded drop-shadow-xl hover:scale-105 hover:ease-in-out">
                                        <img className="w-[250px] h-[160px] rounded" src={game.thumbnail} alt="" />
                                        <ul className="flex p-2 gap-2 justify-between">
                                            <li className="flex bg-dark rounded px-2 text-default items-center hover:bg-accent"><a className="text-sm font-Titilium" href="">{game.genre}</a></li>
                                            <li className="flex rounded px-2 text-smoke font-Titilium items-center">{game.platform}</li>
                                        </ul>
                                    </div>
                                ))}
                    </div>
                </div>
                <div className="">
                    Details
                </div>
            </main>
        </>
        

    )
}