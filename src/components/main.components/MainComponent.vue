<template>
  <h1>
    Vue-project-layout
  </h1>
  <h2>
    User list
  </h2>
  <div class="main-container">
    <ul class="user-list">
      <li v-for="user in users" :key="user.id">
        <div class="id">
          {{ user.id }}.
        </div>
        <div>
          {{ user.username }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import {
  USERS_GET
} from "@/store/actions/user"

export default {
  name: 'MainComponent',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.$store.dispatch(USERS_GET).then((userList) => {
      this.users=userList || []
    }).catch(error => console.error(error))
  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/main/main-component.scss">
</style>

