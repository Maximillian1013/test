<template>
  <div class="mt-6">
    <h1 class="ml-4 lg:ml-0">Добавление и редактирование заметок</h1>
    <div>
      <input type="text" v-model="task.text"
                class="border border-gray-400 focus:border-gray-600 rounded-lg w-5/6 ml-4 lg:ml-0 lg:w-1/3 p-3 resize-none outline-none">
      <div :key="localKey">
        <div class="flex flex-row items-center mt-2 ml-4 lg:ml-0" v-for="(todo, key) in task.todos" :key="key">
          <input v-model="todo.is_checked" type="checkbox" @click="checkTask($event.target.checked, key)">
          <input type="text" class="border border-gray-400 focus:border-gray-600 rounded-lg w-4/5 lg:w-1/4 ml-4"
                 v-model="todo.text">
          <button @click="deleteTodo(key)"><img src="@/assets/trash-bin-todo.svg" alt=""></button>
        </div>
      </div>
      <button class="flex flex-row items-center mt-2 ml-4 lg:ml-0 hover:underline" @click="addTodo(todos.length)">
        <img class="w-5 border border-gray-700 rounded-full mr-2" src="@/assets/plus.svg" alt="">Добавить todo
      </button>
    </div>
    <div class="w-5/6 lg:w-1/3 flex flex-row justify-between mt-6 ml-6 lg:ml-0">
      <button class="hover:underline" @click="confirm_modal = true">Удалить заметку</button>
      <button class="ml-4 lg:ml-0 hover:underline" @click="setDataToTask">Сохранить изменения</button>
    </div>
    <p class="mr-12 text-lg" v-if="changes_saved">Изменения были сохранены.</p>
    <confirm-modal v-if="confirm_modal" @close="confirm_modal = false" @deleteTask="deleteTask" class="z-70 flex" key="confirm-modal"></confirm-modal>
    <portal-target name="modals" class="relative z-60"></portal-target>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import clone from 'lodash/cloneDeep';
import ConfirmModal from '../components/confirm-modal.vue';

export default {
  components: { ConfirmModal },

  data() {
    return {
      task: [],
      confirm_modal: false,
      changes_saved: false,
      todos: [],
      localKey: 0,
    };
  },
  mounted() {
    this.$store.dispatch('selectTaskId', this.$route.params.task);
    this.task = clone(this.defaultTask[this.$route.params.task]);
  },
  created() {
    if (!this.task) {
      this.task = { text: '', todos: [{ is_checked: false, text: '' }] };
    }
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'z') {
        console.log('asdaaw');
        console.log(this.defaultTask[this.$route.params.task], 'this.defaultTask[this.$route.params.task]');
        this.task = this.defaultTask[this.$route.params.task];
      }
    });
  },
  watch: {
    'task.todos': function () {
      console.log('task');
      this.localKey += 1;
    },
  },
  methods: {
    setDataToTask() {
      this.$store.dispatch('selectTask', this.task);
      this.changes_saved = true;
      setTimeout(() => { this.changes_saved = false; }, 1000);
    },
    addTodo() {
      const todosLength = this.task.todos.length;
      this.task.todos[todosLength] = { is_checked: false, text: '' };
      this.localKey += 1;
    },
    deleteTodo(key) {
      this.task.todos.splice(key, 1);
    },
    deleteTask() {
      this.$store.dispatch('deleteTask').then(() => {
        this.$router.push('/');
      });
    },
    checkTask(data, key) {
      this.task[this.$route.params.task].todos[key].is_checked = data;
    },
    ...mapActions({
      setTaskId: 'setTaskId',
      setTask: 'setTask',
    }),
  },
  computed: {
    ...mapState({
      defaultTask: (state) => state.tasks.tasks,
      defaultTaskId: (state) => state.tasks.taskId,
    }),
    ...mapGetters({
      getTasks: 'getTasks',
    }),
  },
};
</script>
<style scoped>
  button:focus {outline:0;}
</style>
