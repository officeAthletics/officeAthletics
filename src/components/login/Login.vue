<template>
  <div id="login">
    <div id="particles"></div>
    <div id="page">
      <ul class="sign-div">
        <li>
          <input type="text" placeholder="用户名">
        </li>
        <li>
          <input type="password" placeholder="密码">
        </li>
        <li>
          <input type="button" value="登录">
          <input type="checkbox">记住密码
          <span>用户名或密码错误!</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:'login',
    mounted(){
      particlesJS.load('particles','static/particles.data');

    },
    methods:{

    }
  }
</script>

<style lang="scss">
  $bottomColor:rgb(20,41,75);
  $bgColor: rgb(0,43,90);
  $button:rgb(0,145,255);
  #login{
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    #particles{
      margin: 0;
      padding: 0;
      position: relative;
      width: 100%;
      height:100%;
      overflow: hidden;
      background-color: $bgColor;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
    }
    #page{
      position: absolute;
      z-index: 111;
      max-width: 1000px;
      left: calc((100% - 1000px) / 2);
      top: calc((100% - 450px) / 2);
      height: 450px;
      width: 100%;
      overflow: hidden;
      border-radius: 5px;
      .sign-div{
        background:rgba(0,0,0,.25);
        width:80%;
        left: 10%;
        height: 450px;
        top: calc((100% - 450px) / 2);
        border:1px solid $bottomColor;
        border-radius: 5px;
        list-style: none;
        position: relative;
        z-index: 222;
        li{
          color: #fff;
          font-size: 1.4rem;
          width: 70%;
          height: 50px;
          margin-left: 15%;
          text-align: center;
          border-bottom:1px solid $bottomColor;
          padding: 5px;
          margin-bottom: 20px;
          &:first-child{
            margin-top: 100px;
          }
          &:not(:last-child){
            input{
              width: 100%;
              height: 100%;
              background: transparent;
              border: 0;
              outline: none;
              color: #fff;
              font-size: 1.6rem;
            }
          }
          &:last-child{
            border: 0;
            margin-top: 100px;
            text-align: left;
            font-size: 1.4rem;
            input[type='button']{
              background: $button;
              width: 100px;
              height: 50px;
              border: 0;
              border-radius: 5px;
              color: #fff;
              margin-right: 100px;
              outline: none;
              &:hover{
                cursor: pointer;
                font-size: 1.6rem;
              }
            }
            input[type='checkbox']{
              width: 20px;
              height: 20px;
              vertical-align: middle;
              margin-right: 5px;
            }
            span{
              color: rgb(211,79,67);
              font-size: 1.4rem;
              margin-left: 10px;
              display: none;
            }
          }
        }
      }
    }
  }
</style>
