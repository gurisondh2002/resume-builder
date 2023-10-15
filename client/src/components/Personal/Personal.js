import React from 'react'
import styles from './Personal.module.css'

function Personal({formData,setFormData}) {
  return (
    <div className={`${styles.mainContainer}`}>
      <form>
        <div>
          <label>Name:</label>
          <br/>
          <input type="text" value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />
          <br/>
        </div>
        <div>
        {/* <br/> */}
          <label>Email</label>
          <br/>
          <input type="email" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
        </div>
        <div>
        {/* <br/> */}
          <label>Phone:</label>
          <br/>
          <input type="email" value={formData.phone} onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }} />
        </div>
        <div>
        {/* <br/> */}
          <label>Github:</label>
          <br/>
          <input type="email" value={formData.github} onChange={(e) => { setFormData({ ...formData, github: e.target.value }) }} />
        </div>
        <div>
        {/* <br/> */}
          <label>Linkedin:</label>
          <br/>
          <input type="email" value={formData.linkedin} onChange={(e) => { setFormData({ ...formData, linkedin: e.target.value }) }} />
        </div>
        <div>
        {/* <br/> */}
          <label>Skills:</label>
          <br/>
          <input type="email" value={formData.skills} onChange={(e) => { setFormData({ ...formData, skills: e.target.value }) }} />
        </div>
      </form>
    </div>
  )
}

export default Personal