import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types";


const initialState = {
    uid: 123123,
    name: 'Sergio'
}

describe('Pruebas para authReducer', () => {

    test('Debe retornar el objeto en el login', () => {

        const action = {
            type: types.login,
            payload: {
                uid: 123123,
                displayName : 'Sergio'
            }
        }
        
        const state = authReducer( initialState, action);

        expect( state ).toEqual( initialState );
    })

    test('debe retornar objeto vacío en logout', () => {

        const action = {
            type: types.logout,
            payload: {
                uid: 123123,
                displayName : 'Sergio'
            }
        }
        const state = authReducer( initialState , action);

        expect(state).toEqual( { } );
        
    })

    test('debe retornar el mismo estado', () => {

        const action = {
            type: 'asdasd',
            payload: {
                uid: 123123,
                displayName : 'Sergio'
            }
        }

        const state = authReducer( initialState , action);

        expect( state ).toEqual( initialState );
        
    })
})
