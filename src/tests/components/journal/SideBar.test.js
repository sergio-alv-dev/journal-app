import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { Sidebar } from "../../../components/journal/Sidebar";
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}));

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn(),
}));


const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {
    auth: {
        uid: '123',
        name: 'sergio'
    },
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

const wrapper = mount(

    <Provider store = { store }>
        <MemoryRouter>
            <Sidebar />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <SideBar />', () => {

    beforeEach( () => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('debe de mostrarse correctamente', () => { expect( wrapper ).toMatchSnapshot() });

    test('debe de llamar el startLogout', () => {
        wrapper.find('.btn').prop('onClick')();
        expect( startLogout ).toHaveBeenCalled();
    });
    
    test('debe de llamar el startNewNote', () => {
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect( startNewNote ).toHaveBeenCalled();
    });
    
    
    
});
