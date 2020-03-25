const state = {
  tasks: [],
  taskId: '',
};

const getters = {
  getTaskId(st) {
    return (st.taskId);
  },
  getTasks(st) {
    return (st.tasks[st.taskId]);
  },
};

const mutations = {
  setNewTask(ctxState, newTaskId) {
    ctxState.tasks[newTaskId] = { text: '', todos: [{ is_checked: false, text: '' }] };
  },
  setTaskId(ctxState, newTaskId) {
    ctxState.taskId = newTaskId;
  },
  setTask(ctxState, task) {
    ctxState.tasks[ctxState.taskId] = task;
  },
  deleteTask(ctxState) {
    ctxState.tasks.splice(ctxState.taskId, 1);
  },
};

const actions = {
  selectTaskId({ commit }, taskId) {
    commit('setTaskId', taskId);
  },
  selectTask({ commit }, task) {
    commit('setTask', task);
  },
  selectNewTask({ commit }, newTask) {
    commit('setNewTask', newTask);
  },
  deleteTask({ commit }) {
    commit('deleteTask');
  },
};

export default {
  mutations,
  actions,
  getters,
  state,
};
