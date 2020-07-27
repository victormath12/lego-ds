<template>
  <div class="hello">
    <soma-button aria-label="" @soma-click="event => changeTheme('xp')">USAR XP</soma-button> &nbsp;
    <soma-button aria-label="" @soma-click="event => changeTheme('placeholder')">USAR CLEAR</soma-button>
    <hr />

    <pre>{{ formResult }}</pre>

    <form>

      <!-- Without v-model, just value and input event -->
      <soma-text-field
        label="label"
        name="name"
        inputId="inputId"
        :value="formResult.name"
        @input="formResult.name = $event.target.value"
        aria-label="">
      </soma-text-field>

      <!-- With v-model -->
      <SomaInput
        label="Idade"
        name="age"
        aria-label=""
        inputId="age"
        v-model="formResult.age">
      </SomaInput>

      <soma-button aria-label="" @soma-click="() => submitForm()">enviar</soma-button>
    </form>
    
  </div>
</template>

<script>
  import SomaDS from '@lego-ds/design-tokens';
  import SomaInput from './SomaInput.vue';

  export default {
    name: 'HelloWorld',
    components: {
      SomaInput,
    },
    props: {
      msg: String,
    },
    data: () => ({
      formResult: {
        name: '',
        age: '',
        enrolled: false
      },
    }),
    methods: {
      handleClick: function (event) {
        console.log(event.detail)
      },

      changeTheme: function (theme) {
        SomaDS.use(theme)
      },

      onValueChange: function(ev) {
        this.$emit('input', ev.target.value)
      },

      submitForm: function() {
        const {name, age, enrolled} = this.formResult;
        console.log({name, age, enrolled});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span.spacing {
    margin: 10px;
  }
</style>
