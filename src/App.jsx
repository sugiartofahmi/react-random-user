import { useState, Fragment, useEffect } from "react";
import Axios from "axios";

function App() {
  let [data, setData] = useState([]);
  let url = "https://randomuser.me/api/";
  const getData = () => {
    return Axios.get(url).then((res) => {
      setData((data = res.data.results));
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <main className="w-full h-screen flex flex-col bg-[#3B3486] items-center justify-center">
        <div className="w-[30%] bg-[#7743DB] p-5 text-[#FFE9B1] rounded-lg flex flex-col justify-center items-center gap-y-3">
          <h1 className="font-bold text-2xl">Random User Generator</h1>

          <h2 className="text-xl">
            {data.map((user, index) => (
              <Fragment key={index}>
                <div className="flex flex-col items-center">
                  <span>{user.name.first}</span>
                  <span>{user.email}</span>
                </div>{" "}
              </Fragment>
            ))}
          </h2>

          <button
            onClick={getData}
            className="bg-[#3B3486] py-2 px-4 rounded-lg text-[#FFE9B1]"
          >
            Get User
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
