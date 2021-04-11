---
title: FireEmblemJdrHelper
technos: Quasar, VueJS, Firebase
description: This project focused on facilitating the tedious aspect of a tabletop role playing game based on the Fire Emblem series. With the help of a mobile app, players could edit their character sheets, get new equipment and skills, and simulate battles.
icon: quasar-logo-big.png
alt: FireEmblemJdrHelper
date: 2020
---

```html
<q-tab-panel
    name="units"
    class="q-px-none"
>
    <q-list bordered>
    <q-item-label header>Vos personnages</q-item-label>

    <q-item
        v-for="(unit, key) in pcs"
        :key="unit.id"
        class="q-my-sm"
        clickable
        :to="'/unit/' + key"
        v-ripple
    >
        <q-menu
        touch-position
        context-menu
        >
        <q-list
            dense
            style="min-width: 100px"
        >
            <q-item
            clickable
            :to="'/unit/' + key + '/edit'"
            >
            <q-item-section>Modifier...</q-item-section>
            </q-item>
        </q-list>
        </q-menu>
        <unit-card
        :unit="unit"
        class="full-width"
        />
    </q-item>

    <q-separator />
    <q-item-label header>Autres personnages</q-item-label>

    <q-item
        v-for="(unit, key) in npcs"
        :key="unit.id"
        class="q-my-sm"
        clickable
        :to="'/unit/' + key"
        v-ripple
    >
        <unit-card
        :unit="unit"
        class="full-width"
        />
    </q-item>

    </q-list>
</q-tab-panel>
```