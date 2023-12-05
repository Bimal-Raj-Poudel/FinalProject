import React, { useState } from 'react'
import EditCategory from './EditCategory';


export default function CategoryItem({item, updatedCategoryInfo,handleDelete}) {

    const [model, setModel]= useState(false);

  const handleEditCategory = () =>{
    setModel(true);
  }


  return (
    <>
    
    {!model?
      <div className="accordion accordion-flush m-2 border border-success " id="accordionFlushExample">
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
       <strong> {item.categoryName} </strong>
      </button>
    </h2>
    <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <ul>
            <li key={item.id}><strong><p>{item.categoryDescription}</p></strong></li>
        </ul>
      </div>
      <button type="button" class="btn btn-danger m-2" onClick={(e) => handleDelete(item.id)}>Delete</button>
      <button type="button" class="btn btn-secondary m-2" onClick={handleEditCategory}>Edit</button>
    </div>
  </div>
</div>
:
<EditCategory onSubmit={updatedCategoryInfo} id={item.id} handleModel={setModel}/>}
    </>
  )
}
