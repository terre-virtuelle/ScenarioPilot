<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import ApiHelper from "src/ApiHelper";

export default defineComponent({
  name: "App",
  setup(){
    ApiHelper.setHeader();
  }
});
</script>
