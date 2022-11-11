import React from 'react'
// import { useState, useEffect, useMemo } from "react";
//import { useState } from "react";

const Categories = () => {

  //const [categories, setCategories] = useState({});

  // useMemo(() => {

  //   fetch("http://localhost:4000/categories")
  //   .then(response => response.json())
  //   .then(console.log('Categories.js from /categories '))
  //   .then(data => {setCategories(JSON.parse(data))})
  //   .catch((error) => console.log('error from Categories.js 🥸 ::', error));
  // })

  // useEffect(() => {
  //   fetch("http://localhost:4000/categories")
  //       .then(response => response.json())
  //       .then(console.log('Categories.js from /categories '))
  //       .then(data => {setCategories(JSON.parse(data))})
  //       .catch((error) => console.log('error from Categories.js 🥸 ::', error));
  // })

  // const fetchCategories = () => {
  //   fetch("http://localhost:4000/categories")
  //     .then(response => response.json())
  //     .then(console.log('Categories.js from /categories '))
  //     .then(data => {setCategories(JSON.parse(data))})
  //     .catch((error) => console.log('error from Categories.js 🥸 ::', error));
  // }
  
  // useEffect(() => {
  //   fetchRandomJoke()
  // }, []) 
  
   //console.log(' categories 👿 :::', categories);


   return (
    
        <div className="Users">
            {/* <input
              type="text"
              placeholder="Search here"
              onChange={handleChange}
              value={searchInput} 
            /> */}
            <ol>
              {/* {useMemo((categories) => categories)} */}
            </ol>
            
          {/* {categories.map((category) => (
            <ol className="category" key={Math.floor(Math.random() * 1000)}>
              {category}
            </ol>
          ))} */}
        </div>
      )
    }

export default Categories;





// import React from 'react'
// import { useState, useEffect } from "react";

// const Categories = () => {
//   const [Categories, setCategories] = useState([]);


//     const [searchInput, setSearchInput] = useState("");

//   const handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);

//     categories.filter((category) => {
//       return category.name.match(searchInput);
//     })      
//   };

//   console.log('categories :::', categories)

//   useEffect(() => {
//     fetch("http://localhost:4000/categories")
//       .then(response => response.json())
//       .then(data => {setCategories(JSON.parse(data))})
//   }, []) 

//   return (
    
//       <div className="Users">
//         <input
//           type="text"
//           placeholder="Search here"
//           onChange={handleChange}
//           value={searchInput} />
        
//       {categories.map((category) => (
//         <ol className="category" key={Math.floor(Math.random() * 1000)}>
//           {category}
//         </ol>
//       ))}
//     </div>
//   )
// }

// export default Categories;
