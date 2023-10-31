import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Article() {
    const [data, setGameData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

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
            <div className="flex">
                <div className="w-1/4 bg-accent text-default text-sm h-14 flex items-center justify-center
                tablet:justify-end tablet:pr-4
                desktop:pr-10
                ">LATEST NEWS</div>
                <div className="w-3/4 bg-dark text-default text-sm h-14 flex items-center">
                    <div className="flex p-2 w-[370px] items-center overflow-hidden whitespace-nowrap text-ellipsis
                    tablet:w-[900px] 
                    desktop:w-full
                    ">
                        <marquee direction="left">
                            <div className="flex flex-row items-center">
                                <h5 className="bg-accent ml-2 px-2">RACING</h5>
                                <p className="p-1
                                tablet:p-4
                                desktop:p-2
                                ">Exciting New Racing Game 'Speed Rivals' Announced at E3 2023.</p>
                                <h5 className="bg-accent ml-2 px-2">RACING</h5>
                                <p className="p-1
                                tablet:p-4
                                desktop:p-2
                                ">Exciting New Racing Game 'Speed Rivals' Announced at E3 2023.</p>
                                <h5 className="bg-accent ml-2 px-2">RACING</h5>
                                <p className="p-1
                                tablet:p-4
                                desktop:p-2
                                ">Exciting New Racing Game 'Speed Rivals' Announced at E3 2023.</p>
                            </div>
                        </marquee>
                    </div>
                </div>
            </div>
            <section className="
            desktop:flex desktop:justify-around">
                <div className="flex justify-center">
                    <div>
                        <h3 className="text-lg font-Titilium mt-10 pl-2 mb-2">Featured Games</h3>
                        <div className="grid gap-y-4
                        tablet:grid tablet:grid-cols-2 tablet:gap-10
                        desktop:grid-cols-4">
                            {data.map((game, index) => (
                                <div key={index} className="bg-white w-[260px] p-3 rounded drop-shadow-xl hover:scale-105 hover:ease-in-out">
                                    <img className="w-[250px] h-[160px] rounded" src={game.thumbnail} alt="" />
                                    <h4 className="text-[16px] font-Titilium pl-3 pt-2 pb-1">{game.title}</h4>
                                    <p className="text-smoke text-sm pl-3 h-[120px] leading-tight">{game.short_description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-center
                desktop:h-[780px] desktop:w-1/4
                ">
                    <div>
                        <div className="flex items-center relative">
                            <form onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    placeholder=" Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className=" border-smoke border-[0.01rem] rounded w-[300px]"
                                />
                                <button type="submit" style={{ display: "none" }}></button>
                            </form>
                            <img className="absolute right-2" src="src/assets/Images/search-logo.png" alt="" />
                        </div>
                        <div>
                            <div className="mt-4">
                                <h3 className="font-Titilium">Latest Post</h3>
                                <div className="flex my-4 items-center gap-4">
                                    <div>
                                        <img className="w-[110px] h-[90px]" src="src/assets/Images/eternal.png" alt="" />
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Date</li>
                                            <li>Game Name</li>
                                            <li>Context</li>
                                            <li>Posted By</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex my-4 items-center gap-4">
                                    <div>
                                        <img className="w-[110px] h-[90px]" src="src/assets/Images/eternal.png" alt="" />
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Date</li>
                                            <li>Game Name</li>
                                            <li>Context</li>
                                            <li>Posted By</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex my-4 items-center gap-4">
                                    <div>
                                        <img className="w-[110px] h-[90px]" src="src/assets/Images/eternal.png" alt="" />
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Date</li>
                                            <li>Game Name</li>
                                            <li>Context</li>
                                            <li>Posted By</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-4 w-[300px]">
                                <h3 className="font-Titilium">Latest Comments</h3>
                                <div className="flex border-b-[0.1rem] border-smoke p-2 my-4 items-center gap-4">
                                    <img className="w-[60px] h-[60px] rounded-full" src="src/assets/Images/eternal.png" alt="" />
                                    <div>
                                        <ul>
                                            <li>UserName</li>
                                            <li>Comment</li>
                                            <li>Date</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex border-b-[0.1rem] border-smoke p-2 my-4 items-center gap-4">
                                    <img className="w-[60px] h-[60px] rounded-full" src="src/assets/Images/eternal.png" alt="" />
                                    <div>
                                        <ul>
                                            <li>UserName</li>
                                            <li>Comment</li>
                                            <li>Date</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex border-b-[0.1rem] border-smoke p-2 my-4 items-center gap-4">
                                    <img className="w-[60px] h-[60px] rounded-full" src="src/assets/Images/eternal.png" alt="" />
                                    <div>
                                        <ul>
                                            <li>UserName</li>
                                            <li>Comment</li>
                                            <li>Date</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}