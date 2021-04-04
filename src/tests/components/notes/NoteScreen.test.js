import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote , startDeleting } from '../../../actions/notes';



jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn(),
    startDeleting: jest.fn(),
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
            title: 'hola, test',
            body: 'mundo, test',
            date: 1,
        }
    }
};

let store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(

    <Provider store = { store }>
        <MemoryRouter>
            <NoteScreen />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <NoteScreen />', () => {

    test('debe de mostrarse correctamente', () => { expect( wrapper ).toMatchSnapshot()});
    test('debe de disparar el activeNote', () => {

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'hola otra vez'
            }
        });

        expect( activeNote ).toHaveBeenCalledWith( 
            initState.notes.active.id,
            {
                id: 'abc',
                title: 'hola otra vez',
                body:'mundo, test',
                date: 1
            }
        );
        
        // expect( activeNote ).toHaveBeenCalledWith(
        //     1234,
        //     {
        //         id: 'abc',
        //         title: 'hola otra vez',
        //         body:'mundo, test',
        //         date: 0
        //     }
        // )

    })
    
    
    
})
