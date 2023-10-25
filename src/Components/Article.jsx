export default function Article() {
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
                        <marquee direction="left" scrollamount="12">
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
            <section className="flex">
                <div className="grid grid-cols-2 row-span-2 w-3/4 h-[800px]">
                    <div className="flex items-center justify-center">
                        <div>Sample</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div>Sample</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div>Sample</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div>Sample</div>
                    </div>
                </div>
                <div className="w-1/4 h-[800px] mt-10">
                    <input type="text" placeholder="search p-2" />
                    <div className="mt-4">
                        <h3>Latest Post</h3>
                        <div className="flex my-4">
                            <img src="src/assets/Icons/Mac.png" alt="" />
                            <div>
                                <div>Date</div>
                                <div>Game Name</div>
                                <div>Context</div>
                                <div>Posted By</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="src/assets/Icons/Mac.png" alt="" />
                            <div>
                                <div>Date</div>
                                <div>Game Name</div>
                                <div>Context</div>
                                <div>Posted By</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="src/assets/Icons/Mac.png" alt="" />
                            <div>
                                <div>Date</div>
                                <div>Game Name</div>
                                <div>Context</div>
                                <div>Posted By</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3>Latest Comments</h3>
                        <div className="flex border-b-2 border-white">
                            <img src="src/assets/Icons/Mac.png" alt="" />
                            <div>
                                <div>UserName</div>
                                <div>Comment</div>
                                <div>Date</div>
                            </div>
                        </div>
                        <div className="flex border-b-2 border-white">
                        <img src="src/assets/Icons/Mac.png" alt="" />
                            <div>
                                <div>UserName</div>
                                <div>Comment</div>
                                <div>Date</div>
                            </div>
                        </div>
                        <div className="flex border-b-2 border-white">
                        <img src="src/assets/Icons/Mac.png" alt="" />
                            <div>
                                <div>UserName</div>
                                <div>Comment</div>
                                <div>Date</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}