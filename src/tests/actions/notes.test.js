/**
 * @jest-environment node
 * 
 */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startLoadingNotes, startNewNote, startSaveNote } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { types } from '../../types/types';
// import { fileUpload } from '../../helpers/fileUpload';



// jest.setTimeout(30000);
 
const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {
    auth: {
        uid: 'testing'
    }
}

let store = mockStore( initState )

//  testing
const uid = store.getState().auth.uid;


describe('Pruebas en actions/notes', () => {

    beforeEach( () => {
        store = mockStore( initState )
    })

    test('debe de crear una nueva nota startNewNote', async() => {

        await store.dispatch( startNewNote() );

        const actions = store.getActions();

        expect ( actions[0]).toEqual( {
            type: types.notesActive,
            payload:{
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            } 
        });

        expect ( actions[1]).toEqual( {
            type: types.notesAddNew,
            payload:{
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            } 
        });

        
         const payloadId = actions[1].payload.id;

        // docId
        await db.doc(`/${ uid }/journal/notes/${ payloadId }`).delete();
        
    })
    
    test('startLoadingNotes debe cargar las notas', async () => {

        await store.dispatch( startLoadingNotes( uid ) );

        const actions = store.getActions();

        expect ( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect( actions[0].payload[0] ).toMatchObject( expected );
        
    })

    test('startSaveNote debe de actualizar la nota', async () => {

        const note = {
            id: 'BnEHyoIftNQhzwNww0q7',
            title: 'titulo test',
            body: 'body test',

        };

        await store.dispatch( startSaveNote( note ) );

        const actions = store.getActions( );

        // console.log(actions)
        expect( actions[0].type).toBe( types.notesUpdated );

        const docRef = await db.doc(`/testing/journal/notes/${ note.id }`).get()

        expect( docRef.data().title ).toBe( note.title );
        
    })

    

    // test('startUploading debe de actualizar el url del entry', async () => {

    //     // const file = new File([ ], 'foto.jpg');
    //     const file = new File([ ], 'foto.png' );


    //     console.log( file )
    //     await store.dispatch( startUploading( file ) );

    // })
    
    
    
    
})
