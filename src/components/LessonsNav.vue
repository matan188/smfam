<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-group>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Introduction</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>adjust</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>sub title</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      <v-list-group>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Week 1</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>adjust</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>sub title</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
