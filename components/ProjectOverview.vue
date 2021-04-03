<template>
  <div class="project-overview">
    <img
      class="project-picture"
      :src="project.img"
      :alt="project.alt"
    />
    <div class="project-details">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-date">{{ project.date }}</p>
      <p class="project-description">{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
}
</script>

<style>
.project-overview {
  border: solid 1px gray;
  display: flex;
  flex-direction: row;
}

.project-picture {
  min-width: 100px;
}

.project-details {
  flex-grow: 1;
}

.project-title {
}

.project-description {
}

.project-date {
}
</style>