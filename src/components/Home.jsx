import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("paramId");
  return (
    <div className="flex gap-4 place-content-center">
      <input
        className="p-2 border-1 rounded-2xl"
        type="text"
        placeholder="Enter title "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button
        className="p-2 border-1 rounded-2xl bg-purple-900"
        onClick={pasteId ? "Update Paste" : "Create New Paste"}
      ></button>
    </div>
  );
};

export default Home;
