<script lang="ts" setup>
const tasks = ref([
  {
    id: 1,
    title: "Wake up",
  },
  {
    id: 2,
    title: "Get milk",
  },
  {
    id: 3,
    title: "Drink milk",
  },
]);
</script>

<template>
  <div class="">
    <v-list v-for="task in tasks" lines="one" select-strategy="classic">
      <v-list-item :key="task.id" :value="task.title">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>{{ task.title }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>
    </v-list>
  </div>
</template>
