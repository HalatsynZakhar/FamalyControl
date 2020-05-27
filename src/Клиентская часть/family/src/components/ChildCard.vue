<template>
  <div class="lot-card">
   <img src="../../src/assets/logo-with-text.png">
    <div class="lot-card-body">
        <h4 class="lot-card-name">{{childCard.UserName}}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import {Component,Prop,Vue} from 'vue-property-decorator'
import { Child } from '../store/models/Child';


@Component({
    components:{
    },
})
export default class ChildCard extends Vue {

  @Prop({default:"CardProperty"})
  childCard!: Child;
}

</script>