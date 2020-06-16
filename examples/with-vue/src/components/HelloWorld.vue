<template>
  <div class="hello">
    <hr />
    <span class="spacing">
      <legods-button @buttonClick="event => handleClick(event)">Default</legods-button>
    </span>
    <span class="spacing">
      <legods-button variant="primary" @buttonClick="event => handleClick(event)">Primary</legods-button>
    </span>
    <span class="spacing">
      <legods-button variant="secondary" @buttonClick="event => handleClick(event)">Secondary</legods-button>
    </span>
    <span class="spacing">
      <legods-button variant="tertiary" @buttonClick="event => handleClick(event)">Tertiary</legods-button>
    </span>
    <span class="spacing">
      <legods-button variant="dark" @buttonClick="event => handleClick(event)">Dark</legods-button>
    </span>
    <h3>Flat Buttons</h3>
    <section>
      <span class="spacing">
        <legods-button flat @buttonClick="event => handleClick(event)">Default</legods-button>
      </span>
      <span class="spacing">
        <legods-button flat variant="primary" @buttonClick="event => handleClick(event)">Primary</legods-button>
      </span>
      <span class="spacing">
        <legods-button flat variant="secondary" @buttonClick="event => handleClick(event)">Secondary</legods-button>
      </span>
      <span class="spacing">
        <legods-button flat variant="tertiary" @buttonClick="event => handleClick(event)">Tertiary</legods-button>
      </span>
      <span class="spacing">
        <legods-button flat variant="dark" @buttonClick="event => handleClick(event)">Dark</legods-button>
      </span>
    </section>

    <h3>Disabled Button</h3>
    <section>
      <span class="spacing">
        <legods-button flat variant="primary" disabled @buttonClick="event => handleClick(event)">disabled flat button</legods-button>
      </span>
      <span class="spacing">
        <legods-button variant="primary" disabled @buttonClick="event => handleClick(event)">disabled button</legods-button>
      </span>
    </section>

    <h3>Full Width Button</h3>
    <section>
      <span class="spacing">
        <legods-button flat full @buttonClick="event => handleClick(event)">Full width flat button</legods-button>
      </span>
      <span class="spacing">
        <legods-button full @buttonClick="event => handleClick(event)">Full with button</legods-button>
      </span>
    </section>

    <h3>Styled Button</h3>
    <section>
      <span class="spacing">
        <legods-button 
          @buttonClick="event => handleClick(event)"
          aria-label="Button with customizable style (pink color) and a11y attributes"
          :styles.prop="{
            width: '200px',
            height: '80px',
            backgroundColor: '#ff57ac'
          }">Styled button</legods-button>
      </span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    handleClick: function (event) {
      console.log(event.detail)
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
