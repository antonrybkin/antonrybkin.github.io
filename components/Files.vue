<template>
  <div
    class="drop">
    <drop
      @drop="handleDrop">drag and drop</drop>
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
</style>
