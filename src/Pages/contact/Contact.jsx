import React from 'react'
import Button from '../../common/Button/Button'
const Contact = () => {
  const handleSubmitForm = (formData) => {
    const contactFormData = Object.fromEntries(formData);
    console.log(contactFormData);
  }
  return (
    <div className='page-title'>
      <div className='container'>
        <h1>Contact Us</h1>
        <form action={handleSubmitForm} className='form'>
          <input type='text' name='name' required placeholder='Enter your name' autoComplete='off' />
          <input type='email' name='email' required placeholder='Enter your email id' autoComplete='off' />
          <textarea rows={10} placeholder='write your message' autoComplete='off' name='message'></textarea>
          <Button type="submit" className={"outline rounded transparent submit"} >Send</Button>
        </form>
      </div>


    </div>
  )
}

export default Contact