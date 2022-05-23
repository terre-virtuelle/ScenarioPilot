<template>
  <q-dialog v-model="localIsOpen" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">Sélectionner un scénario</div>
      </q-card-section>

      <q-card-section v-if="scenarios.length > 0" class="q-pt-none">
        <q-list v-for="scenario in scenarios" :key="scenario.title" bordered separator>
          <q-item @click="selectScenario(scenario)"  clickable v-ripple>
            <q-item-section>
              <q-item-label>Titre: {{ scenario.title }}</q-item-label>
              <q-item-label caption>Nom de fichier: {{ scenario.fileName }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" @click="closeDialog"  />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import {ref,watch,defineComponent} from "vue";

export default defineComponent( {
  name: "SelectScenarioDialog",
  props:{
    isOpen :{
      required:true,
      type:Boolean
    },
    scenarios:{
      required: true,
      type:Array
    }
  },
  setup(props, { emit }){
    let localIsOpen = ref(props.isOpen)
    watch(() => props.isOpen, (nVal) => {
      localIsOpen = nVal;
    });
    const closeDialog = () => {
      emit('closeSelectScenarioDialog');
    }
    const selectScenario = (scenario) => {
      emit('selectScenario',scenario);
    }

    return {localIsOpen,selectScenario,closeDialog}
  },
})
</script>

<style scoped>

</style>
