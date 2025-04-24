import React, { useEffect, useState } from 'react';

const FetchApi = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchApi = async()=>{
            try {
                let response = await fetch('https://fakestoreapi.in/api/products/category?type=mobile');
                if(!response.ok){
                    throw new Error("The error is reflecting.");
                }
                response = await response.json();
                setData(response.products);
            } catch (error) {
                console.error("There is error", error);
            }
        }
        fetchApi()
    })
  
  return (
    <div>
      <h1 style={{ fontSize: "30px", fontWeight: 700 }}>Saket Kumar</h1>
      <div>
        {data.map((item) => (
          <div>
            <img src={item?.image} style={{ width: "300px" }} alt="" />
            <p key={item.id}>Title: {item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchApi;
