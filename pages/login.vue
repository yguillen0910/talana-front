<template>
  <v-layout class="pt-5" column justify-center align-center>
    <v-card width="400">
      <v-card-title>Iniciar sesión</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-text-field
          v-model="username"
          label="Usuario"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="password"
          label="Contraseña"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn class="mr-4 primary" @click="login()">ingresar</v-btn>
        <v-btn color="primary" outlined @click="clear">limpiar</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      logged_in: false,
      show1: false,
      token: ''
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    login() {
      const currentObj = this
      return axios
        .get('http://127.0.0.1:8000/accounts/api/login', {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then((response) => {
          this.$store.commit('saveToken', response.data.token)
          this.$store.commit('saveUser', this.username)
          currentObj.$router.push('/product')
        })
        .catch((error) => {
          currentObj.logged_in = error
        })
    },
    clear() {
      this.username = ''
      this.password = ''
    }
  }
}
</script>
