import React, { useState } from "react";
import Search from "./components/search/search.jsx";

function App() {
  const [search, updateSearch] = useState("");

  function onSearch() {
    console.log("Called!");
    console.log(search);
  }

  return (
    <div>
      <Search search={search} onSearch={onSearch} updateSearch={updateSearch} />
    </div>
  );
}

export default App;
