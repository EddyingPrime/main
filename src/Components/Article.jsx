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
            desktop:flex desktop:justify-evenly">
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
                            <div className="mt-4 w-[420px]">
                                <h3 className="font-Titilium text-lg">Latest Post</h3>
                                <div className="flex mb-4 items-center justify-between">
                                    <div>
                                        <img className="w-[120px] h-[100px] rounded" src="src/assets/Images/eclipse.jpg" alt="" />
                                    </div>
                                    <div className="w-[280px]">
                                        <ul>
                                            <li className="text-accent text-[12px] font-Titilium">November 5, 2023</li>
                                            <li className="text-[16px] font-Titilium">Eclipse Horizon</li>
                                            <li className="text-[14px]">Unveiling the Latest Gameplay Trailer and Beta Testing</li>
                                            <li className="text-smoke text-[14px] font-Titilium">By MMOByte</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex my-4 items-center justify-between">
                                    <div>
                                        <img className="w-[120px] h-[100px] rounded" src="src/assets/Images/bp.jpg" alt="" />
                                    </div>
                                    <div className="w-[280px]">
                                        <ul>
                                            <li className="text-accent text-[12px] font-Titilium">October 30, 2023</li>
                                                <li className="text-[16px] font-Titilium">Blue Protocol</li>
                                                <li className="text-[14px]">Exclusive Interview with Lead Game Developer - Insights and Sneak Peak</li>
                                                <li className="text-smoke text-[14px] font-Titilium">By IGN</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex my-4 items-center justify-between">
                                    <div>
                                        <img className="w-[120px] h-[100px] rounded" src="src/assets/Images/apex.jpg" alt="" />   
                                    </div>
                                    <div className="w-[280px]">
                                        <ul>
                                            <li className="text-accent text-[12px] font-Titilium">October 28, 2023</li>
                                            <li className="text-[16px] font-Titilium">Apex Havoc: Redux</li>
                                            <li className="text-[14px]">Gameplay Changes and Community Reactions</li>
                                            <li className="text-smoke text-[14px] font-Titilium">By MMOBomb</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-4">
                                <h3 className="font-Titilium text-lg">Latest Comments</h3>
                                <div className="flex items-center gap-4 border-b border-smoke p-2">
                                    <div>
                                        <img className="w-16 h-16 rounded-full mb-2" src="src/assets/Images/eternal.png" alt="" />
                                    </div>
                                    <div className="w-[280px] h-20 overflow-hidden">
                                        <ul>
                                            <li className="font-Titilium">SapphireGamer88</li>
                                            <li className="font-Titilium text-[12px]">"Just discovered a hidden Easter egg in my favorite game! 🎮🕹️"</li>
                                            <li className="text-accent text-[12px]">November 2, 2023</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-b border-smoke p-2">
                                    <div>
                                        <img className="w-16 h-16 rounded-full mb-2" src="src/assets/Images/eternal.png" alt="" />
                                    </div>
                                    <div className="w-[280px] h-20 overflow-hidden">
                                        <ul>
                                            <li className="font-Titilium">QuantumQuester</li>
                                            <li className="font-Titilium text-[12px]">"Spent the whole weekend in a gaming marathon. No regrets."</li>
                                            <li className="text-accent text-[12px]">November 2, 2023</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-b border-smoke p-2">
                                    <div>
                                        <img className="w-16 h-16 rounded-full mb-2" src="src/assets/Images/eternal.png" alt="" />
                                    </div>
                                    <div className="w-[280px] h-20 overflow-hidden">
                                        <ul>
                                            <li className="font-Titilium">NovaPulse67</li>
                                            <li className="font-Titilium text-[12px]">"The soundtrack of this game is pure gold! It's like the music takes you on 🎵🎮"</li>
                                            <li className="text-accent text-[12px]">November 2, 2023</li>
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