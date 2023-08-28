<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(null);
</script>

<script lang="ts">
export default {
  data: () => ({
    drawer: null,
    items: [
      {
        title: "Todo",
        value: "todo",
        icon: "mdi-format-list-checks",
        to: "/todo",
      },
      {
        title: "About",
        value: "about",
        icon: "mdi-help-box",
        to: "/about",
      },
    ],
  }),
};
</script>

<template>
  <v-app prominent>
    <v-navigation-drawer
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      v-model="drawer"
      theme="dark"
    >
      <div class="ma-3">
        <v-list-item-title>Vuetify</v-list-item-title>
        <v-list-item-subtitle>Todo list!</v-list-item-subtitle>
      </div>

      <v-divider></v-divider>

      <v-list nav v-for="item in items">
        <v-list-item
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <!-- @vue-ignore -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main >
      <!-- Content goes here! -->
      <slot/>
    </v-main>
  </v-app>
</template>

<style scoped>
* {
  font-family: "Inter";
}
</style>
