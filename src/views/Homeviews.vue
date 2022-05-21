<template>
  <div class="home">
    <h1 class="my-5">Lista de Juegos Disponibles</h1>

    <div class="container">
        <div class="row">
            <div class="col-12  col-md-4" v-for="(juego, i) in juegos" :key="i">
              <div class="card m-2" >
              <img :src="(`${juego.background_image}`)" class="card-img-top" style="max-height: 13rem"  />
              <div class="card-body">
                <h5 class="card-title">{{ juego.name }}</h5>
                <p class="card-text" >
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Rating: {{ juego.rating }}</li>
                    <li class="list-group-item">Released: {{ juego.released }}</li>
                    <li class="list-group-item">Updated: {{ juego.updated }}</li>
                  </ul> 
                </p>
                <hr>
                <button @click="juegoSelected = juego.id" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">
                  Opinar
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>

    
    <div class="modal fade" id="exampleModal">
      <div class="modal-dialog">
        <div class="modal-body w-85 m-auto">
          <div class="modal-content p-4">
            <h5>Escribe tu opinion para el juego: <strong> {{ juegoSeleccionado.name }} </strong> </h5>
    <div>

              <label class="label">Nombre:</label>
              <input v-model="opinion.usuario.nombre" class="form-control" placeholder="Evan You"/>
            </div>
            <div>
              <label class="label">Opiniones:</label>
              <textarea v-model="opinion.descripcion" class="form-control" placeholder="Tu opinión debe ir aquí..."></textarea>
            </div>
            <hr />
            <div class="ms-auto">
              <button data-bs-toggle="modal" data-bs-dismiss="modal"  @click="agregarOpinion" class="btn btn-secondary mx-3 mb-2">
                Cerrar
              </button>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" @click="agregarOpinion" class="btn btn-primary mb-2">Guardar</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapMutations(["AGREGAR_OPINION"]),
    agregarOpinion() {
      const { juegoSelected } = this;
      const opinion = {
        ...this.opinion,
        usuario: { ...this.opinion.usuario },
      };
      opinion.idJuego = juegoSelected;
      opinion.id = Math.floor(Math.random() * 999);
      this.AGREGAR_OPINION(opinion);
      this.opinion.usuario = { nombre: "" };
      this.opinion.descripcion = "";
    },
  },
  data() {
    return {
      juegoSelected: null,
      opinion: {
        usuario: {
          nombre: "",
        },
        descripcion: "",
      },
    };
  },
  computed: {
    ...mapState(["juegos", "opiniones"]),
    ...mapGetters(["getJuegosAndOpiniones", "getJuegoById"]),
    juegoSeleccionado() {
      const { juegoSelected } = this;
      return this.getJuegoById(juegoSelected) || {};
    },
  },
};
</script>

<style >
label{
  text-align: left;
}
</style>
