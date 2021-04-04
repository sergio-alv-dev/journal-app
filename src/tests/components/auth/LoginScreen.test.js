import React from 'react';
import { mount } from "enzyme/build"
import { LoginScreen } from "../../../components/auth/LoginScreen"
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore( initState )
store.dispatch = jest.fn();

const wrapper = mount( 
    <MemoryRouter>
        <Provider store = { store }>
            <LoginScreen />
        </Provider>
    </MemoryRouter>
)


describe('Pruebas en <LoginScreen />', () => {

    
    beforeEach( () => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('debe hacer match con el snapshot', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de disparar la accion de startGoogleLogin', () => {
        
        wrapper.find('.google-btn').prop('onClick')();
        
        expect( startGoogleLogin ).toHaveBeenCalled();
        
    });
    
    test('debe de disparar el startLogin con los respectivos argumentos', () => {
        
        wrapper.find('form').prop('onSubmit')( { preventDefault: jest.fn() } );

        const email= 'chechox5@gmail.com';
        const password= '123456';
        
        expect( startLoginEmailPassword ).toHaveBeenCalledWith( email ,password );
    });
    
    
    
    
});
