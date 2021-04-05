---
title: gprev-portfolio
description: This project started as a way to go down memory lane and review my previous personal projects. I wanted to make a simple website without the need for a database, so that it could be hosted easily.
icon: nuxt-icon.png
alt: gprev-portfolio
date: 2021
---

```html
<template>
  <div>
    <div class="container">
      <div>
        <Logo />
        <h1 class="title">GPrev's portfolio</h1>
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
```