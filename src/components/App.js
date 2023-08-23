import React, { useEffect, useState } from "react";
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

const ITEMS_PER_PAGE = 10; // Number of items to display per page

const App = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newVisibleItems = items.slice(0, endIndex);
    setVisibleItems(newVisibleItems);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    loadMoreItems();
  };

  return (
    <div>
      <ul>
        {visibleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default App;
