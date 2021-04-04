import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { uiFinishLoading, uiStartLoading } from "./ui";
import Swal from 'sweetalert2';
import { notesLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
    
    
    return ( dispatch ) => {
        
        dispatch( uiStartLoading() );

         return firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                // console.log(user);
                dispatch( login(user.uid, user.displayName ) );
                dispatch( uiFinishLoading() );
            })
            .catch( e => {
                console.log(e);
                dispatch( uiFinishLoading() );
                Swal.fire('Error', e.message, 'error');
            })
        

    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async ({ user }) => {
            
            await user.updateProfile({ displayName:name });
            console.log(user);
            dispatch(
                login(user.uid, user.displayName )
            )
            
        })
        .catch( e => {
            console.log(e)
            Swal.fire('Error', e.message, 'error');
        })
    }

}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        // console.log( 'google' );

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName )
                )
                // console.log( userCred );
            })
            .catch( e => {
                console.log(e)
                Swal.fire('Error', e.message, 'error');

            })

    }
}


export const login = ( uid, displayName) => {
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async ( dispatch) => {
        await firebase.auth().signOut();

        dispatch( logout() );
        dispatch( notesLogout() );
    }
}

export const logout = () => ({
    type: types.logout
})