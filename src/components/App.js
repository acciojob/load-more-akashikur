import React, { useEffect, useRef, useState } from "react";
import "./../styles/App.css";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30",
];

const App = () => {
  const itemsPerPage = 5;
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const observer = useRef(null);

  useEffect(() => {
    const lastIndex = currentPage * itemsPerPage;
    const newVisibleItems = items.slice(0, lastIndex);
    setVisibleItems(newVisibleItems);
  }, [currentPage]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(handleObserver, options);

    if (observer && observer.current) {
      observer.current.observe(document.getElementById("observer"));
    }

    return () => {
      if (observer && observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleObserver = (entries) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
      observer.current.unobserve(target.target);
    }
  };

  return (
    <div>
      <ul>
        {visibleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div id="observer" style={{ height: "1px" }}></div>
    </div>
  );
};

export default App;
