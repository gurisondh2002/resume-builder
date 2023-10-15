import React from 'react'
import styles from './Extra.module.css'

function Extra({formData, setFormData}) {
  return (
    <div className={`${styles.mainContainer}`}>
      <form>
        <h3>Languages you can speak:</h3>
        <div>
          <label>Languages:</label>
          <input type ="text" value={formData.extra_1} onChange={(e) =>{ setFormData({ ...formData, extra_1: e.target.value})}}/>
        </div>
        <hr/>
        <h3>Things you like to do:</h3>
        <div>
          <label>Hobbies:</label>
          <input type ="text" value={formData.extra_2} onChange={(e) =>{ setFormData({ ...formData, extra_2: e.target.value})}}/>
        </div>
      </form>
    </div>
  )
}

export default Extra