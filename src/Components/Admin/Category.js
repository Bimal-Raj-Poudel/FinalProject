import React, { useState } from 'react'
import CategoryItem from './CategoryItem'

export default function Category() {

  const [category, setCategory] = useState([
    {"id":1,"categoryName":"Flat","categoryDescription":"It is for whole flat"},
    {"id":2,"categoryName":"Shutter","categoryDescription":"It is a single room with shutter."}
  ])

  const handleUpdatedCategoryInfo = (data) =>{
    const {id, name, description} = data;

    const index = category.findIndex( item => item.id == id);

    if(index !== -1){
     const newUpdatedArray = [...category];
     newUpdatedArray[index] = data;
     console.log(newUpdatedArray)
     setCategory(newUpdatedArray);
    }
  }

  const deleteCategory = (id) =>{
   
     const newUpdatedCategory = category.filter(item => item.id !== id);
     console.log(newUpdatedCategory)
     setCategory(newUpdatedCategory);
  }

  return (
    <>
       <ul>
        {category.map(value => (
          <li key={value.id}><CategoryItem item={value} updatedCategoryInfo={handleUpdatedCategoryInfo} handleDelete={deleteCategory}/></li>
        ))}
       </ul>
    </>
  )
}
