<template>
  <div class="auth">
    <div class="auth__body">
      <div class="auth__header-title">
        <span>{{ header_title}}</span>
      </div>
      <form class="auth__form">
        <div class="auth__form-login">
          <img src="../assets/icon/login.png" alt="login img">
          <input type="text" class="input__login" placeholder="Введите логин">
        </div>
        <div class="auth__form-pass">
          <img src="../assets/icon/lock.png" alt="img">
          <input type="text" class="input__pass" placeholder="Введите пароль">
        </div>
        <div class="auth__form-controls">
          <button class="logIn" @click="$router.push('/user')">Вход</button>
          <button class="cancel" @click="$router.push('/admin')">Отмена</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth",
  data () {
    return {
      header_title: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .auth__body {
    width: 400px;
    background-color: #fff;
    border-radius: 6px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 15px 4px lightgray;
    padding: 5px;

    .auth__form {
      padding: 50px 100px;
      .auth__form-login {
        display: flex;
        align-items: center;
        height: 40px;
        .input__login {
          margin-left: 6px;
          font-size: 14px;
          padding: 2px;
        }
      }
      .auth__form-pass {
        display: flex;
        align-items: center;
        height: 40px;
        .input__pass {
          margin-left: 6px;
          font-size: 14px;
          padding: 2px;
        }


      }
      .auth__form-controls {
        display: flex;
        .auth__form-controls button:first-child {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
