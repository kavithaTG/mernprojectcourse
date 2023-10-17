import React from 'react'

const Register = () => {
  return (
    <div className='registermain'>
        <div className='registerform'>
          <center>
            <form action="">

                <label htmlFor="id">ID:</label>
                <input type="number" name='id'/><br />
                <label htmlFor="f_image">Image:</label>
                <input type="img" name="img" /><br />
                <label htmlFor="name">Name:</label>
                <input type="name" name='name' /><br />
                <label htmlFor="f_email">E-mail:</label>
                <input type="email" name='email'/><br />
                <label htmlFor="f_mob">Mobile:</label>
                <input type="number" name='mobile'/><br />
                <label htmlFor="f_designation">Designation:</label>
                <select name="designation" id="designation">
                  <option value="designation">Manager</option>
                  <option value="designation">HR</option>
                  <option value="designation">Developer</option>
                  <option value="designation">Test Engineer</option>
                </select><br />
                  Gender:
                  <input type="radio" name='gender' value="male" />Male
                  <input type="radio" name='gender' value="female"/>Female
                <label htmlFor="f_course"></label><br />
                <label htmlFor="f_course">Course:</label>
                <select name="" id="course">
                  <option value="course">BCA</option>
                  <option value="course">Bcom</option>
                  <option value="course">Bsc</option>
                  <option value="course">BA</option>
                  <option value="counrse">BBM</option>
                </select>
                <label htmlFor="f_create">CreateDate:</label>
                <input type="date" name='f-createdate'/><br />
                <button className='submit'>submit</button>
                {/* <button className='cancel'>cancel</button> */}
            </form>
            </center>
        </div>
    </div>
  )
}

export default Register