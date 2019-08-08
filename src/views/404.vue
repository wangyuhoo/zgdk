<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__headline">{{ message }}</div>
        <!--<div class="bullshit__info">如有异常请在公众号给我们留言!</div>-->
        <!--<a href="/" class="bullshit__return-home">返回首页</a>-->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  computed: {
    message() {
      return '网管说这个页面你不能进......'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .wscn-http404-container {
    width: 100%;
    height: auto;
  }
  img {
    height: auto;
    width: 100%;
  }
  .bullshit {
    text-align: center;
    position: relative;
    width: 100%;
    padding: 30px 0;
    overflow: hidden;
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      text-decoration: none;
      margin-left: 35%;
      display: block;
      width: 110px;
      height: 36px;
      background: #F96E8A;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>
