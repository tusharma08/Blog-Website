import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditPost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('UnCategorized')
  const [desc, setDesc] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  const modules = {
    toolbar: [
      [{ 'header' : [1,2,3,4,5,6,false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockqoute'],
      [{'list' : 'ordered'}, {'list':'bullet'}, {'indent':
    -1}, {'indent' : '+1'}],
    ['link','image'],
    ['clean']
    ]
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockqoute',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGRIES = ["Select", "Argiculture", "Business", "Education", "Entertainment", "Art", "Investment", "Weather", "Uncategorized"]

  return (
    <section className="create_post">
      <div className="container">
        <h2>Edit Post</h2>
        <p className="form_error_message">This is Error Message!</p>
        <form action="" className='form create_post_form'>
          <input type="text" name="" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              POST_CATEGRIES.map(cat => <option key={cat}>{cat}</option>)
            }
            </select>
            <ReactQuill className='editor' modules={modules} formats={formats} value={desc} onChange={setDesc}/>
            <input type="file" onChange={e =>setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
            <button type='submit' className='btn primary'>Update</button>
        </form>
      </div>
    </section>
  )
}

export default EditPost