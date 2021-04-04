import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';


import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';


const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};

let store = mockStore( initState );
store.dispatch = jest.fn();

const note = {
    id: 10, 
    date: 1,
    title: 'hola',
    body: 'mundo',
    url: 'test url',
};

const wrapper = mount(

    <Provider store = { store }>
        <MemoryRouter>
            <JournalEntry {...note} />
        </MemoryRouter>
    </Provider>
);



describe('Pruebas en <JournalEntry />', () => {

    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de activar la nota', () => {

        wrapper.find('.journal__entry').prop('onClick')();

        expect( store.dispatch ).toHaveBeenCalledWith(
            activeNote( note.id, { ...note } )
        );
        
    })
    
    
    
})
