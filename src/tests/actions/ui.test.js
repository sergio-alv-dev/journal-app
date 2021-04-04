import { removeError, setError, uiFinishLoading, uiStartLoading } from "../../actions/ui"
import { types } from "../../types/types";


describe('Pruebas en actuins/ui', () => {

    test('Todas las acciones sincronas deben funcionar', () => {

        const error = 'ERRRRRRROR'
        const action = setError( error );
        
        expect( action ).toEqual({
            type: types.uiSetError,
            payload: error,
        })

        const uiStartLoadingAction = removeError();
        const uiFinishLoadingAction = uiStartLoading();
        const removeErrorAction = uiFinishLoading();
        
        expect ( uiStartLoadingAction ).toEqual( { type: types.uiRemoveError } );
        expect ( uiFinishLoadingAction ).toEqual( { type: types.uiStartLoading } );
        expect ( removeErrorAction ).toEqual( { type: types.uiFinishLoading } );

    })
    
    
})
