import { defineStore } from "pinia";
import { db } from "@/firebase.js";
import { doc, getDoc } from "firebase/firestore";

//useStore could be anything like useUser, userCart
// the first argunemnt is a unique id of the store across your application
export const useStorePerfil = defineStore("idPerfil", {
  //arrow function recommended for full type inference
  state: () => {
    /**
     * @description - Retorna un objeto que es el estado de Pinia
     * @param {Object} datosPersonal - Datos cogidos de la colleccióndatospersonales de firestore
     */
    return {
      // all these properties will have their type inferred automatically

      datosPersonales: {}
    };
  },
  actions: {
    /**
     * @description Leer datos de la colección firestore datospersonales y guardarlo en la propiedad datosPersonales
     */
    async setDatosPersonales() {
      const datosPersonalesRef = doc(
        db,
        "datospersonales",
        "pjEc0EcmhPFsVbfnQDq4"
      );
      const capturaDoc = await getDoc(datosPersonalesRef);
      if (capturaDoc.exists()) {
        // console.log(capturaDoc.data())
        this.datosPersonales = capturaDoc.data();
      } else {
        console.log("no fue ):");
      }
    },
  },
  getters: {
      getNombreCompleto(state) {
          return `${state.datosPersonales.nombre} ${state.datosPersonales.apellido1} ${state.datosPersonales.apellido2}`;
      },
      getDiaMesAnho(state) {
          if (!state.datosPersonales.fechaNacimiento || typeof state.datosPersonales.fechaNacimiento.toDate !== "function") {
              return '';
          }
          const date = new Date(state.datosPersonales.fechaNacimiento.toDate())
          return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
      }
  },
});
