<template>
  <soma-text-field
    :label="label"
    :name="name"
    :inputId="inputId"
    :value="value"
    @soma-change="onValueChange"
    aria-label="">
  </soma-text-field>
</template>

<script>
  export default {
    props: {
      label: String,
      name: String,
      value: String,
      inputId: String,
    },
    methods: {
      onValueChange: function(ev) {
        this.$emit('input', ev.target.value)
      }
    }
  }
</script>