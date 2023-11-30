import React, { useState } from 'react'

export default function EditCategory({onSubmit, id, handleModel}) {

    const [title, setTite] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const categoryInfo = {
            "id":id,
            "categoryName":title,
            "categoryDescription":description
        }
        handleModel(model => !model);
        onSubmit(categoryInfo);
        setTite(" ");
        setDescription(" ");
    }

  return (
    <>
      
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" value={title} onChange={e=>setTite(e.target.value)}/>
  </div>
  
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
  <label for="floatingTextarea">Description</label>
</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </>
  )
}
