import React from 'react'

function Project({ formData, setFormData }) {
  return (
    <div>
      <form>
        <div>
          <label>Name of Project:</label>
          <input type="text" value={formData.proj1_title} onChange={(e) => { setFormData({ ...formData, proj1_title: e.target.value }) }} />
        </div>
        <div>
          <label>Link to Project:</label>
          <input type="text" value={formData.proj1_link} onChange={(e) => { setFormData({ ...formData, proj1_link: e.target.value }) }} />
        </div>
        <div>
          <label>Description about Project:</label>
          <input type="text" value={formData.proj1_desc} onChange={(e) => { setFormData({ ...formData, proj1_desc: e.target.value }) }} />
        </div>
        <div>
          <label>Enter second project name:</label>
          <input type="text" value={formData.proj2_name} onChange={(e) => { setFormData({ ...formData, proj2_name: e.target.value }) }} />
        </div>
        <div>
          <label>Link to second Project:</label>
          <input type="text" value={formData.proj2_link} onChange={(e) => { setFormData({ ...formData, proj2_link: e.target.value }) }} />
        </div>
        <div>
          <label>Description about Project:</label>
          <input type="text" value={formData.proj2_desc} onChange={(e) => { setFormData({ ...formData, proj2_desc: e.target.value }) }} />
        </div>
      </form>
    </div>
  )
}

export default Project