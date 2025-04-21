import React, { useEffect, useState } from "react";

const PaginationAndSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("pagination");
    return saved ? JSON.parse(saved) : [];
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const storedData = localStorage.getItem("pagination");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pagination", JSON.stringify(data));
    setCurrentPage(1);
  }, [data]);

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    setData((prevData) => [...prevData, inputValue]);
    setInputValue("");
  };

  const handleEdit = (index) => {
    const actualIndex = index + (currentPage - 1) * itemsPerPage;
    setInputValue(data[actualIndex]);
    setIsUpdate(true);
    setCurrentIndex(actualIndex);
  };

  const handleUpdate = () => {
    if (!inputValue.trim()) return;
    setData(data.map((item, i) => (i === currentIndex ? inputValue : item)));
    setIsUpdate(false);
    setCurrentIndex(null);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const actualIndex = index + (currentPage - 1) * itemsPerPage;
    setData(data.filter((_, i) => i !== actualIndex));
    setIsUpdate(false);
    setCurrentIndex(null);
    setInputValue("");
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        backgroundColor: "orange",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "600px",
          minHeight: "440px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "40px",
        }}
      >
        <div>
          <input
            type="text"
            onChange={handleSearch}
            value={search}
            placeholder="Search here"
            style={{
              marginLeft: "300px",
              outline: "none",
              border: "2px solid gray",
              borderRadius:'8px',
              padding:'5px'
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          <input
            type="text"
            placeholder="Add Item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              border: "2px solid gray",
              borderRadius: "5px",
              outline: "none",
              fontSize: "16px",
            }}
          />
          <button
            onClick={isUpdate ? handleUpdate : handleAdd}
            style={{
              padding: "10px 20px",
              border: "2px solid gray",
              backgroundColor: "#f0f0f0",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            {isUpdate ? "Update Item" : "Add Item"}
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {currentItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                backgroundColor: "#fafafa",
              }}
            >
              <span style={{ fontSize: "16px" }}>{item}</span>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleEdit(index)}
                  style={{
                    padding: "6px 12px",
                    border: "2px solid gray",
                    borderRadius: "5px",
                    backgroundColor: "#e0e0e0",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    padding: "6px 12px",
                    border: "2px solid gray",
                    borderRadius: "5px",
                    backgroundColor: "#ffe0e0",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 ? (
          <div>Data not found</div>
        ):(
          <>
          {filteredData.length > itemsPerPage && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "12px",
            }}
          >
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                style={{
                  padding: "6px 12px",
                  border: "2px solid gray",
                  borderRadius: "5px",
                  backgroundColor:
                    currentPage === index + 1 ? "#a0a0a0" : "#e0e0e0",
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
};

export default PaginationAndSearch;
