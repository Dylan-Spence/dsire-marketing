import React from 'react'

function Contact() {
  return (
    <section id='contact'>
        <div className='contact__container'>
            <h3>Contact us</h3>
            <h4>We're here to help! Send any questions you have over to us. We look forward to hearing from you.</h4>
            <form className='contact__form'>
                <div className='form__item'>
                    <label className='form__item--label'>Name</label>
                    <input className='input' name='user_name' type="text" required/>
                </div>
                <div className='form__item'>
                    <label className='form__item--label'>Email</label>
                    <input className='input' name='user_email' type="email" required/>
                </div>
                <div className='form__item'>
                    <label className='form__item--label'>Message</label>
                    <textarea className='input' name='message' type="text" required></textarea>
                </div>
                <button id='contact__submit' className='form__submit'>Take Action</button>
            </form>
        </div>

    </section>
  )
}

export default Contact