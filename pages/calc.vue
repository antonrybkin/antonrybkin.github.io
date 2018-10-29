<template>
  <v-stepper
    v-model="e6"
    vertical>
    <v-stepper-step
      :complete="e6 > 1"
      step="1">
      Step 1
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-container
        fluid
        grid-list-xl>
        <v-layout
          wrap
          align-center>
          <v-flex
            xs12
            sm6
            d-flex>
            <template slot="label">
              Category
            </template>
            <v-select
              :items="items"
              label="Solo field"
              solo />
          </v-flex>
          <v-flex
            xs12
            sm6
            d-flex>
            <v-select
              :items="items"
              label="Solo field"
              solo />
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn
        color="primary"
        @click="e6 = 2">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2">Step 2</v-stepper-step>
    <v-stepper-content step="2">
      <v-card
        color="grey lighten-1"
        class="mb-5"
        height="200px" />
      <v-btn
        color="primary"
        @click="e6 = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3">Step 3</v-stepper-step>
    <v-stepper-content
      step="3">
      <v-card
        color="grey lighten-1"
        class="mb-5"
        height="200px" />
      <v-btn
        color="primary"
        @click="e6 = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">Step 4</v-stepper-step>
    <v-stepper-content step="4">
      <v-card
        color="grey lighten-1"
        class="mb-5"
        height="200px" />
      <v-btn
        color="primary"
        @click="e6 = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  }
}
</script>

<style>
.v-stepper {
  padding: 150px 60px;
}
</style>
