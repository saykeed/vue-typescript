<template>
    <div class="app">
        <div class="buttons">
          <button @click="orderBy('title')">Order by title</button>
          <button @click="orderBy('salary')">Order by Salary</button>
          <button @click="orderBy('location')">Order by Location</button>
        </div>

        <Joblist 
          :vacancy="vacancy"
          :currentOrder="currentOrder"
        />
    </div>
    <vue3-alert-box/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Job from './Interface/JobParameters'
import orderTerms from './Interface/OrderTerm'
import Joblist from '@/components/Joblist.vue'
// import {useAlert } from 'vue3-use-alert'
// const useAlert = require('vue3-use-alert')

export default defineComponent({
  name: 'App',
  components: { Joblist },
  setup() {
    // variables
    const vacancy = ref<Job[]>([
      {title: 'Vue developer', location: 'London', salary: 350000, id: 34, level: 'entry'},
      {title: 'Quality Assurance', location: 'Remote', salary: 1200000, id: 22, level: 'mid'},
      {title: 'backend developer', location: 'lagos', salary: 350000, id: 45, level: 'entry'},
      {title: 'Quality Assurance', location: 'Abuja', salary: 1200000, id: 74, level: 'mid'},
      {title: 'Frontend developer', location: 'Remote', salary: 3000000, id: 267, level: 'senior'},
      {title: 'backend developer', location: 'India', salary: 350000, id: 42, level: 'entry'},
      {title: 'Backend developer', location: 'Hbrid', salary: 3000000, id: 69, level: 'senior'}
    ])

    // const {active, openAlert } =  useAlert()
    // console.log(active.value)

    const currentOrder = ref<orderTerms>('title')
    
    const orderBy = (term: orderTerms) => {
      currentOrder.value = term
    }


    return { vacancy, orderBy, currentOrder }
  }
});
</script>

<style>
  .app{
    text-align: center;
  }
  div.buttons{
    margin: 20px auto;
  }

  button{
    line-height: 30px;
    border-radius: 5px;
    margin: 0 10px;
    padding: 0 10px;
    background: #d5f0ff;
    border: 3px solid #1195c9;
    cursor: pointer;
    color: #1195c9;
  }

  button:hover{
    background: white;
  }
</style>
