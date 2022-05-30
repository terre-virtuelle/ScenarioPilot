<template>
  <div>
    <div class="row">
      <div v-if="Object.keys(scenarioSelected).length >= 1" class="col-8">
        <div class="row">
          <div class="col-6">
            <p>Scenario titre : {{ scenarioSelected.title }} </p>
            <p>Scenario nom de fichier : {{ scenarioSelected.fileName }} </p>
          </div>
          <div class="col-6">
            <q-input v-model="longitude" dense label="Longitude"/>
            <q-input v-model="lattitude" dense label="Lattitude"/>
            <q-btn color="white" text-color="black"
                   label="Envoyer les coordonnées" @click="sendCoordinates"/>
          </div>
        </div>
      </div>
      <div class="col-4">
        <q-btn v-if="Object.keys(scenarioSelected).length > 0" color="white" text-color="black"
               label="Changer de scenario" @click="openSelectScDialog"/>
        <q-btn v-else color="white" text-color="black" label="Selectionner un scenario" @click="openSelectScDialog"/>
        <SelectScenarioDialog v-if="selectScDialogIsOpen" :isOpen="selectScDialogIsOpen" :scenarios="scenarios"
                              @closeSelectScenarioDialog="closeSelectScDialog" @selectScenario="selectScenario"/>
      </div>
    </div>
    <div>
      <q-space/>
      <ScenarioActions :scenarioSelected="scenarioSelected" @resetLonLat="resetLonLat" ref="scAction"/>
    </div>
    <q-space/>

  </div>
</template>

<script>
import SelectScenarioDialog from "components/SelectScenarioDialog";
import {ref, defineComponent} from "vue";
import ApiHelper from "src/ApiHelper";
import ScenarioActions from "components/ScenarioActions";

export default defineComponent({
  name: "ActionsManager",
  components: {
    ScenarioActions, SelectScenarioDialog
  },
  setup() {
    let selectScDialogIsOpen = ref(false);
    const scenarios = ref([]);
    const scenarioSelected = ref({});
    const longitude = ref('');
    const lattitude = ref('');

    const scAction = ref(null)


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
      longitude.value = '';
      lattitude.value = '';
      closeSelectScDialog();
      await ApiHelper.selectPilotScenario(scenario.fileName);
    }
    const resetLonLat = () => {
      lattitude.value = '';
      longitude.value = '';
    }
    const sendCoordinates = async () => {
      await ApiHelper.sendCoordinates(scAction.value.activeQuestionId, lattitude, longitude);
    }
    return {
      selectScDialogIsOpen,
      scAction,
      scenarios,
      scenarioSelected,
      longitude,
      lattitude,
      openSelectScDialog,
      closeSelectScDialog,
      selectScenario,
      resetLonLat,
      sendCoordinates
    }
  }
})
</script>

<style scoped>

</style>
