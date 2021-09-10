import s from './Contacts.module.css';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import actions from 'redux/contacts-actions';
import * as operations from 'redux/contacts-operation';

import { useSelector, useDispatch } from 'react-redux';
import sprite from 'img/sprite.svg';
import selectors from 'redux/contacts-selectors';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



const Contacts = ({ filtredContacts, loading }) => {
    
    const dispatch = useDispatch();
    useEffect(() => {  
        
        dispatch(operations.fetchContacts())
    }, [dispatch, ])


    const filter = e => {
        const value = e.target.value;
        
        dispatch(actions.setFilter(value))
    };

    const removeContact =  (id) => {
        
        return dispatch(operations.deleteContact(id));
        

    }
    return (
        <div>
            <h2>Contacts</h2>
            <input type="text" onChange={filter} />
                <div className={s.divLoader}>
                {loading && (
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={80}
                    width={80}
                    timeout={3000} //3 secs
                    />
                )}
          </div>
            <ul>
                {
                    
                        
                        filtredContacts.map(item => (
                        <li key={item.id} className={s.li}> {item.name}: {item.number} <button type="button" id={item.id} onClick={() => removeContact(item.id)} className={s.button}><svg className={s.svg}>
                        <use href={sprite + "#icon-user-minus"}></use>
                    </svg></button> </li>
                    ))
                }

            </ul>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        filtredContacts: selectors.getFiltredContacts(state),
        loading: selectors.getloading(state),
    };
};


export default connect(mapStateToProps)(Contacts);
