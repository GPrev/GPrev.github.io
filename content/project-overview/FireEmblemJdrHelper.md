---
title: FireEmblemJdrHelper
description: This project focused on facilitating the tedious aspect of a tabletop role playing game based on the Fire Emblem series. With the help of a mobile app, players could edit their character sheets, get new equipment and skills, and simulate battles.
img: quasar-logo-big.png
alt: FireEmblemJdrHelper
date: 2020
---

```html
<q-page class="flex">

<div class="full-width">
    <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
    >
    <q-tab
        name="units"
        label="Unités"
    />
    <q-tab
        name="battle"
        label="Combat"
    />
    </q-tabs>

    <q-separator />

    <q-tab-panels
    v-model="tab"
    animated
    >

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

    <q-tab-panel name="battle">
        <battle-sim />
    </q-tab-panel>

    </q-tab-panels>
</div>

<q-page-sticky
    v-if="tab === 'units'"
    position="bottom-right"
    :offset="[18, 18]"
>
    <q-btn
    fab
    icon="add"
    color="accent"
    to="/new"
    />
</q-page-sticky>
</q-page>
```