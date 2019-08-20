import { contactsRef } from '../firebase';
import { CONTACT_ACTIONS } from '../globalConstants';

export const addContact = contact => async dispatch => {
    contactsRef.push().set(contact);
};

export const completeToDo = completeToDo => async dispatch => {
    contactsRef.child(completeToDo).remove();
};

export const fetchContacts = () => async dispatch => {
    dispatch({
        type: CONTACT_ACTIONS.IS_FETCHING_CONTACT,
        payload: {
            isFetching: true
        }
    });
    contactsRef.on("value", snapshot => {
        console.log('data fetchContacts');
        console.log(snapshot.val());
        dispatch({
            type: CONTACT_ACTIONS.FETCH_CONTACTS,
            payload: snapshot.val()
        });
    });
};
