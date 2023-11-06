import { useState } from "react";
import { Link } from "react-router-dom";

const Replies = () => {
  const [reply, setReply] = useState("");

  const handleSubmitReply = (e) => {
    e.preventDefault();
    console.log({ reply });
    setReply("");
  };

  return (
    <>
      <div className="container mx-auto py-2">
        <button className="bg-accent text-white font-semibold py-2 px-4 rounded">
          <Link to="/Forums">&#x2190;</Link>
        </button>
      </div>
      <form
        className="container mx-auto p-4 drop-shadow-xl"
        onSubmit={handleSubmitReply}
      >
        <label htmlFor="reply" className="text-sm font-medium ">
          <h1 className="my-5 mx-5 font-bold">Reply to the thread</h1>
        </label>
        <textarea
          rows={5}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          type="text"
          name="reply"
          className="mt-1 p-2 mx-5 rounded-md shadow-sm w-full"
        />
        <div className="my-4 mx-5 ">
          <button className="bg-accent text-white font-semibold py-2 px-4 rounded">
            SEND
          </button>
        </div>
      </form>
    </>
  );
};

export default Replies;
