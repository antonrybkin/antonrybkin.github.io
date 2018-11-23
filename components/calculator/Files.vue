<template>
  <div
    class="drop">
    <drop
      v-if="$vuetify.breakpoint.smAndUp"
      @drop="handleDrop">drag and drop</drop>
    <input
      type="file"
      class="hidden-file">
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop'
export default {
  components: { Drag, Drop },
  methods: {
    handleDrop(data, event) {
      event.preventDefault()
      const files = event.dataTransfer.files
      const filenames = []
      for (let i = 0; i < files.length; i++) {
        filenames.push(files.item(i).name)
      }
      alert(`You dropped files: ${JSON.stringify(filenames)}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.drop {
  display: table;
  width: 100%;
  padding: 15px;
  position: relative;
  text-align: center;
  margin: 3px;
  background: #d8d8d8;
  border-top: 2px solid #ccc;
  border-left: 2px solid #ddd;
  color: #5a5a5a;
  font-size: 20px;
  margin-bottom: 30px;
  div {
    opacity: 0.2;
    height: 120px;
    border: 3px dashed #5a5a5a;
    vertical-align: middle;
    justify-content: center;
    display: table-cell;
    width: 100%;
  }
}
.hidden-file {
  width: 100%;
}
@media only screen and (min-width: 601px) {
  .hidden-file {
    position: fixed;
    top: -100em;
  }
}
</style>
