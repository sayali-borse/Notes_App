import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  return (
    <div>
      <div className="flex gap-4  mt-10 place-content-center">
        <input
          className="p-2  border-1 rounded-xl"
          type="text"
          placeholder="Enter title "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button className="p-2 border-1 rounded-xl bg-purple-900">
          {pasteId ? "Update Paste" : "Create new Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="p-2  mt-10 max-w-200 border-1 rounded"
          value={value}
          placeholder="Enter content here...."
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
