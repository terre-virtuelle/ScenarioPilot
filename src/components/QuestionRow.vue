<template>
    <div class="row justify-evenly" >
      <q-btn color="white" text-color="black" :disable="question.isDisabled" :label="'Question ' + (questionIdx + 1)" @click="activeQuestion((idx + 1))"/>
      <q-btn color="green"  :label="'Start ' + (questionIdx + 1)" @click="start((questionIdx + 1))"/>
      <q-btn color="red"  label="Stop" @click="stop((questionIdx + 1))"/>
      <q-btn color="green"  label="True" @click="setTrue((questionIdx + 1))"/>
      <q-btn color="red"  label="False" @click="setFalse((questionIdx + 1))"/>
      <q-btn color="white" text-color="black" :label="'Réponse '+(questionIdx + 1)" @click="activeReponse((questionIdx + 1))"/>
    </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "QuestionRow",
  props:{
    questionIdx:{
      required:true,
      type:Number
    },
    question:{
      required:true,
      type:Object
    }
  },
  setup(props,{emit}){
    const isDisabled = ref(false)
    const activeQuestion = async (questionIdx) => {
      emit('activeQuestion',questionIdx)
    }
    const start = async (questionIdx) => {
      emit('start',questionIdx)
    }
    const stop = async (questionIdx) => {
      emit('stop',questionIdx)
    }
    const setTrue = async (questionIdx) => {
      emit('setTrue',questionIdx)
    }
    const setFalse = async (questionIdx) => {
      emit('setFalse',questionIdx)
    }
    const activeReponse = async (questionIdx) => {
      emit('activeReponse',questionIdx)
    }
    return {
      isDisabled, activeQuestion,start,stop,setTrue,setFalse,activeReponse
    }
  }
}
</script>

<style scoped>

</style>
