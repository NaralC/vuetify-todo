<script lang="ts" setup>
type Task = {
  id: number;
  title: string;
  done: boolean;
};

const tasks = ref<Task[]>([
  {
    id: 1,
    title: "Wake up",
    done: false,
  },
  {
    id: 2,
    title: "Get milk",
    done: false,
  },
  {
    id: 3,
    title: "Drink milk",
    done: false,
  },
]);

const doneTask = (id: number) => {
  let task = tasks.value.filter((task) => task.id === id)[0];

  task.done = !task.done;
};

const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

const addTask = (text: string) => {
  const newTask: Task = {
    id: Date.now(),
    title: text,
    done: false,
  };

  tasks.value.push(newTask)
};

const textInput = ref("");
</script>

<template>
  <div>
    <v-text-field
      class="px-5 pt-5"
      clearable
      label="New Task"
      prepend-inner-icon="$vuetify"
      variant="solo"
      v-model="textInput"
      @click:prepend-inner="() => {
        addTask(textInput);
        textInput = ''
      }"
    ></v-text-field>

    <v-list v-for="task in tasks" select-strategy="classic">
      <v-list-item
        @click="doneTask(task.id)"
        :key="task.id"
        :value="task.title"
        :class="{ 'bg-blue-lighten-4': task.done }"
        class="flex"
      >
        <v-list-item-action start>
          <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
        </v-list-item-action>

        <v-list-item-title
          :class="{ 'text-decoration-line-through': task.done }"
          >{{ task.title }}</v-list-item-title
        >

        <v-btn
          @click.stop="deleteTask(task.id)"
          color="red"
          icon="mdi-delete"
          variant="text"
        ></v-btn>
      </v-list-item>

      <v-divider></v-divider>
    </v-list>
  </div>
</template>
