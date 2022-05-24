import { defineStore } from "pinia";
import db from '../hook/firebase.config';
import { collection, doc, query, getDocs } from '@firebase/firestore';

export const useStoreDatosPersonales = defineStore(
    "datosPersonales",
    {
        state: () => {
            return {
                curriculum: []
            }
            
        },
        actions: {
            /**
             * Función que coge datos de firestore y los almacena en un array de datos
             */
            async setDatosCurriculum() {
                const curriculumRef = collection(db, 'curriculum');
                const consulta = query(curriculumRef);
                const resultadoConsulta = await getDocs(consulta);
                resultadoConsulta.forEach((fila) => {
                    this.curriculum.push(fila.data())
                    // console.log(fila.data());
                });
                
            }
        }
    }
    );






