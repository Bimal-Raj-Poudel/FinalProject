import React, { useEffect, useState } from 'react'

export default function EditCategory({onSubmit, category, handleModel}) {

    const [id, setId] = useState(category.category_id);
    const [title, setTite] = useState(category.categoryName);
    const [description, setDescription] = useState(category.categoryDescription);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const categoryInfo = {
            category_id:id,
            categoryName:title,
            categoryDescription:description
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
    <div className='border border-3  bg-light rounded-3'>  
    <form onSubmit={handleSubmit}>
  <div class="form-floating m-2 ">
 <textarea class="form-control border border-3 border-secondary rounded-3" placeholder="Leave a comment here" id="floatingTextarea" value={title} onChange={e=>setTite(e.target.value)} style={{height: "70px"}} />
  <label for="floatingTextarea" className=' fw-bolder'>Title</label>
</div>

  <div class="form-floating m-2">
  <textarea class="form-control border border-3 border-secondary rounded-3" placeholder="Leave a comment here" id="floatingTextarea" value={description} onChange={e=>setDescription(e.target.value)} style={{height: "70px"}} />
  <label for="floatingTextarea" className=' fw-bolder'>Description</label>
</div>

  <button type="submit" className="btn btn-primary m-2">Submit</button>
  <button type="button" className="btn btn-warning m-2" onClick={handleClick}>Cancel</button>
</form>

    </div>
  )
}
