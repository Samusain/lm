import '../styles/Contact.css';
import { FiArrowRight } from 'react-icons/fi'

const Contact = () => {
    return (
        <div className="contact-container">
            <p className='touch'>GET IN TOUCH</p>
            <h2 className="section-title">Contact Us</h2>
            <form action="submit" className='contact-form'>
                <div className="input-box" >
                    <label htmlFor="name">Name</label>
                    <input type="text" required/>
                </div>
                <div className="input-box" >  
                    <label htmlFor="Email">E-mail</label>
                    <input type="email" required/>
                </div>
                <div className="input-box" >  
                    <label htmlFor="Email">Phone</label>
                    <input type="email" required/>
                </div>
                <div className="input-box" >  
                    <label htmlFor="Email">Company</label>
                    <input type="email" required/>
                </div>
                <div className="input-box" >
                    <label htmlFor="Message">Description</label>
                    <input type="text" required/>
                </div>
                <div className="checkbox-box">
                    <input type="checkbox" /><label htmlFor="checkbox">I accept Terms and Conditions</label>
                </div>
                <button className='form-btn'>Send <FiArrowRight className='arrow-right' /></button>
            </form>
        </div>
    )
}

export default Contact;