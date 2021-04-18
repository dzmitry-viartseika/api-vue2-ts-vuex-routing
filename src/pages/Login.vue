<template>
  <div class="app-login">
    <div class="app-login__container">
      <div class="app-login-modal">
        <div class="form-group">
          <InputTemplate
            :labelText="'Email'"
            :placeholder="'Enter your email'"
            :type="'email'"
            :value.sync="email"
          />
        </div>
        <div class="form-group">
          <InputTemplate
            :labelText="'Password'"
            :placeholder="'Enter your password'"
            :type="'password'"
            :value.sync="password"
          />
        </div>
        <div class="form-group">
          <ButtonTemplate
            :buttonText="'wertey'"
            :btnClass="'warning'"
            :disabled="isDisable"
            @clickHandler="clickHandler"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ButtonTemplate from '@/components/Elements/ButtonTemplate.vue';
import InputTemplate from '@/components/Elements/InputTemplate.vue';

interface User {
  email: string;
  password: string;
}

@Component({
  components: {
    ButtonTemplate,
    InputTemplate,
  },
})

export default class Login extends Vue {
  public email = '';

  public password = '';

  get isDisable(): boolean {
    return this.email === '' || this.password === '';
  }

  clickHandler(): void {
    const user: User = {
      email: this.email,
      password: this.password,
    };
    console.log('user', user);
    localStorage.setItem('token', true);
    this.$router.push('/posts');
  }
}

</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .app-login {

    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      background-color: $color-bg;
    }

    &-modal {
      width: 400px;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      flex-direction: column;
      background: $color-white;
    }
  }
</style>
