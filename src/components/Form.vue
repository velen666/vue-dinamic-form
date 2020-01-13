<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <div class="form-fields">
        <div v-for="(field, index) of fields" :key="index" class="form-group">
          <div class="condition">
            <div class="condition-count">Условие {{ index + 1 }}</div>
            <b-form-select
              @change="selectCondition($event, index)"
              v-model="field.title"
              class="col-md-8 condition-select"
            >
              <template v-slot:first>
                <option :value="null" disabled>Выберите условие</option>
              </template>
              <option
                v-for="(condition, index) of conditions"
                :key="index"
                :value="condition.title"
              >
                {{ condition.title }}
              </option>
            </b-form-select>
          </div>

          <div class="form-group__body">
            <div v-if="field.title === 'Возраст респондента'" class="body">
              <div
                :field="field"
                v-for="(item, index) of field.body"
                :key="index"
                class="input-range"
              >
                <div class="input-range__title">Диапозон {{ index + 1 }}</div>
                <div class="input-range__range">
                  <div class="input-range__range-text">от</div>
                    <ValidationProvider rules="required|integer">
                      <div slot-scope="{ errors }">
                        <b-form-input
                          @change="addStartValue(index, item.start)"
                          class="input-range__range-start input-small"
                          :value="item.start"
                        >
                          {{ item.start }}
                        </b-form-input>
                        <p>{{ errors[0] }}</p>
                      </div>
                    </ValidationProvider>
                </div>
                <div class="input-range__range">
                  <div class="input-range__range-text">до</div>
                    <ValidationProvider rules="required|integer">
                      <div slot-scope="{ errors }">
                        <b-form-input
                          @change="addEndValue(index, item.end)"
                          class="input-range__range-end input-small"
                          :value="item.end"
                        >
                        </b-form-input>
                        <p>{{ errors[0] }}</p>
                      </div>
                    </ValidationProvider>
                </div>
              </div>

              <div class="control-button-group">
                <button
                  @click.prevent="addInputRange(index)"
                  type="button"
                  class="btn inline outline-success block"
                >
                  Добавить диапозон
                </button>

                <button
                  @click.prevent="deleteField(index)"
                  type="button"
                  class="btn inline outline-danger block"
                >
                  Удалить условие
                </button>
              </div>
            </div>

            <div
              v-else-if="field.title === 'Тип карты лояльности'"
              class="body card-type-body"
            >
              <b-form-select
                @change="selectCardType($event, index)"
                v-for="(item, index) of field.body"
                :key="index"
                v-model="field.body[index].cardType"
                class="col-md-5 card-type-select"
              >
                <template v-slot:first>
                  <option :value="null" disabled>Выберите тип карты</option>
                </template>
                <option
                  v-for="(item, index) of cardType"
                  :key="index"
                  :value="item.type"
                >
                  {{ item.type }}
                </option>
              </b-form-select>

              <div class="control-button-group">
                <button
                  @click.prevent="addCardTypeSelect(index)"
                  type="button"
                  class="btn inline outline-success block"
                >
                  Добавить тип
                </button>

                <button
                  @click.prevent="deleteField(index)"
                  type="button"
                  class="btn inline outline-danger block"
                >
                  Удалить условие
                </button>
              </div>
            </div>

            <div
              v-else-if="field.title === 'Статус карты лояльности'"
              class="body card-status-body"
            >
              <b-form-select
                @change="selectCardLoyalty($event, index)"
                v-for="(item, index) of field.body"
                :key="index"
                v-model="field.body[index].loyalityType"
                class="col-md-5 card-type-select"
              >
                <template v-slot:first>
                  <option :value="null" disabled>Выберите статус карты</option>
                </template>
                <option
                  v-for="(item, index) of cardStatus"
                  :key="index"
                  :value="item.type"
                >
                  {{ item.type }}
                </option>
              </b-form-select>

              <div class="control-button-group">
                <button
                  @click.prevent="addCardLoyaltySelect(index)"
                  type="button"
                  class="btn inline outline-success block"
                >
                  Добавить статус
                </button>

                <button
                  @click.prevent="deleteField(index)"
                  type="button"
                  class="btn inline outline-danger block"
                >
                  Удалить условие
                </button>
              </div>
            </div>

            <div v-else-if="field.title === 'Статус пользователя'" class="body">
              Какие то данные =)
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <button
          @click.prevent="addField"
          type="button"
          class="btn inline outline-primary custom-btn"
        >
          Добавить условие
        </button>
      </div>

      <hr />

      <div class="form-group">
        <button type="submit" class="btn btn-primary">
          Отправить форму
        </button>
        <button @click="reset()" type="button" class="btn btn-primary">
          Отменить
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import axios from "axios";

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      errors: [],
      fields: [],
      submited: false,
      colors: {
        aqua: "#7FDBFF",
        orange: "#FF851B",
        blue: "#0074D9",
        navy: "#001f3f",
        teal: "#39CCCC",
        green: "#2ECC40"
      },
      conditions: [
        {
          title: "Возраст респондента",
          selected: false
        },
        {
          title: "Тип карты лояльности",
          selected: false
        },
        {
          title: "Статус карты лояльности",
          selected: false
        },
        {
          title: "Статус пользователя",
          selected: false
        }
      ],
      cardType: [
        {
          id: 1,
          type: "Gold"
        },
        {
          id: 2,
          type: "Platinum"
        },
        {
          id: 3,
          type: "Black"
        }
      ],
      cardStatus: [
        {
          id: 1,
          type: "Активна"
        },
        {
          id: 2,
          type: "Неактивна"
        }
      ],
      userStatus: [
        {
          id: 1,
          type: "Активен"
        },
        {
          id: 2,
          type: "Неактивен"
        }
      ]
    };
  },
  methods: {
    addField() {
      this.fields.push({
        id: this.fields.length + 1,
        title: null,
        body: []
      });
    },
    deleteField(id) {
      this.fields.splice(id, 1);
    },
    selectCondition(event, index) {
      this.fields[index].title = event.target.value;
    },
    addInputRange(id) {
      this.fields[id].body.push({
        count: this.fields[id].body.length + 1,
        start: null,
        end: null
      });
    },
    addStartValue(id, index, start) {
      this.fields[id].body[index].start = start;
    },
    addEndValue(id, index, end) {
      this.fields[id].body[index].end = end;
    },
    selectCardType(id, event, index) {
      this.fields[id].body[index].cardType = event.target.value;
    },
    addCardTypeSelect(index) {
      this.fields[index].body.push({
        cardType: ""
      });
    },
    addCardLoyaltySelect(index) {
      this.fields[index].body.push({
        loyalityType: ""
      });
    },
    selectCardLoyaltySelect(id, event, index) {
      this.fields[id].body[index].loyalityType = event.target.value;
    },
    checkForm(e) {
      this.errors = [];
      if (!this.name) this.errors.push("Name required.");
      if (!this.age) this.errors.push("Age required.");
      e.preventDefault();
    },
    onSubmit() {
      axios({
        method: "post",
        url: "http://localhost:8000/createCondition",
        data: {
          fields: this.fields // передача обьекта полей формы
        }
      });
    }
  }
};
</script>

<style lang="scss">
.condition {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}

.condition-count {
  margin-right: 60px;
}

.input-range {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-range__title {
  margin-right: 50px;
}

.input-range__range {
  display: flex;
  justify-content: center;
  margin-right: 15px;
}

.input-range__range-text {
  align-self: center;
  margin-right: 10px;
}

.input-small.form-control {
  width: 50px;
  height: 40px;
}

.outline-success {
  background: #d8d8d8;
  border-color: rgba(90, 224, 119, 0.5);
}

.outline-danger {
  background: #d8d8d8;
  border-color: rgba(245, 91, 80, 0.5);
}

.card-type-select {
  max-width: 600px;
  margin: 10px;
}

.card-type-body,
.card-status-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-primary {
  margin-left: 20px;
  margin-right: 20px;
}

.custom-btn,
.block {
  border: 2px solid #0074a1 !important;
  border-radius: 8px;
  margin: 20px 15px 0;
}

.custom-btn {
  margin-bottom: 30px;
}
</style>
