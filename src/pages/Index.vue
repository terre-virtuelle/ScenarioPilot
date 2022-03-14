<template>
  <q-page class="q-pa-md doc-container">
    <ActionsManager/>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ActionsManager from "components/ActionsManager";
export default defineComponent({
  name: "PageIndex",
  components:{
    ActionsManager
  }
});
</script>
