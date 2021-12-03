<template>
  <div class="error">
    <div class="error__body">
      <span class="title">404 Error</span>
      <span class="message">Страница не найдена</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
};
</script>

<style lang="scss" scoped>
.error {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .error__body {
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

    .title {
      color: red;
      font-size: 86px;
      font-family: "Roboto Light";
      font-weight: bold;
    }
    .message {
      color: red;
      font-size: 36px;

    }

  }
}
</style>
