<template>
    <div>Settings {{count}}

    <!-- <button @click="iterate">+1</button>

    <div v-if="count % 2 == 0">Четное</div>
    <div v-else>Нечетное</div>

    <div v-for="i in list" :key="i">{{i}}</div>

    -->

    {{Message}}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import users from "../store/modules/userModule";

@Component
export default class Settings extends Vue {
    async mounted (){
        await users.getResponse()
    }

    get Message (){
        return users.Message
    }

    /*

    count:number = 10

    iterate(){
        this.count += 1
    }

    list:any = [1,2,3,4,5,6,7,8,9,20]

    */

}
</script>

<style>

</style>