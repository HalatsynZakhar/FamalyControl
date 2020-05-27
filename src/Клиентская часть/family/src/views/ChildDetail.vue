<template>
  <div>
    <a class="back-link" href="/buy">←Back to all lots</a>
    <div class="lot">
      <div v-if="child == null" class="flex=center">
        <h2>Child Not Found</h2>
      </div>
      <div v-else>
        <div class="flex-center">
          <h2>{{child.name}}</h2>
        </div>
        <img class="lot-banner" src="../assets/logo-with-text.png" />
        <div class="lot-details">
            {{child.isActive}}
        </div>
      </div>
   </div>
  </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import { Child } from '../store/models/Child';

@Component({
  components:{

  },
})
export default class ChildDetail extends Vue {
child : Child = {
    id: 1,
    LastName: "Петров",
    name: "Петро",
    isActive: true,
    parentId: 1
    }
}

</script>