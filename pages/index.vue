<template>
  <div>
    <div class="container">
      <div>
        <Logo />
        <h1 class="title">GPrev<wbr>.getPortfolio()</h1>
        <div class="links">
          <a
            href="https://github.com/Gprev"
            target="_blank"
            rel="noopener noreferrer"
            class="button"
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
          ref="poi"
          v-for="project in projects"
          :project="project"
          :key="project.slug"
        />
      </div>
    </div>
    <div class="background">
      <nuxt-content :document="project" />
    </div>
  </div>
</template>

<script>
import ProjectOverview from "~/components/ProjectOverview.vue"

export default {
  components: { ProjectOverview },

  // data () {
  //   return { project: null }
  // },

  async asyncData ({ $content }) {
    const projects = await $content('project-overview')
      //.only(['title', 'description', 'img', 'alt', 'date', 'video'])
      .sortBy('date', 'asc')
      .fetch()

    const groupBy = function (xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };

    const projectsGrouped = groupBy(projects, 'date')

    const project = projects[2]

    return {
      projectsGrouped,
      project
    }
  },

  mounted () {
    this.initVideoPlayTriggers()
    this.initBackgroundChangeTriggers()
  },

  methods: {
    // Sets up a trigger to play videos when in frame, and stop them when out of frame
    initVideoPlayTriggers () {
      var projectItems = document.getElementsByClassName("project-video");

      projectItems.forEach(video => {
        // Declare Scene
        const scene = this.$scrollmagic.scene({
          triggerElement: video,
          duration: 250 // Approximation of video height
        }).on("enter", function () {
          // play video
          video.play();
        }).on("leave", function () {
          // stop video
          video.pause();
          video.currentTime = 0;
        })//.addIndicators() // <- Uncomment this to debug triggers

        // Add Scene to controller
        this.$scrollmagic.addScene(scene)
      });
    },

    initBackgroundChangeTriggers () {
      const divBody = document.getElementsByClassName("div-body")[0];

      const projectComponents = this.$refs.poi
      const page = this

      projectComponents.forEach(component => {
        const element = component.$el
        // Declare Scene
        const scene = this.$scrollmagic.scene({
          triggerElement: element,
          duration: 250 // Approximation of element height
        }).on("enter", function () {
          page.project = component.project
          // adds back transparency to reveal code
          divBody.style.backgroundColor = 'rgba(var(--primary-rgb), 0.7)'
        }).on("leave", function () {
          // removes transparency to hide code
          divBody.style.backgroundColor = 'var(--primary)'
        })//.addIndicators() // <- Uncomment this to debug triggers

        // Add Scene to controller
        this.$scrollmagic.addScene(scene)
      });
    }
  }
}
</script>

<style>
.div-body {
  /* Adds transition to the background color */
  transition: background-color 0.5s;
}

.background {
  background-color: var(--primary);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -50;
  width: 100%;
  height: 100vh;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: var(--primary-contrast);
  letter-spacing: 1px;
  font-size: calc(2vw + 5vh + 2vmin);
}

.links {
  padding-top: 2em;
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
