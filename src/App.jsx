// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useState } from "react";
// import AddItem from "./pages/AddItem";
// import ViewItems from "./pages/ViewItems";
// import { api } from "./api";
// import { v4 as uuidv4 } from 'uuid'; // for unique IDs

// function App() {
//   const [items, setItems] = useState([
//     {
//       id: uuidv4(),
//       name: "Football Shoes",
//       type: "Sports Gear",
//       description: "High grip shoes for football players.",
//       coverImage: "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg" ,
//       images: [
//         "https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium",
//         "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg",
//       ],
//     },
//   ]);

//   // Function to add new item from AddItem page
//   const addNewItem = (item) => {
//     setItems((prevItems) => [...prevItems, { id: uuidv4(), ...item }]);
//   };

//   return (
//     <Router>
//       <nav className="flex gap-6 p-4 shadow bg-indigo-600 text-white">
//         <Link to="/">View Items</Link>
//         <Link to="/add">Add Item</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<ViewItems items={items} />} />
//         <Route path="/add" element={<AddItem addNewItem={addNewItem} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddItem from "./pages/AddItem";
import ViewItems from "./pages/ViewItems";
import { api } from "./api";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [items, setItems] = useState([]);

  // Fetch items from backend
  useEffect(() => {
    api.get("/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Add new item (API call)
  const addNewItem = (item) => {
    api.post("/items", item)
      .then((res) => {
        setItems((prev) => [res.data.item, ...prev]);
      })
      .catch((err) => console.error("Add error:", err));
  };

  return (
    <Router>
      <nav className="flex gap-6 p-4 shadow bg-indigo-600 text-white">
        <Link to="/">View Items</Link>
        <Link to="/add">Add Item</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ViewItems items={items} />} />
        <Route path="/add" element={<AddItem addNewItem={addNewItem} />} />
      </Routes>
    </Router>
  );
}

export default App;
