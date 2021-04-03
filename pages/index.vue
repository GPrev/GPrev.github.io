<template>
  <div>
    <div class="container">
      <div>
        <Logo />
        <h1 class="title">gprev-portfolio</h1>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
    <div class="container project-overview-container">
      <div
        v-for="(projects, date, idx) in projectsGrouped"
        :key="date"
        :style='"order: -"+idx'
      >
        <date-separator :date="date" />
        <project-overview
          class="project-overview-item"
          v-for="project in projects"
          :project="project"
          :key="project.slug"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectOverview from "~/components/ProjectOverview.vue"

export default {
  components: { ProjectOverview },
  async asyncData ({ $content }) {
    const projects = await $content('project-overview')
      .only(['title', 'description', 'img', 'alt', 'date', 'video'])
      .sortBy('date', 'asc')
      .fetch()

    const groupBy = function (xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };

    const projectsGrouped = groupBy(projects, 'date')

    return {
      projectsGrouped
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.project-overview-container {
  flex-direction: column;
  align-items: stretch;
  max-width: 800px;
}

.project-overview-item {
  margin: 1em;
  padding: 1em;
}
</style>
