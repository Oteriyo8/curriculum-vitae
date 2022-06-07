import { defineStore } from "pinia";
import { auth } from "../firebase";
import { signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";
import router from "../router";

export const useStoreUsers = defineStore("users", {
  state: () => {
    return {
      user: null,
      errores: null
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
    logged() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, ...
          this.user = user;
        } else {
          this.user = null;
        }
      })
    },
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
    async signIn({ email, password }) {
      //     const {email,password} = datos;
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      this.user = userCredential.user
        
     
    },
  },
});
