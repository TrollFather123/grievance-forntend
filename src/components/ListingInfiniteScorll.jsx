import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchMoreData = async (page) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`Item ${page + 1}`]); // Only 1 item per fetch
    }, 1000);
  });
};

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = async () => {
    const newItems = await fetchMoreData(page);
    setItems((prevItems) => [...prevItems, ...newItems]);
    setPage((prevPage) => prevPage + 1);

    if (newItems.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <div
      id="scrollableDiv"
      style={{
        height: "400px", // Fixed height to enable scrolling
        overflowY: "auto", // Enable scrolling when content exceeds
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more items to load</p>}
        scrollableTarget="scrollableDiv"
      >
        {items.map((item, index) => (
          <div key={index} style={{ padding: 10, border: "1px solid #ccc", minHeight: "80px" }}>
            {/* 👇 Ensures each item has enough height to create a scrollbar */}
            {item}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollList;
