import React from 'react'

function Personal({formData,setFormData}) {
  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="email" value={formData.phone} onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }} />
        </div>
        <div>
          <label>Github:</label>
          <input type="email" value={formData.github} onChange={(e) => { setFormData({ ...formData, github: e.target.value }) }} />
        </div>
        <div>
          <label>Linkedin:</label>
          <input type="email" value={formData.linkedin} onChange={(e) => { setFormData({ ...formData, linkedin: e.target.value }) }} />
        </div>
        <div>
          <label>Skills:</label>
          <input type="email" value={formData.skills} onChange={(e) => { setFormData({ ...formData, skills: e.target.value }) }} />
        </div>
      </form>
    </div>
  )
}

export default Personal