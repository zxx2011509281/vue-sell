<template>
<div>
  <h1>todo</h1>
  <section>
    <input class="allDone" type="checkbox" @click="allDone" v-model="flag">
    <input type="text" v-model.trim="todo" @keyup.enter="addTodo">
    <ul>
      <li v-show="todos.length" v-for="(item, index) in todos">
        <input class="toggle" type="checkbox" v-model="item.completed">
        <label>{{item.title}}</label>
        <button class='remove' @click="removeTodo(item)"></button>
      </li>
      
    </ul>
  </section>
    <ul class="filters">
      <li><a href="#/all" :class="{ selected: visibility == 'all' }">All</a></li>
      <li><a href="#/active" :class="{ selected: visibility == 'active' }">Active</a></li>
      <li><a href="#/completed" :class="{ selected: visibility == 'completed' }">Completed</a></li>
    </ul>
</div>
</template>
<script>

export default{
  data () {
    return {
      flag: false,
      todo: '',
      visibility: 'all'
    }
  },
  watch: {
  },
  filters: {

  },
  methods: {
    addTodo: function () {
      var value = this.todo && this.todo.trim()
      if (value) {
        this.$store.dispatch('addTodo', { title: value, completed: false })
        this.todo = ''
      }
    },
    removeTodo: function (todo) {
      this.$store.dispatch('removeTodo', todo)
    },
    allDone () {
      this.$store.dispatch('allDone')
    }
  },
  computed: {
    todos () {
      if (this.$route.params.slug === 'active') {
        return this.$store.getters.activeTodos
      }
      if (this.$route.params.slug === 'completed') {
        return this.$store.getters.completedTodos
      }
      return this.$store.getters.allTodos
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  section
    ul
      li
        border 1px solid pink
        position: relative
        margin 5px
        .toggle
          position: absolute
          left: 0
          top: 0
          height: 100%
          width: 25px
          margin 0
          padding 0      
        button
          position: absolute
          right: 0
          -webkit-appearance: none
          padding: 0
          border: none
          height: 100%
          width: 25px
          outline: none
          background-color: #fff
        button::after
          content : 'X'
          width: 22px
          height: 100%
          border: 1px solid #333
          position: absolute
          right: 0
          top: 0
          border-radius: 50% 
        
</style>