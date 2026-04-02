import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  function createPaste() {}
  return (
    <div>
      <div className="flex gap-[80px] mt-10 place-content-center">
        <input
          className="p-2 min-w-[300px] border-1 rounded-xl"
          type="text"
          placeholder="Enter title "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button
          className="p-2  border-1 rounded-xl bg-purple-950 hover:bg-purple-900"
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : "Create new Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="p-2  mt-10 min-w-[550px] border-1 rounded-xl"
          value={value}
          placeholder="Enter content here...."
          onChange={(e) => setValue(e.target.value)}
          rows={15}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
