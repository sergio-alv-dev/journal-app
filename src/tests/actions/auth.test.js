import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types";



const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};

let store = mockStore( initState )


describe('Pruebas en las acciones de auth', () => {

    beforeEach( () => {
        store = mockStore(initState);
    }) 

    test('login y logout deben de crear la acción respectiva', () => {

        const uid = 'uidtest';
        const displayName = 'nametest';

        const action = login( uid, displayName );
        const loggedOut = logout();

        expect( action ).toEqual( {
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect( loggedOut ).toEqual({
            type: types.logout
        })
    })
    

    test('debe de realizar el startLogout', async () => {

        await store.dispatch( startLogout() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual( {
            type: types.logout
        })

        expect( actions[1] ).toEqual( {
            type: types.notesLogoutCleaning
        })
    })

    test('debe de iniciar el starLoginEmailPassword', async () => {

        await store.dispatch( startLoginEmailPassword('test@testing.com', '123456') );

        const actions = store.getActions();

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'YbxHQRzCDPgFiYMRPhFCNu1myBz1',
                displayName: null,
            }
        })
        
    })
    
    
    
})
