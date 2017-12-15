<template>
  <div class="hello">
    <div id="particles"></div>
    <ul class="header">
      <li class="header-side">
        <div class="photo"></div>
        <div class="name">YOUNG Cici</div>
        <div class="detail">WEB DESIGNER</div>
      </li>
      <li class="header-main">
        <div class="text-icon">A</div>
        <div class="text-word">ABOUT ME</div>
        <div class="text-icon">R</div>
        <div class="text-word">RESUME</div>
        <div class="text-icon">P</div>
        <div class="text-word">PORTFOLIO</div>
        <div class="text-icon">H</div>
        <div class="text-word">HIRE ME</div>
      </li>
      <li class="header-side">
        <div class="photo"></div>
        <div class="name">EXPERIENCE OF</div>
        <div class="detail">1+YEARS</div>
      </li>
    </ul>
    <div class="content-list">
      <ul class="list-ul">
        <li>
          <div class="list-photo"></div>
          <div class="list-word"></div>
        </li>
        <li>
          <div class="list-photo"></div>
          <div class="list-word"></div>
        </li>
        <li>
          <div class="list-photo"></div>
          <div class="list-word"></div>
        </li>
        <li>
          <div class="list-photo"></div>
          <div class="list-word"></div>
        </li>
      </ul>
      <ul class="timer-ul">
        <li>
          <div class="timer-time">
            <div>12 14</div>
            <div>2017</div>
          </div>
          <div class="timer-line"></div>
          <div class="timer-circle"></div>
          <div class="timer-content">
            <div class="triangle"></div>
            <div class="article">test1test1test1test1test1</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    mounted(){
      particlesJS.load('particles','static/particles.data');
    }
  }
</script>

<style lang="scss">
  $mainColor: rgb(0,173,173);
  $bgColor: rgb(0,43,90);
  .hello{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    #particles{
      position: relative;
      width: 100%;
      height: 444px;
      background-color: $bgColor;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
    }
    .header{
      position: relative;
      z-index:111;
      width:100%;
      height: 444px;
      background:rgba(0,0,0,.25);
      padding-bottom: 20px;
      top:-444px;
      li{
        display: inline-block;
        height:100%;
        text-align: center;
        vertical-align: middle;
        &:first-child{
          margin-left:calc((100% - 1100px) / 2);
          .photo{
            margin-left: 150px;
            background: url("../assets/img/sad.jpg") no-repeat center;
            background-size: contain;
            &:hover{
              background: url("../assets/img/smile.jpg") no-repeat center;
              background-size: contain;
              cursor: pointer;
            }
          }
        }
        &:last-child{
          .photo{
            margin-left: 150px;
            background: url("../assets/img/smile.jpg") no-repeat center;
            background-size: contain;
            &:hover{
              background: url("../assets/img/sad.jpg") no-repeat center;
              background-size: contain;
              cursor: pointer;
            }
          }
        }
        div{
          text-align: center;
        }
      }
      .header-side{
        width: 500px;
        .photo{
          width: 200px;
          height:200px;
          border:5px solid $mainColor;
          border-radius: 50%;
        }
        .name{
          font-size:2.8rem;
          font-weight:900;
          color: $mainColor;
        }
        .detail{
          font-size:2.6rem;
          font-weight: 400;
          color: #fff;
        }
      }
      .header-main{
        width: 100px;
        margin-top:20px;
        .text-icon{
          width: 60px;
          height: 60px;
          line-height: 60px;
          border: 2px solid #fff;
          border-radius: 50%;
          background-color: $bgColor;
          color: #fff;
          text-align: center;
          font-size: 1.4rem;
          margin:0 auto;
          &:hover{
            background-color: $mainColor;
            cursor: pointer;
          }
        }
        .text-word{
          color: #fff;
          font-weight: 800;
          padding: 10px 0;
        }
      }
    }
    .content-list{
      width: 90%;
      height:100%;
      padding: 30px 0;
      margin-left: 5%;
      margin-top: -444px;
      background: rgba(180,180,180,.25);
      overflow-y: hidden;
      ul.list-ul{
        width: 100%;
        height:auto;
        padding-left:calc((100% - 1080px) / 2);
        padding-top: 30px;
        padding-bottom: 30px;
        li{
          width: 270px;
          height: 430px;
          display: inline-block;
          border:2px solid #fff;
          &:nth-child(odd){
            -webkit-transform: perspective(1200px) rotateY(10deg);
            -moz-transform: perspective(1200px) rotateY(10deg);
            -ms-transform: perspective(1200px) rotateY(10deg);
            -o-transform: perspective(1200px) rotateY(10deg);
            transform: perspective(1200px) rotateY(10deg);
          }
          &:nth-child(even){
            -webkit-transform: perspective(1200px) rotateY(-10deg);
            -moz-transform: perspective(1200px) rotateY(-10deg);
            -ms-transform: perspective(1200px) rotateY(-10deg);
            -o-transform: perspective(1200px) rotateY(-10deg);
            transform: perspective(1200px) rotateY(-10deg);
          }
          .list-photo{
            width: 90%;
            margin:10px 4%;
            height: 250px;
            border:1px solid #eee;
          }
          .list-word{
            color: #fff;
            margin:0 4% 10px;
          }
        }
      }
      ul.timer-ul{
        width: 70%;
        margin-left: 15%;
        height: auto;
        padding-top: 30px;
        li{
            &>div{
              float: left;
            }
          .timer-time{
            div:first-child{
              color: $bgColor;
              font-size: 2rem;
            }
            div:last-child{
              color: #fff;
              font-size: 2.8rem;
            }
          }
          .timer-line{
            width:1px;
            height: 200px;
            border:1px solid #fff;
            margin-right: 60px;
            margin-left: 30px;
          }
          .timer-circle{
            width: 25px;
            height: 25px;
            background:$bgColor;
            border:2px solid #fff;
            border-radius: 50%;
            margin-left: -75px;
            &:hover{
              cursor: pointer;
              background-color: $mainColor;
            }
          }
          .timer-content{
            width: 85%;
            height: 200px;
            border:1px solid $bgColor;
            background: $bgColor;
            color: #fff;
            padding: 5px 10px;
            font-size: 1.4rem;
            border-radius: 5px;
            .triangle{
              display: inline-block;
              width: 0;
              height: 0;
              border-top: 20px solid transparent;
              border-right: 30px solid $bgColor;
              border-bottom: 10px solid transparent;
              margin-left:-39px;
              margin-top: -5px;
            }
            .article{
              display: inline-block;
              padding-left:10px;
            }
          }
        }
      }
    }
  }
</style>
