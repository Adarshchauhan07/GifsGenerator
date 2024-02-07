import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Random = () => {
  const [loading, setLoading] = useState(true);
  const [gifs, setGifs] = useState("");

  async function fetchData() {
    setLoading(true);
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=4Uo4uyVMWw3K0NLfJ4T5o6tgPEdom3l5`;
      const getData = await fetch(url);
      const data = await getData.json();
      setGifs(data.data.images.downsized.url);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  function handler() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-4">RANDOM GIF</h3>

      <div className="w-100 h-100">
        {loading ? (
          <Spinner />
        ) : (
          <img
            src={gifs}
            className="w-full h-full object-cover mb-4"
            alt="Random GIF"
          />
        )}
      </div>

      <button
        onClick={handler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue transition duration-100 ease-in-out transform hover:scale-105"
      >
        GENERATE
      </button>
    </div>
  );
};

export default Random;
