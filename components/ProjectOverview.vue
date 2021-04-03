<template>
  <div class="project-overview">
    <img
      class="project-picture"
      :src="require(`~/assets/images/${project.img}`)"
      :alt="project.alt"
    />
    <div class="project-details">
      <h3 class="project-title">{{ project.title }}</h3>
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
  border: solid 1px rgba(var(--secondary-rgb), 0.5);
  background-color: rgba(var(--secondary-rgb), 0.1);
  display: flex;
  flex-direction: row;
}

.project-picture {
  width: 100px;
  height: auto;
  margin-right: 1em;
  border-radius: 1em;
  align-self: center;
  flex-grow: 1;
  flex-basis: 0px;
}

.project-details {
  flex-grow: 2;
  flex-basis: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-title {
  text-align: left;
  color: var(--primary-dark);
  margin-bottom: 0.2em;
}

.project-description {
  text-align: left;
  color: var(--primary-medium);
}
</style>