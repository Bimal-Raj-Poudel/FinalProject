import React, { useContext, useEffect, useState } from 'react'
import PopUpForm from './PopUpForm';
import CategoryItem from './CategoryItem'
import './Category.css'
import axios from 'axios';
import { AuthContext } from '../../App';
import { toast } from 'react-toastify';

export default function Category() {
  const authUser =useContext(AuthContext);
  const [category, setCategory] = useState([])
  const [reload, setReload] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  //Fetching Category related data
  useEffect(() => {
   axios.get('http://localhost:8080/api/category/',{
    headers: {
      'Authorization': `Basic ${authUser.encodedCredentials}`
    }
   })
   .then(res => {
    console.log("Category :", res.data)
    setCategory(res.data)
  })
   .catch(err => console.log(err))
  },[reload])

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  //Handling Updation task
  const handleUpdatedCategoryInfo = async (data) =>{

    try{
    const response = await axios.put(`http://localhost:8080/api/category/${data.category_id}`, data, {
      headers: {
        'Authorization': `Basic ${authUser.encodedCredentials}`
      }
     })
     if(response.status === 200){
      toast.info("Category Updated.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored"
      })
      setReload(!reload);
     }
  }
  catch(err){
    console.log('Error updating category information:', err);
  }}

  //Deleting Category data
  const deleteCategory = async (id) =>{
    try{
      const response = await axios.delete(`http://localhost:8080/api/category/${id}`, {
        headers: {
          'Authorization': `Basic ${authUser.encodedCredentials}`
        }
       })

      if(response.status === 200){
        toast.warn("Category deleted.", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored"
        })
        setReload(!reload)
      }
      
    } catch(err){
      console.log('Error deleting category information:', err);
    } 
  }

  //Add Category data
  const handelAddCategory = async (data) => {
    console.log(data)
    try{
      const response = await axios.post(`http://localhost:8080/api/category/create`, data, {
        headers: {
          'Authorization': `Basic ${authUser.encodedCredentials}`
        }
       })
       if(response.status === 201){
        toast.success("Category Added.", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored"
        })
        setIsFormVisible(false)
        setReload(!reload);
       }
      
    }catch(err){
      console.log("Error while adding category info:", err)
    }
  }

  return (
    <>
       <button type="button" class="btn btn-dark" onClick={toggleFormVisibility}><i class="fas fa-plus"></i>Add Category</button>
       {isFormVisible && (<PopUpForm addCategory={handelAddCategory} formVisibility={setIsFormVisible}/>)}
       <ul>
       <div className="accordion accordion-flush " id="accordionFlushExample">
        {category && category.map(value => (
          
          <li key={value.category_id}>
           
            <CategoryItem 
            category={value} 
            updatedCategoryInfo={handleUpdatedCategoryInfo} 
            handleDelete={deleteCategory}/>
            
            </li>    
        ))}
        </div>
       </ul>
    </>
  )
        }
