import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  //  creating function for paste
  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createAt: new Date().toISOString(),
    };

    //  we need to store this field
    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      // if pasteId is nota available then we need to  Create
      dispatch(addToPastes(paste));
    }

    // after creation and updation clear all feild
    setTitle("");
    setValue("");
    setSearchParams({});
  }
  return (
    <div>
      <div className="flex gap-[30px] mt-10 place-content-center">
        <input
          className=" p-2 min-w-[350px] border rounded-xl"
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
          className="p-2  mt-10 min-w-[550px] border rounded-xl"
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
