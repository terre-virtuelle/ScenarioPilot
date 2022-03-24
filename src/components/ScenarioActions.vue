<template>
  <div v-if="Object.keys(localScenario).length > 0" >
    <div v-for="(question,idx) in localScenario.questions" :key="idx" >
      <QuestionRow :questionIdx="idx" :question="question"  @activeQuestion="activeQuestion" @start="start" @stop="stop"
                    @setTrue="setTrue" @setFalse="setFalse" @activeReponse="activeReponse"
      />
    </div>
    <div class="row  justify-end">
      <q-btn color="white" text-color="black" label="Reset" @click="resetScenario"/>
    </div>
  </div>
</template>

<script>
import ApiHelper from "src/ApiHelper";
import QuestionRow from "components/QuestionRow";
import {ref,watch} from "vue";
export default {
  name: "ScenarioActions",
  components:{
    QuestionRow
  },
  props:{
    scenarioSelected:{
      required:true,
      type:Object
    }
  },
  setup(props){
    const localScenario = ref({...props.scenarioSelected})
   const watchScenario = watch(() => props.scenarioSelected, (nVal) => {
      console.log('props.isOpen  ',props.scenarioSelected)
      localScenario.value = nVal
    });
    const activeQuestion = async (questionIdx) => {
      await ApiHelper.activeQuestion('q'+questionIdx)
    }
    const start = async (questionIdx) => {
      await ApiHelper.startPilotScenario('start'+questionIdx)
    }
    const stop = async (questionIdx) => {
      await ApiHelper.startPilotScenario('stop'+questionIdx)
    }
    const setTrue = async (questionIdx) => {
      await ApiHelper.setQuestionTrue('true'+questionIdx)
    }
    const setFalse = async (questionIdx) => {
      await ApiHelper.setQuestionfalse('false'+questionIdx)
    }
    const activeReponse = async (questionIdx) => {
      localScenario.value.questions[questionIdx-1].isDisabled = true
      await ApiHelper.activeReponse('r'+questionIdx)
    }
    const resetScenario = async () => {
      localScenario.value.questions = localScenario.value.questions.map((question) => {
        question.isDisabled = false;
        return question;
      })
    }
    return {
      localScenario,activeQuestion,start,stop,setTrue,setFalse,activeReponse,resetScenario,watchScenario
    }
  }

}
</script>

<style scoped>

</style>
