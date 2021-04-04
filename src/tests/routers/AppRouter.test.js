import React from 'react';
import { mount } from "enzyme/build"
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';
import { act } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import { firebase } from '../../firebase/firebaseConfig'
import { AppRouter } from '../../routers/AppRouter';
// import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

import { login } from '../../actions/auth';

jest.mock('../../actions/auth', () => ({
    login: jest.fn(),
    
}))

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes:{
        notes: [],
        active: {
            id: 'abc',
        }
    }
};

let store = mockStore( initState );
store.dispatch = jest.fn();



describe('Pruebas en <AppRouter />', () => {

    test('debe de llamar al login si estoy autenticado', async () => {

        let user;        
        await act( async () => {

        const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456');
        user = userCred.user;
        // console.log( user );
        
        const wrapper = mount( 
            <Provider store = { store }>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            )
        
        })

        expect( login ).toHaveBeenCalledWith( 'YbxHQRzCDPgFiYMRPhFCNu1myBz1' , null );
        

        
    });
    
    
});
