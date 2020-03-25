<template>
  <div class="flex flex-col w-full mx-8 lg:mx-0 pt-16">
    <p v-if="tasks.length === 0" v-text="'Добавьте новые заметки'"></p>
    <div class="flex flex-col" v-if="tasks.length !== 0">
      <div class="mb-8" v-for="(task, key) in tasks" :key="key">
        <div class="flex flex-col" :key="key">
          <div class="flex flex-row">
            <p class="text-sm lg:text-lg w-1/3" v-text="task.text"></p>
            <button class="ml-10 hover:underline" @click="editTask(key)">Изменить заметку</button>
          </div>
          <div v-for="(todo, key) in task.todos" :key="key">
            <div class="flex flex-row items-center" v-if="key < 3">
              <span class="border rounded-full bg-black w-3 h-3 mr-3"></span>
              <p :class="{ 'checked-decoration': todo.is_checked === true }" v-text="todo.text"></p>
            </div>
          </div>
          <div class="flex flex-row mt-2" v-if="task.todos.length > 3">
            <span class="border rounded-full bg-black mr-1" style="width: 0.35rem; height: 0.35rem;"></span>
            <span class="border rounded-full bg-black mr-1" style="width: 0.35rem; height: 0.35rem;"></span>
            <span class="border rounded-full bg-black mr-1" style="width: 0.35rem; height: 0.35rem;"></span>
          </div>
      </div>
      </div>
    </div>
    <div class="mt-4">
      <button class="border border-blue-400 rounded-full px-2 py-1 text-lg font-semibold add-task-button outline-none"
              @click="addTask">Добавить заметку</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      tasks: [],
      localKey: 0,
    };
  },
  created() {
    this.tasks = this.defaultTask;
  },
  methods: {
    addTask() {
      this.$router.push(`/edit-task/${this.tasks.length}`);
      this.$store.dispatch('selectNewTask', this.tasks.length);
    },
    editTask(key) {
      this.$router.push(`/edit-task/${key}`);
    },
  },
  computed: {
    ...mapState({
      defaultTask: (state) => state.tasks.tasks,
      defaultTaskId: (state) => state.tasks.taskId,
    }),
  },
};
</script>
<style scoped lang="less">
  .add-task-button {
    &:hover{
      color: white;
      background-color: #63b3ed;
    }
  }

 .checked-decoration{
   text-decoration: line-through;
 }
</style>
