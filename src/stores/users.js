import { defineStore } from "pinia";
import { auth } from "../firebase";
import { signInWithEmailAndPassword,signOut } from "firebase/auth";
import router from "../router";

export const useStoreUsers = defineStore("users", {
  state: () => {
    return {
      user: null,
    };
  },
  getters: {
      getEmailUser: (state) => {
          if(state.user && state.user.email) {
              return state.user.email;
          } else {
              return "No hay usuario";
          }
      }
  },
  actions: {
      logout( ) {
        signOut(auth).then(() => {
            this.user = null;
            router.push('/sign-in');
            console.log(this.user)
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
      },
    signIn({ email, password }) {
      //     const {email,password} = datos;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in, this. coge las variables que hay en el state
          this.user = userCredential.user;
          // ...
          router.push('/');
          console.log(this.user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "=>", errorMessage)
        });
    },
  },
});
