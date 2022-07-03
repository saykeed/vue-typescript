<template>
    <div class="joblist">
        
       <transition-group name="list" tag="ul">
           <p>Ordered by - {{ currentOrder }}</p>
           <li v-for="job in sortedJobs" :key="job.id">
               <h2 class="title">{{ job.title }} <span>{{ job.location }}</span></h2>
               <h3 class="salary">{{ job.salary }}</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum, eveniet ex distinctio eaque explicabo quae voluptates repellat animi laudantium facilis doloribus. Obcaecati eaque maxime voluptatibus repellat unde, delectus deserunt?</p>
           </li>
       </transition-group>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import Job from '@/Interface/JobParameters'
import orderTerms from '@/Interface/OrderTerm'

export default defineComponent({
    name: 'jobList',
    props: {
        vacancy: {
            required: true,
            type: Array as PropType<Job[]>
        },
        currentOrder: {
            required: true,
            type: String as PropType<orderTerms>
        }
    },
    setup(props) {
        const sortedJobs = computed(() => {
            return [...props.vacancy].sort((a:Job, b:Job) => {
                return a[props.currentOrder] > b[props.currentOrder] ? 1 : -1
            })
        })
       

      return { sortedJobs }  
    }
})
</script>

<style>
    .joblist{
        text-align: left;
    }

    ul{
        width: 800px;
        margin: 0 auto;

    }
    li{
        list-style-type: none;
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.7rem;
        border-radius: 5px;
        background: white;
        text-align: left;
        margin: 10px auto;
        cursor: pointer;
    }

    li:hover{
        background: rgba(0, 0, 0, 0.050);
    }

    h2.title{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h3.salary{
        color: green;
    }
    .list-move{
        transition: all 2s ease-in-out;
    }
</style>