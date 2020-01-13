<template>
  <header>
    <div class="header-container">
      <div class="flex-row">
        <div class="search-box">
          <div class="input-group md-form form-sm form-1 pl-0">
            <input
              class="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-text1">
                <font-awesome-icon :icon="['fas', 'search']" size="1x" />
              </span>
            </div>
          </div>
        </div>
        <div class="user-box" :user="user">
          <div class="user-image">
            <img src="./../static/user.png" alt="" />
          </div>
          <div class="user-info">
            <div class="user-name">{{ user.name }}</div>
            <div class="user-status">{{ user.status }}</div>
          </div>
        </div>
      </div>
      <div class="flex-row">
        <b-breadcrumb :items="items" class="crumbs"></b-breadcrumb>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          html: '<i class="fa fa-home" aria-hidden="true"></i>',
          href: "/",
          active: false
        },
        {
          text: "Опросы",
          href: "/",
          active: false
        },
        {
          text: "Добавить опрос",
          href: "/",
          active: true
        }
      ],
      user: {
        id: 1,
        name: "Aleksander C.",
        status: "Администратор",
        userIcon: "./../static/user.png"
      }
    };
  }
};
</script>

<style lang="scss">
header {
  margin: 35px 50px;
}

.header-container {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  width: 100%;

  &:first-child {
    justify-content: space-between;
  }
}

.search-box {
  max-width: 450px;
  width: 100%;
}

.search-box input {
  max-width: 450px;
  width: 100%;
}

.user-box {
  display: flex;
  width: 250px;
}

.user-image {
  width: 60px;
  height: 60px;
}

.user-image img {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border: solid 2px silver;
  width: 100%;
  height: auto;
}

.user-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user-name {
  color: #000000;
  font-weight: bold;
  font-size: 16px;
}

.user-status {
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
  font-size: 16px;
}

.crumbs {
  background-color: none !important;
  display: flex;
  max-width: 800px;
  margin-top: 25px;
  width: 100%;
}

.breadcrumb-item {
  display: flex;
  flex: 0 1 auto;

  &:first-child:before {
    content: "\f015";
  }
}

.breadcrumb-item + .breadcrumb-item:before {
  content: ">" !important;
}

.breadcrumb-item a {
  color: #6c757d;
}

.breadcrumb-item a:hover {
  color: #d3d3d3;
}

.breadcrumb-item a.active {
  color: rgba(221, 221, 221, 0.4);
}

.breadcrumb-item--devider {
  padding: 0 10px;
}

.breadcrumb:last-child() .breadcrumb-item--devider {
  display: none;
}
</style>
