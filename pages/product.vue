<template>
  <v-container v-if="this.$store.state.user">
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Selecciona fechas de reserva"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="dates" range
            ><v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(dates)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-btn class="primary" @click="search">Buscar</v-btn>
      </v-col>
    </v-row>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="(item, index) in cars" :key="index" xs12 md6>
          <picture-card :product="item"></picture-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
  <v-container v-else>
    <v-card class="mx-auto" width="700" height="150">
      <v-card-title class="headline justify-center" align-center>
        Debes iniciar sesión para acceder a los productos
      </v-card-title>
      <v-card-actions class="justify-center">
        <v-btn color="primary" nuxt to="/login">
          Iniciar sesión
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
import PictureCard from '~/components/PictureCard'
export default {
  name: 'Product',
  components: {
    PictureCard
  },
  data() {
    return {
      cars: [],
      dates: ['2020-07-10', '2020-07-20'],
      menu: false
    }
  },
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ')
    }
  },
  created() {
    const currentObj = this
    axios
      .get('http://127.0.0.1:8000/products/api/cars', {
        params: {
          start: this.dates[0],
          end: this.dates[1]
        }
      })
      .then((response) => {
        this.cars = response.data
      })
      .catch((error) => {
        currentObj.logged_in = error
      })
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    search() {
      const currentObj = this
      axios
        .get('http://127.0.0.1:8000/products/api/cars', {
          params: {
            start: this.dates[0],
            end: this.dates[1]
          }
        })
        .then((response) => {
          this.cars = response.data
        })
        .catch((error) => {
          currentObj.logged_in = error
        })
    }
  }
}
</script>
