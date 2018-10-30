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
      <v-checkbox
        :label="`I have a technical task*: ${checkbox.toString()}`"
        v-model="checkbox" />
      <files />
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
      <no-ssr>
        <transfer
          v-model="value2"
          :filter-method="filterMethod"
          :data="data2"
          filterable
          filter-placeholder="Search"/>
      </no-ssr>
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
import Files from '../components/Files.vue'
import { Transfer } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

export default {
  components: {
    Files,
    Transfer,
    lang,
    locale
  },
  data() {
    const generateData2 = _ => {
      const data = []
      const states = [
        'California',
        'Illinois',
        'Maryland',
        'Texas',
        'Florida',
        'Colorado',
        'Connecticut '
      ]
      const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
      states.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          initial: initials[index]
        })
      })
      return data
    }
    return {
      e6: 1,
      checkbox: false,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      data2: generateData2(),
      value2: [],
      filterMethod(query, item) {
        return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1
      }
    }
  }
}
</script>

<style>
.v-stepper {
  padding: 150px 60px;
}
</style>
