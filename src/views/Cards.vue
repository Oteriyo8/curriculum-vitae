<template>
  <div class="container mt-5">
    mostrar: {{ mostrar }}
    <br />
    estudios: {{ estudioss }}
    <br />
    habilidades: {{ habilidadess }}
    <br />
    <pre>
			{{ store.getNombreCompleto }}
		</pre>
    <pre>
      
    </pre>
    <div class="row mr-4">
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top img-fluid"
          src="../assets/negro.jpg"
          alt="Card image cap"
        />
        <div class="text-center">
          <img
            class="img-fluid yoimagen rounded-circle img-thumbnail"
            src="../assets/io2022.jpeg"
            alt="Fabian :)"
            height="100px"
            width="100px"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Currículum</h5>
          <p class="card-text">
            {{ storeC.datosCurriculum[1].description }}
          </p>
          <div class="radio">
            Tarjetas:
            <label class="radio-inline mr-2">
              <input type="radio" v-model="mostrar" :value="true" />Sí
            </label>
            <label class="radio-inline">
              <input type="radio" v-model="mostrar" :value="false" />No
            </label>
          </div>
          <div v-show="mostrar">
            <a v-on:click="estudios(estudioss)" class="btn btn-primary mr-1"
              >Estudios</a
            >
            <a v-on:click="habilidades(habilidadess)" class="btn btn-info"
              >Habilidades</a
            >
          </div>
        </div>
      </div>

      <div
        v-if="mostrar & (estudioss === true)"
        class="card"
        style="width: 18rem"
      >
        <img
          class="card-img-top img-fluid"
          src="../assets/negro.jpg"
          alt="Card image cap"
        />
        <div class="text-center">
          <img
            class="img-fluid yoimagen rounded-circle img-thumbnail"
            src="../assets/io2022.jpeg"
            alt="Fabian :)"
            height="100px"
            width="100px"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Estudios</h5>
          <p class="card-text">
            {{ storeC.getEstudios }}
          </p>
        </div>
      </div>
      <div
        v-if="mostrar & (habilidadess === true)"
        class="card"
        style="width: 18rem"
      >
        <img
          class="card-img-top img-fluid"
          src="../assets/negro.jpg"
          alt="Card image cap"
        />
        <div class="text-center">
          <img
            class="img-fluid yoimagen rounded-circle img-thumbnail"
            src="../assets/io2022.jpeg"
            alt="Fabian :)"
            height="100px"
            width="100px"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Habilidades</h5>
          <p class="card-text">
            {{ storeC.getHabilidades }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Librerías
import { ref } from "vue";
import { useStorePerfil } from "../stores/perfil";
import { useStoreCurric } from "../stores/curriculum"
// Arrancamos store
const store = useStorePerfil();
const storeC = useStoreCurric();

// Cargamos datos
store.setDatosPersonales();
storeC.setDatosCurric();

let mostrar = ref(null);
let estudioss = ref(false);
let habilidadess = ref(false);

const estudios = (e) => {
  if (e === false) {
    estudioss.value = true;
    return;
  } else {
    estudioss.value = false;
    return;
  }
};

const habilidades = (e) => {
  if (e === false) {
    habilidadess.value = true;
    return;
  } else {
    habilidadess.value = false;
    return;
  }
};
</script>
<style scoped>
.yoimagen {
  margin-top: -70px;
  border: -4px solid #ddd;
}
</style>
