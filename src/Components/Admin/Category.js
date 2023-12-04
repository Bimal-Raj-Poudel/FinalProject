import React, { useEffect, useState } from 'react'
import PopUpForm from './PopUpForm';
import CategoryItem from './CategoryItem'
import './Category.css'
import axios from 'axios';

export default function Category() {
  const [category, setCategory] = useState([])
  const [reload, setReload] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  //Fetching Category related data
  useEffect(() => {
   axios.get('http://localhost:3030/category')
   .then(res => setCategory(res.data))
   .catch(err => console.log(err))
  },[reload])

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  //Handling Updation task
  const handleUpdatedCategoryInfo = async (data) =>{

    try{
    const response = await axios.put(`http://localhost:3030/category/${data.id}`,
    {
      categoryName:data.categoryName,
      categoryDescription:data.categoryDescription
  }
    )
    setReload(!reload);
    console.log(response.data);
  }
  catch(err){
    console.log('Error updating category information:', err);
  }}

  //Deleting Category data
  const deleteCategory = async (id) =>{
    try{
      await axios.delete(`http://localhost:3030/category/${id}`)
      setReload(!reload)
    } catch(err){
      console.log('Error deleting category information:', err);
    } 
  }

  //Add Category data
  const handelAddCategory = async (data) => {
    console.log(data)
    try{
      const response = await axios.post(`http://localhost:3030/category`,
      {
        id: Math.floor(Math.random() *100),
        categoryName: data.title,
        categoryDescription: data.description
      })
      setIsFormVisible(false)
      setReload(!reload);
      console.log(response.data)
    }catch(err){
      console.log("Error while adding category info:", err)
    }
  }

  return (
    <>
       <button type="button" class="btn btn-dark" onClick={toggleFormVisibility}><i class="fas fa-plus"></i>Add Category</button>
       {isFormVisible && (<PopUpForm addCategory={handelAddCategory}/>)}
       <ul>
        {category.map(value => (
          <li key={value.id}><CategoryItem item={value} updatedCategoryInfo={handleUpdatedCategoryInfo} handleDelete={deleteCategory}/></li>
        ))}
       </ul>
    </>
  )
        }
