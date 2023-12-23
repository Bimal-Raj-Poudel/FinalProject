import React, { useState } from 'react'

export default function PopUpForm({addCategory, formVisibility}) {
    const [title, addTitle] = useState('');
    const [description, addDesription] = useState('')

    const handelAddCategory = (e) =>{
        e.preventDefault();
        const data = {
            categoryName:title,
            categoryDescription:description
        }
        addCategory(data)
        addTitle('')
        addDesription('')
    }

    const setFormVisibiliy = () =>{
      formVisibility(makeInvisible => !makeInvisible);
    }
   

  return (
    <>
      <div className="popup-form m-2">
      <form onSubmit={handelAddCategory}>
  <div class="form-group m-2">
    <label for="Title">Enter Title</label>
    <input type="text" class="form-control border border-3 border-success rounded-3" id="Title" value={title} aria-describedby="emailHelp" placeholder="Title" onChange={e=> addTitle(e.target.value)} required/>
  </div>
  
  <div class="form-group m-2">
    <label for="Description">Enter Description</label>
    <input type="text" class="form-control border border-3 border-success rounded-3" id="Description"  value={description} aria-describedby="emailHelp" placeholder="Description" onChange={e=> addDesription(e.target.value)} required/>
  </div>

  <button type="submit" className="btn btn-primary m-2">Submit</button>
  <button type="button" className="btn btn-warning m-2" onClick={setFormVisibiliy}>Cancel</button>
</form>
        </div>  
    </>
  )
}
