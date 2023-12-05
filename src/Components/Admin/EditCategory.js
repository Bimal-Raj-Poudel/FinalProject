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

    const handleClick = ()=>{
      handleModel(model => !model);
    }

  return (
    <>  
    <form onSubmit={handleSubmit}>
  <div class="form-floating m-2">
 <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={title} onChange={e=>setTite(e.target.value)}></textarea>
  <label for="floatingTextarea">Title</label>
</div>

  <div class="form-floating m-2">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
  <label for="floatingTextarea">Description</label>
</div>

  <button type="submit" className="btn btn-primary m-2">Submit</button>
  <button type="button" className="btn btn-warning m-2" onClick={handleClick}>Cancel</button>
</form>

    </>
  )
}
