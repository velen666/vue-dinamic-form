<template>
  <div class="sidebar-container">
    <div class="logo">
      <img src="./../static/circle-red.png" alt="" srcset="" />
    </div>
    <div class="sidebar-menu">
      <div class="sidebar-item" v-for="item of menu" :key="item.id">
        <font-awesome-icon
          v-if="item.id == 1"
          :icon="['far', 'file-alt']"
          size="3x"
          class="icon alt"
        />
        <font-awesome-icon
          v-else-if="item.id == 2"
          :icon="['fas', 'user-friends']"
          size="3x"
          class="icon alt"
        />
        <font-awesome-icon
          v-else-if="item.id == 3"
          :icon="['fas', 'flag']"
          size="3x"
          class="icon alt"
        />
        <font-awesome-icon
          v-else-if="item.id == 4"
          :icon="['fas', 'phone-alt']"
          size="3x"
          class="icon alt"
        />
        <div class="sidebar-item__title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          id: 1,
          title: "Опросы"
        },
        {
          id: 2,
          title: "Пользователи"
        },
        {
          id: 3,
          title: "Черные списки"
        },
        {
          id: 4,
          title: "Колл центр"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.sidebar-container {
  min-height: 100vh;
  margin: 40px 20px;
}

.logo {
  margin: 0 auto 50px;
  height: 50px;
  width: 50px;
}

.logo img {
  width: 100%;
  height: auto;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
}

.sidebar-item {
  padding: 20px 5px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(228, 228, 228, 0.4);
  }

  &:active {
    background-color: #ffffff;
    border: 2px solid #7cff7c;
    border-radius: 8px;
  }
}

.sidebar-item__title {
  color: #000000;
  font-weight: 700;
  font-size: 16px;
}
</style>
