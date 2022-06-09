import { defineStore } from "pinia";
import { db } from "@/firebase.js";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

//useStore could be anything like useUser, userCart
// the first argunemnt is a unique id of the store across your application
export const useStoreCurric = defineStore("idCurriculum", {
  //arrow function recommended for full type inference
  state: () => {
    /**
     * @description - Retorna un objeto que es el estado de Pinia
     * @param {Object} datosCurriculum - Datos cogidos de la colleccion curriculum de firestore
     */
    return {
      // all these properties will have their type inferred automatically

      datosCurriculum : []
    };
  },
  actions: {
    /**
     * @description Leer datos de la colección firestore curriculum y guardarlo en la propiedad datosCurriculum
     */
    // async setDatosCurric() {
    //   const datosCurricRef = doc(
    //     db,
    //     "curriculum",
    //     "Descripcon",
    //     );
    //     console.log(datosCurricRef)
    //   const capturaDoc = await getDoc(datosCurricRef);
    //   if (capturaDoc.exists()) {
    //     // console.log(capturaDoc.data())
    //     this.datosCurriculum = capturaDoc.data();
    //   } else {
    //     console.log("no fue ):");
    //   }
    // }
    async setDatosCurric() {
    //   const datosCurricRef = doc(
    //     db,
    //     "curriculum",
    //     "Descripcon",
    //     );
        // console.log(datosCurricRef)
      const capturaDoc = await getDocs(collection(db, "curriculum"));
      
      capturaDoc.forEach((doc) => {
          this.datosCurriculum.push(doc.data())/*doc.id, "=>", doc.data()*/;
        //   console.log(doc.data())
          
      })
      console.log(this.datosCurriculum[0].titulo)
    //   if (capturaDoc.exists()) {
    //   } else {
    //     console.log("no fue ):");
    //   }
    }
  },
  getters: {
//       getNombreCompleto(state) {
//           return `${state.datosPersonales.nombre} ${state.datosPersonales.apellido1} ${state.datosPersonales.apellido2}`;
//       },
//       getDiaMesAnho(state) {
//           if (!state.datosPersonales.fechaNacimiento || typeof state.datosPersonales.fechaNacimiento.toDate !== "function") {
//               return '';
//           }
//           const date = new Date(state.datosPersonales.fechaNacimiento.toDate())
//           return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
//       }
        getHabilidades(state) {
            return `${state.datosCurriculum[3].h1}\n ${state.datosCurriculum[3].h2}\n ${state.datosCurriculum[3].h3}\n ${state.datosCurriculum[3].h4}\n ${state.datosCurriculum[3].h5}`;
        },
        getEstudios(state) {
            return `${state.datosCurriculum[5].e1}\n ${state.datosCurriculum[5].e2}\n`;
        }
  },
});