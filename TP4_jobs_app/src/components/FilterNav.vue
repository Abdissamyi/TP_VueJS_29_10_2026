
<template>
  <section class="filters panel">
    <input
      :value="search"
      @input="$emit('update:search', $event.target.value)"
      type="search"
      placeholder="Poste, entreprise ou ville..."
    />

    <select
      :value="type"
      @change="$emit('update:type', $event.target.value)"
    >
      <option value="">Tous les contrats</option>
      <option value="Stage">Stage</option>
      <option value="CDI">CDI</option>
      <option value="CDD">CDD</option>
      <option value="Freelance">Freelance</option>
    </select>
  </section>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },

  emits: ['update:search', 'update:type']
}
</script>
