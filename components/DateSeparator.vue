<template>
  <h2 class="date-separator">{{ date }}</h2>
</template>

<script>
export default {
  props: ['date'],
}
</script>

<style>
.date-separator {
  text-align: left;
  border-bottom: solid 1px var(--secondary-dark);
  padding: 0.25em 0.5em;
  color: var(--secondary-dark);
}
</style>