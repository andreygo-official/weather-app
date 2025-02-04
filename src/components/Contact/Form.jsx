import React from 'react'
import './contact.style.css'
import {useForm} from 'react-hook-form'
const Form = () => {
    
    const {register, handleSubmit, formState: {errors, isDirty, isValid}, reset } = useForm()

    const onSubmit = (data) => {
        if(isValid)
        alert('The form is submitted!')
    }
    return (
        <div className='form-container col-md-12 col-lg-6 mt-4'>
            <h2 className='text-white'>Contact us</h2>
            <p className='text-white'>Stay ahead of the storm with our timely updates and in-depth news coverage.
                Contact us for personalized weather forecasts that keep you prepared and informed!
            </p>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="row">
                    <div className="mb-3 col-6">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Your name..." 
                        {...register('name', {
                            required: 'Name is required!'
                        })}
                        />
                         <p className='error'>{errors.name?.message}</p>
                    </div>
                    <div className="mb-3 col-6">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address..." {...register('email', {
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email format'
                            },
                            required: {
                                value: true,
                                message: 'Email is required!'
                            }
                        })}/>
                        <p className='error'>{errors.email?.message}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-6">
                        <input type="text" className="form-control" id="company" placeholder="Company name..." {...register('company', {
                            required: 'Company name is required!'
                        })}/>
                        <p>{errors.company?.message}</p>
                    </div>
                    <div className="mb-3 col-6">
                        <input type="text" className="form-control" id="website" placeholder="Website..." {...register('website', {
                            pattern: {
                                value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                                message: 'Invalid website pattern!'
                                
                            },
                            required: 'Website is required!'
                        })}/>
                        <p>{errors.website?.message}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <textarea className="form-control" id="message" rows="9" placeholder='Message...'/>
                    </div>
                    <p className='button-submit mt-3'>
                    <input 
                    type="submit" 
                    className='btn btn-primary btn-submit' 
                    value="Submit" 
                    disabled={!isDirty}
                    />
                    </p>
                    
                </div>

            </form>
        </div>
    )
}

export default Form
