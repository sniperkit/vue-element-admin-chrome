<template>
  <div id = 'demo'>
    <balloon-set
      position = 'bottom-right'
      :balloons = 'balloons'
    >
      <template scope = 'balloon'>
        <!--
          The multi balloon content goes here, scoped by the 'balloon' variable.
          In this example we will extract the videoId attribute from each
          balloon object to use in the video props
        -->
        <youtube :video-id = 'balloon.videoId' class = 'video'>
        </youtube>
      </template>
    </balloon-set>
  </div>
</template>

<script>
  import { BalloonSet } from 'vue-balloon'

  export default {
    components: {
      BalloonSet
    },

    data () {
      return {
        balloons: [
          // Each balloon object can contain any props used in the balloon
          // component (other than the position prop that should be set on the
          // BalloonSet component instead). Events will also be propagated to
          // the balloon component from the nested 'on' object.
          {
            key: 1,
            videoId: '0Bmhjf0rKe8',
            title: 'One Cute Cat',
            on: {
              maximize (balloonRef) { console.log('maximized', balloonRef) },
              minimize (balloonRef) { console.log('minimized', balloonRef) }
            }
          },
          { key: 2, videoId: '28xjtYY3V3Q', title: 'And Some Cute Dogs!' }
        ]
      }
    }
  }
</script>
