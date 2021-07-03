<template>
  <form @submit.prevent="register" class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          v-model.trim="$v.email.$model"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
          id="email"
          type="text"
        />
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && !$v.email.required"
          class="helper-text invalid"
          >Поле email не должно быть пустым</small
        >
        <small
          v-else-if="$v.email.$dirty && !$v.email.email"
          class="helper-text invalid"
          >Введите корректный email</small
        >
      </div>
      <div class="input-field">
        <input
          v-model.trim="$v.password.$model"
          id="password"
          type="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">Пароль</label>
        <small
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid"
          >Введите пароль
        </small>
        <small
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid"
          >Пароль не может быть меньше
          {{ $v.password.$params.minLength.min }} символов, сейчас
          {{ password.length }}
        </small>
      </div>
      <div class="input-field">
        <input
          v-model.trim="$v.username.$model"
          id="name"
          type="text"
          :class="{
            invalid:
              ($v.username.$dirty && !$v.username.required) ||
              ($v.username.$dirty && !$v.username.minLength),
          }"
        />
        <label for="name">Имя</label>
        <small
          v-if="$v.username.$dirty && !$v.username.required"
          class="helper-text invalid"
          >Введите имя пользователя
        </small>
        <small v-else-if="!$v.username.minLength" class="helper-text invalid"
          >Имя не может быть меньше
          {{ $v.username.$params.minLength.min }} символов, сейчас
          {{ username.length }}
        </small>
      </div>
      <p>
        <label>
          <input @click="agree = !agree" type="checkbox" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          :disabled="!agree"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, minLength, required } from "vuelidate/lib/validators";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      agree: false,
    };
  },
  //Vuelidate lib
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) },
    username: { required, minLength: minLength(3) },
  },
  methods: {
    register() {
      if (!this.agree) {
        return;
      }
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        username: this.username,
      };
      this.$router.push("/");
      console.log(formData);
    },
  },
};
</script>