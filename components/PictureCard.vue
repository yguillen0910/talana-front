<template v-if="this.$store.state.user">
  <v-card class="mx-auto" max-width="400">
    <v-card-title>{{ product.name }}</v-card-title>
    <v-img
      class="white--text align-end"
      height="200px"
      :src="images[getRandomInt(0, 9)]"
    >
    </v-img>

    <v-row align="center" class="mx-0">
      <v-rating
        :value="4.5"
        color="amber"
        dense
        half-increments
        readonly
        size="14"
      ></v-rating>

      <div class="grey--text ml-4">4.5 (413)</div>
    </v-row>

    <v-card-subtitle class="pb-3"
      >{{ brandModelText(product) }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <ul>
        <li>Número de puertas: {{ product.number_of_doors }}</li>
        <li>Diesel: {{ product.diesel ? 'Sí' : 'No' }}</li>
        <li>Tamaño: {{ product.size }}</li>
      </ul>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>
        Reservar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=',
        'https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&dpr=1500',
        'https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&dp&w=500',
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysdpr=1&w=500'
      ]
    }
  },
  props: {
    product: {
      required: true
    }
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    brandModelText(product) {
      return product.model__brand__name + ' / ' + product.model__name
    }
  }
}
</script>

<style scoped>
#title {
  color: black;
}
</style>
