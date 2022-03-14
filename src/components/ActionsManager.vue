<template>
  <div>
    <div class="row">
      <div v-if="Object.keys(scenarioSelected).length >= 1">
        <p>Scenario titre : {{ scenarioSelected.title }} </p>
        <p>Scenario nom de fichier : {{ scenarioSelected.fileName }} </p>
      </div>
      <div>
        <q-btn v-if="Object.keys(scenarioSelected).length > 0" color="white" text-color="black" label="Changer de scenario" @click="openSelectScDialog"/>
        <q-btn v-else color="white" text-color="black" label="Selectionner un scenario" @click="openSelectScDialog"/>
        <SelectScenarioDialog v-if="selectScDialogIsOpen" :isOpen="selectScDialogIsOpen" :scenarios="scenarios"
                              @closeSelectScenarioDialog="closeSelectScDialog" @selectScenario="selectScenario"/>
      </div>
    </div>
    <div>
      <q-space/>
      <ScenarioActions :scenarioSelected="scenarioSelected" />
    </div>
    <q-space/>

  </div>
</template>

<script>
import SelectScenarioDialog from "components/SelectScenarioDialog";
import {ref , defineComponent} from "vue";
import ApiHelper from "src/ApiHelper";
import ScenarioActions from "components/ScenarioActions";

export default defineComponent ( {
  name: "ActionsManager",
  components: {
    ScenarioActions, SelectScenarioDialog
  },
  setup() {
    let selectScDialogIsOpen = ref(false);
    const scenarios = ref([]);
    const scenarioSelected = ref({})

    const openSelectScDialog = async () => {
      const res = await ApiHelper.getScenarios();
      scenarios.value = res.data;
      selectScDialogIsOpen.value = true;
    }
    const closeSelectScDialog = () => {
      selectScDialogIsOpen.value = false;
    }

    const selectScenario = async (scenario) => {
      scenarioSelected.value = scenario;
      closeSelectScDialog();
      await ApiHelper.selectPilotScenario(scenario.fileName)
    }
    return {selectScDialogIsOpen, scenarios, scenarioSelected, openSelectScDialog, closeSelectScDialog,selectScenario}
  }
})
</script>

<style scoped>

</style>
