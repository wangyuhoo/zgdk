<template>
    <video-player class="video-player-box vjs-big-play-centered"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="false"
                  @ready="playerReadied"
                  @canplay="onPlayerCanplay"

    >
    </video-player>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  import 'video.js/dist/video-js.css'
  import {videoPlayer} from 'vue-video-player'

  const options = {
    // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
    autoplay: false, //如果true,浏览器准备好时开始回放。
    muted: false, // 默认情况下将会消除任何音频。
    loop: false, // 导致视频一结束就重新开始。
    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: 'zh-CN',
    // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
    // fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    sources: [{
      type: "",
      src: ""
    }],
    poster: "",
    width: document.documentElement.clientWidth,
    height: "230",
    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
    controlBar: {
      timeDivider: true,
      durationDisplay: true,
      remainingTimeDisplay: false,
      fullscreenToggle: true  //全屏按钮
    }
  }
  export default {
    name: 'VideoComponent',
    components: {
      videoPlayer
    },
    props: {
      options: {
        type: Object,
      }
    },
    watch: {
      options: {
        handler(val) {
          console.log('val=', val)
          this.playerOptions = Object.assign({}, options, val)
        },
      },
    },
    data() {
      return {
        // 视频播放
        playerOptions: {}
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        // player.play()
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
      onPlayerCanplay(player) {
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
    .vjs-paused .vjs-big-play-button,
    .vjs-paused.vjs-has-started .vjs-big-play-button {
        display: block;
    }
    .video-js .vjs-time-control{display:block;}
    .video-js .vjs-remaining-time{display: none;}
</style>
