
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './footer.style.css'
const initialValues = {
  email: ''
}
const onSubmit = (values) => {
console.log(values)
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid Email').required('Required!')
})



const Footer = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema

  })
  const date = new Date().getFullYear()
  return (
    <div className='footer-container'>
      <div className='container'>
        <div className="row footer-row">
          <form 
          noValidate
          onSubmit={formik.handleSubmit}
          className="subscribe-container col-12 col-md-6 mt-4">
            <input 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email" 
            name="email" 
            id="email" 
            className='form-control email-input' 
            placeholder='Enter your email...' />
            {formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null}
            <button type='submit' disabled={!formik.isValid || formik.isSubmitting} className="subscribe-btn btn btn-danger">Subscribe</button>
          </form>
          <div className='social-media-icons col-12 col-md-6 mt-4'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-pinterest"></i>
          </div>
        </div>
          <footer>
            <p>Copyright {date} WeatherWisp. Designed by AndriiZone. All rights reserved</p>
          </footer>
      </div>

    </div>
  )
}

export default Footer
