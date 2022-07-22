<template>
	<div class="container">
		<div class="row justify-content-md-center">
			<div class="col col-lg-2">
				{{ store.getNombreCompleto }}
			</div>
			<div class="col-md-auto">
				aaa
			</div>
			<div class="col col-lg-2">3 of 3</div>
		</div>
		<div class="row">
			<div class="col">1 of 3</div>
			<div class="col-md-auto">
				{{ storeC.getEstudios }}
			</div>
			<div class="col col-lg-2">
				{{ storeC.getHabilidades }}
			</div>
		</div>
	</div>
</template>

<script setup>
// Librerías
import { ref } from "vue";
import { useStorePerfil } from "../stores/perfil";
import { useStoreCurric } from "../stores/curriculum";
// Arrancamos store
const store = useStorePerfil();
const storeC = useStoreCurric();

// Cargamos datos
store.setDatosPersonales();
storeC.setDatosCurric();
</script>
