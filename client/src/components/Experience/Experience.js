import React from 'react'

function Experience({formData, setFormData}) {
  return (
    <div>
    <form>
        <div>
            <label>Enter your first company name you worked for:</label>
            <input type="text" value={formData.exp1_org} onChange={(e) =>{ setFormData({...formData, exp1_org : e.target.value})}}/>
        </div>
        <div>
            <label> What was your designation?:</label>
            <input type="text" value={formData.exp1_pos} onChange={(e) =>{ setFormData({...formData, exp1_pos : e.target.value})}}/>
        </div>
        <div>
            <label>How many years you worked there for?</label>
            <input type="text" value={formData.exp1_dur} onChange={(e) =>{ setFormData({...formData, exp1_dur : e.target.value})}}/>
        </div>
        <div>
            <label>Tell us about your job description</label>
            <input type="text" value={formData.exp1_desc} onChange={(e) =>{ setFormData({...formData, exp1_desc : e.target.value})}}/>
        </div>
        <hr/>
        <div>
            <label>Enter your second company name you worked for:</label>
            <input type="text" value={formData.exp2_org} onChange={(e) =>{ setFormData({...formData, exp2_org : e.target.value})}}/>
        </div>
        <div>
            <label> What was your designation?:</label>
            <input type="text" value={formData.exp2_pos} onChange={(e) =>{ setFormData({...formData, exp2_pos : e.target.value})}}/>
        </div>
        <div>
            <label>How many years you worked there for?</label>
            <input type="text" value={formData.exp2_dur} onChange={(e) =>{ setFormData({...formData, exp2_dur : e.target.value})}}/>
        </div>
        <div>
            <label>Tell us about your job description</label>
            <input type="text" value={formData.exp2_desc} onChange={(e) =>{ setFormData({...formData, exp2_desc : e.target.value})}}/>
        </div>
    </form>
</div>
  )
}

export default Experience