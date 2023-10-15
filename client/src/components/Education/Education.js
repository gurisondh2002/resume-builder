import React from 'react'

function Education({formData, setFormData}) {
  return (
    <div>
        <form>
            <div>
                <label>Enter your institue name:</label>
                <input type="text" value={formData.edu1_school} onChange={(e) =>{ setFormData({...formData, edu1_school : e.target.value})}}/>
            </div>
            <div>
                <label>Year you graduated from your institute:</label>
                <input type="number" value={formData.edu1_year} onChange={(e) =>{ setFormData({...formData, edu1_year : e.target.value})}}/>
            </div>
            <div>
                <label>Degree you pursued:</label>
                <input type="text" value={formData.edu1_qualification} onChange={(e) =>{ setFormData({...formData, edu1_qualification : e.target.value})}}/>
            </div>
        </form>
    </div>
  )
}

export default Education