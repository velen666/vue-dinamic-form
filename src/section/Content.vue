<template>
  <div class="content-container">
    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('params')"
          :class="{ active: isActive('params') }"
          href="#params"
        >
          Параметры
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('questions')"
          :class="{ active: isActive('questions') }"
          href="#questions"
        >
          Вопросы
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('logic')"
          :class="{ active: isActive('logic') }"
          href="#logic"
        >
          Логика
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('conditions')"
          :class="{ active: isActive('conditions') }"
          href="#conditions"
        >
          Условия
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('responders')"
          :class="{ active: isActive('responders') }"
          href="#responders"
        >
          Респонденты
        </a>
      </li>
    </ul>
    <div class="tab-content card cards">
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('params') }"
        id="params"
      >
        Параметры
      </div>
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('questions') }"
        id="questions"
      >
        Вопросы
      </div>
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('logic') }"
        id="logic"
      >
        Логика
      </div>
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('conditions') }"
        id="conditions"
      >
        Условия
      </div>
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('responders') }"
        id="responders"
      >
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  components: {
    Form
  },
  data() {
    return {
      activeItem: "responders"
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  }
};
</script>

<style lang="scss">
.content-container {
  margin: 40px 50px;
}
.cards {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.nav-tabs .nav-item {
  background-color: none;
  border: none;
}

.nav-tabs .nav-ite:hover {
  background-color: none;
  border-bottom: 2px solid #19ca01;
}

.tab-content > .active {
  display: block;
}

.tab-content {
  height: 100%;
  max-height: 950px;
}

.fade:not(.show) {
  opacity: 0;
}

.fade {
  transition: opacity 0.15s linear;
}

.polls-field > div {
  margin: 20px 0;
  padding-bottom: 10px;
}
.polls-field > div:not(:last-child) {
  border-bottom: 1px solid rgb(206, 212, 218);
}
</style>
