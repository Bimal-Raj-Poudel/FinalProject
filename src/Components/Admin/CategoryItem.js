import React, { useState } from 'react'
import EditCategory from './EditCategory';


export default function Categorycategory({category, updatedCategoryInfo,handleDelete}) {

    const [model, setModel]= useState(false);

  const handleEditCategory = () =>{
    setModel(true);
  }


  return (
    <>
    
    {!model?
  <div className="accordion-item m-2 bg-light border border-3 border-success rounded">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"  data-bs-target={`#flush-collapse${category.category_id}`} aria-expanded="false" aria-controls={`flush-collapse${category.category_id}`}>
       <strong> {category.categoryName} </strong>
      </button>
    </h2>
    <div id={`flush-collapse${category.category_id}`} className="accordion-collapse collapse " aria-labelledby={`heading${category.category_id}`} data-bs-parent="#accordionFlushExample" >
      <div className="accordion-body">
        <ul>
            <li key={category.category_id}><strong><p className='text-success'>{category.categoryDescription}</p></strong></li>
        </ul>
      </div>
      <button type="button" class="btn btn-danger m-2" onClick={(e) => handleDelete(category.category_id)}>Delete</button>
      <button type="button" class="btn btn-secondary m-2" onClick={handleEditCategory}>Edit</button>
    </div>
  </div>
:
<EditCategory onSubmit={updatedCategoryInfo} category={category} handleModel={setModel}/>}
    </>
  )
}
