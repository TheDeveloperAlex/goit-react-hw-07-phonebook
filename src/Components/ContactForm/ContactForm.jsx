import React, { useState } from 'react'
import s from './ContactForm.module.css';
import { connect } from 'react-redux'
import actions from 'redux/contacts-actions';
import sprite from 'img/sprite.svg';
import * as operations from 'redux/contacts-operation';
import selectors from 'redux/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';



function ContactForm({ contacts, createContact }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    

    const handleChangephnone = e => {
        const value = e.target.value;
        setNumber(value);


    }
    const handleChange = (e) => {
        const value = e.target.value;
        setName(value);
    }

    const validate = (dataUser) => {
        const res = contacts.filter(item => (
            item.name === dataUser.name
        ))

        let isValid = true;
        const notValid = () => {
            isValid = false;
        };

        res.length > 0 && alert(`Eror, ${dataUser.name} is already in contacts`)
        res.length > 0 && notValid()
        return (isValid);
    }



    const handleSubmit = e => {
        e.preventDefault();
        const obj = {
            name: name,
            number: number,
            
        }
        
        

            validate(obj) && dispatch(operations.addContact(obj)) 
            
        
            setName('');
            setNumber('');
            document.getElementById('name').value = '';
            document.getElementById('number').value = '';
        
    }

    return (
        <div className={s.interface}>

            <form onSubmit={handleSubmit} className={s.form}>
                <div>
                    <label>
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            id="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                    </label>

                    <label>
                        Phone
                        <input
                            className={s.inputTel}
                            type="tel"
                            name="number"
                            onChange={handleChangephnone}
                            id="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                        />
                    </label>
                </div>

                <button type="submit" className={s.buttonAdd}>
                    <svg className={s.svg}>
                        <use href={sprite + "#icon-user-plus"}></use>
                    </svg>
                </button>
            </form>
        </div>

    )

}

const mapStateToProps = state => {
    return {
        contacts: selectors.getAllContacts(state),
        // contacts: state.contacts.enteties
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         createContact: (data) => dispatch(actions.createContact(data)),
//     };
// };

export default connect(mapStateToProps)(ContactForm);
