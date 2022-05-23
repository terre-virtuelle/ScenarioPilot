<template>
  <div class="row justify-around">
    <div class="col-2">
      <q-btn color="white" text-color="black" class="question-btn" :disable="question.isDisabled"
             :label="'Question ' + (questionIdx + 1)"
             @click="activeQuestion((idx + 1))"/>
    </div>
    <div class="col-2">
      <q-btn color="green" :label="'Start ' + (questionIdx + 1)" class="question-btn" @click="start()"/>
    </div>
    <div class="col-2">
      <q-btn color="red" label="Stop" class="question-btn" @click="stop()"/>
    </div>
    <div class="col-2">
      <q-btn color="green" label="True" class="question-btn" @click="setTrue()"/>
    </div>
    <div class="col-2">
      <q-btn color="red" label="False" class="question-btn" strech @click="setFalse()"/>
    </div>
    <div class="col-2">
      <q-btn color="white" text-color="black" :label="'Réponse '+(questionIdx + 1)" class="question-btn"
             @click="activeReponse()"/>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "QuestionRow",
  props: {
    questionIdx: {
      required: true,
      type: Number
    },
    question: {
      required: true,
      type: Object
    }
  },
  setup(props, {emit}) {
    const isDisabled = ref(false);

    const activeQuestion = async () => {
      emit('activeQuestion', props.questionIdx + 1);
    }
    const start = async () => {
      emit('start', props.questionIdx + 1);
    }
    const stop = async () => {
      emit('stop', props.questionIdx + 1);
    }
    const setTrue = async () => {
      emit('setTrue', props.questionIdx + 1);
    }
    const setFalse = async () => {
      emit('setFalse', props.questionIdx + 1);
    }
    const activeReponse = async () => {
      emit('activeReponse', props.questionIdx + 1);
    }
    return {
      isDisabled, activeQuestion, start, stop, setTrue, setFalse, activeReponse
    }
  }
}
</script>

<style scoped>
.question-btn {
  margin-bottom: 1vh;
  margin-top: 1vh;
  width: 90%;
}
</style>
