import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import s from '../Components/app.module.css';


function App() {
    
    return (
        <div className={s.section}>
            <h1>PhoneBook</h1>

            <ContactForm />
            <Contacts />
        </div>
    )


}


export default App;
