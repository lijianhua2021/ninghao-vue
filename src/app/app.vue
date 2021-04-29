<template>
<<<<<<< HEAD
  <h3>
    <router-link to="/">{{ name }}</router-link>
  </h3>
  <router-view></router-view>
</template>

=======
  <h3>{{ name }}</h3>
  <input type="text" v-model.trim="content" @change="onChangeContent" />
  <span>=> Content: {{ content }}</span>
</template>


>>>>>>> forms
<script>
export default {
  data() {
    return {
      name: '宁皓网',
<<<<<<< HEAD
    };
  },

  created() {
    console.log(this.$store.state);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
=======
      content: '',
    };
  },


  methods: {
    onChangeContent(){
      console.log(this.content, this.content.length);
    },
    },

};
</script>
<style>
@import './styles/app.css';
</style>
>>>>>>> forms
