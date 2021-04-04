import { types } from "../../types/types"


describe('Pruebas para types.js', () => {

    test('el objeto types debe contener todos los types', () => {

        const typesTest = {
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
        
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set Active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Update note',
            notesFileUrl: '[Notes] Update image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
        }

        expect( typesTest).toEqual( types );
        
    })
    
    
})
