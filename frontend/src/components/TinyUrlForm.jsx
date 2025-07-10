import { useState } from "react";
import axios from 'axios';

const TinyUrlForm = () => {
  const [tinyUrl, setTinyUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");

  const getTinyUrl = async () => {
    try {
      const response = await axios.post("http://localhost:3004/tiny/tiny-url", {longUrl});
      
      setTinyUrl(response.data.shortUrl);

    } catch (error) {
      console.log(error);
    }
  }

  const changeHandler = (e) => {
    setLongUrl(e.target.value);
  }
  return (
    <div className="flex flex-col">
   <div className="flex justify-center items-center pt-20">
      <input onChange={changeHandler} value={longUrl} className="w-100 h-10 text-xl bg-gray-100 outline-none border border-gray-500 rounded-full px-5" type="text" placeholder="Enter Long URL"/>
      <button onClick={getTinyUrl} className="p-2 bg-red-400 rounded-md ml-2">Get TinyURL</button>
    </div>
    {tinyUrl === "" ? "" : (<div className="flex justify-center mt-20">
        Your Tiny URL Is : {tinyUrl}
      </div>)}
    
      </div>
  )
}

export default TinyUrlForm