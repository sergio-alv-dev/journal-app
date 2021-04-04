
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';

global.scrollTo = jest.fn(); 


jest.mock( '../../helpers/fileUpload' , () => ({
    fileUpload: jest.fn( () => {
        return 'http://hola-mundo.net/fav.jpg';
    })
}))


const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {
    auth: {
        uid: 'testing'
    },
    notes: {
        active: {
            id: 'BnEHyoIftNQhzwNww0q7',
            title: 'hola',
            body: 'mundo test'
        }

    }
}

let store = mockStore( initState )

jest.setTimeout(20000)

describe('Pruebas 2 para actions/notes', () => {


    beforeEach( () => {
        store = mockStore( initState )
    })

    test('startUploading debe de actualizar el url del entry', async () => {

        // const file = new File([ ], 'foto.jpg');
        const file = new File([ ], 'foto.png' );

        store.dispatch( startUploading( file ) );

        // const docRef =  await db.doc( `/testing/journal/notes/BnEHyoIftNQhzwNww0q7` ).get();

        // expect( docRef.data().url ).toBe( 'http://hola-mundo.net/fav.jpg' )

    })
    
    
})
