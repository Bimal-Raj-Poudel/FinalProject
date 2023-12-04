import React, { useState } from 'react'

export default function PopUpForm({addCategory}) {
    const [title, addTitle] = useState('');
    const [description, addDesription] = useState('')

    const handelAddCategory = (e) =>{
        e.preventDefault();
        const data = {
            "title":title,
            "description":description
        }
        addCategory(data)
        addTitle('')
        addDesription('')
    }
   

  return (
    <>
      <div className="popup-form">
          <form onSubmit={handelAddCategory}>
  <div class="form-group">
    <label for="Title">Enter Title</label>
    <input type="text" class="form-control" id="Title" value={title} aria-describedby="emailHelp" placeholder="Enter Title" onChange={e=> addTitle(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="Description">Enter Description</label>
    <input type="text" class="form-control" id="Description"  value={description} aria-describedby="emailHelp" placeholder="Enter Title" onChange={e=> addDesription(e.target.value)}/>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>  
    </>
  )
}
