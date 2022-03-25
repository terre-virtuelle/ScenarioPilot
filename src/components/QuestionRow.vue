<template>
    <div class="row justify-evenly" >
      <q-btn color="white" text-color="black" :disable="question.isDisabled" :label="'Question ' + (questionIdx + 1)" @click="activeQuestion((idx + 1))"/>
      <q-btn color="green"  :label="'Start ' + (questionIdx + 1)" @click="start()"/>
      <q-btn color="red"  label="Stop" @click="stop()"/>
      <q-btn color="green"  label="True" @click="setTrue()"/>
      <q-btn color="red"  label="False" @click="setFalse()"/>
      <q-btn color="white" text-color="black" :label="'Réponse '+(questionIdx + 1)" @click="activeReponse()"/>
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
    console.log('props.questionIdx',props.questionIdx +1)

    const activeQuestion = async () => {
      emit('activeQuestion',props.questionIdx +1)
    }
    const start = async () => {
      emit('start',props.questionIdx +1)
    }
    const stop = async () => {
      emit('stop',props.questionIdx +1)
    }
    const setTrue = async () => {
      emit('setTrue',props.questionIdx +1)
    }
    const setFalse = async () => {
      emit('setFalse',props.questionIdx +1)
    }
    const activeReponse = async () => {
      emit('activeReponse',props.questionIdx +1)
    }
    return {
      isDisabled, activeQuestion,start,stop,setTrue,setFalse,activeReponse
    }
  }
}
</script>

<style scoped>

</style>
