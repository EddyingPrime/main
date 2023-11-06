import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Counter from "../Components/Counter";
import Footer from "../Components/Footer";

const Forum = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState({ title: "" });
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const savedThreads = JSON.parse(localStorage.getItem("threads")) || [];
    setThreads(savedThreads);
  }, []);

  useEffect(() => {
    localStorage.setItem("threads", JSON.stringify(threads));
  }, [threads]);

  const handleCreateThread = () => {
    if (newThread.title.trim() !== "") {
      const newThreads = [
        ...threads,
        {
          title: newThread.title,
          comments: [],
          id: Date.now(),
        },
      ];
      setThreads(newThreads);
      setNewThread({ title: "" });
      setShowInput(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="tablet:mx-20 my-5 , phone:px-3">
        <div className="container mx-auto p-4 drop-shadow-xl">
          <h1 className="text-2xl font-bold mb-4">Forum Page</h1>
          <div className="mb-4">
            {showInput ? (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Thread title"
                  className="w-full p-2 border rounded"
                  value={newThread.title}
                  onChange={(e) =>
                    setNewThread({ ...newThread, title: e.target.value })
                  }
                />
                <button
                  className="bg-accent text-white font-semibold py-2 px-4 rounded mt-2"
                  onClick={handleCreateThread}
                >
                  Create Thread
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowInput(true)}
                className="bg-accent text-white font-semibold py-2 px-4 rounded"
              >
                Create Thread
              </button>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold">Threads:</h2>
            <ul>
              {threads.map((thread) => (
                <li key={thread.id}>
                  <div className="bg-white p-4 border rounded m-2 flex justify-between items-center">
                    <Link
                      to={`#/${thread.id}`}
                      className="text-xl font-semibold hover:underline"
                    >
                      {thread.title}
                    </Link>
                    <Counter />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Forum;
