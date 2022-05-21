<template>
    <div>
        <h1 class="my-5">Lista de Opiniones</h1>
        <div class="container" v-if="existenOpiniones">
            <div class="alert alert-danger">
                No existen opiniones por mostrar.
            </div>
        </div>

        <div v-else class="container">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item" v-for="(opinion ,i) of getJuegosAndOpiniones" :key="i" >
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse-${opinion.id}`" aria-expanded="true"
                aria-controls="collapseOne">
               <span> Nueva opinión de: <strong>{{ opinion.usuario.nombre}}</strong></span>, <span> del juego: <strong>{{ opinion.juego.name}}</strong></span>
                </button>
            </h2>
            <div :id="`collapse-${opinion.id}`"  class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                {{opinion.descripcion}}
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["getJuegosAndOpiniones"]),
        existenOpiniones(){
        return !this.getJuegosAndOpiniones.length
        }
    },
};
</script>

<style>
.accordion-button{
    font-size: 22px;
}

.accordion-collapse{
    font-size: 20px;
    text-align: left;
}
</style>