<template>
 <div>

     <div>
         <input v-model="child.userName">
         <input v-model="child.password">
         <input v-model="child.email">
         <button @click="sabmit">Create account</button>
     </div>

    <h4 v-if="childs == null">Loading recipes...</h4>
    <ul class="lot-list" v-if="childs != null">
        <li class="lot-list-item" v-for="child in childs" :key="child.id">
            <router-link :to="{ name: 'ChildDetail', params: { id: child.id }}">
               <ChildCard :childCard="child"></ChildCard>
            </router-link>
        </li>
    </ul>
 </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { Child } from '../store/models/Child';
import ChildCard from '../components/ChildCard.vue';
import ChildModule from '../store/modules/ChildModule';
import { Module } from 'vuex-module-decorators';


@Component({
    components: {
        ChildCard
    },
})
export default class Control extends Vue {

    text:string = "";
    child: Child = new Child();


    async sabmit () {
        await ChildModule.CreateUser(this.child)
    }

    async created (){
        await ChildModule.getResponse();
    }

    get childs(){
        return ChildModule.getChilds;
    }

}
</script>

<stylescoped>
 h4 {
    margin:20px;
 }
</style>