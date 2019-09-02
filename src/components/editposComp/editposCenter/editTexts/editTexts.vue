<template>
  <div id="edit-texts">
    <div class="texts" v-for="(item3, index3) in texts" :key="index3" :style="textsStyle(item3)">
      <span style="display: table-cell;vertical-align: middle;">{{item3.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 文本图层
      texts: []
    };
  },
  methods: {
    // 文本样式
    textsStyle(item) {
      if (item.rect == null) {
        var textsleft = item.point_int.split(",")[0] + "px";
        var textstop = item.point_int.split(",")[1] + "px";
        var textswidth =
          item.point_int.split(",")[4] - item.point_int.split(",")[0] + "px";
        var textsheight =
          item.point_int.split(",")[5] - item.point_int.split(",")[1] + "px";
      } else {
        var textsleft = item.rect.split(",")[0] + "px";
        var textstop = item.rect.split(",")[1] + "px";
        var textswidth = item.rect.split(",")[2] + "px";
        var textsheight = item.rect.split(",")[3] + "px";
      }
      return {
        position: "absolute",
        display: "table",
        left: textsleft,
        top: textstop,
        width: textswidth,
        height: textsheight,
        textAlign: item.align,
        rotateZ: item.angle + "deg",
        fontFamily: item.font,
        color: "#" + item.fontcolor,
        letterSpacing: item.kernspacing,
        // 行高
        lineHeight: item.linespace,
        maxHeight: item.maxheight,
        fontSize: item.minfontsize * (800 / this.basedata.h) + "px",
        whiteSpace: "pre-wrap"
      };
    }
  }
};
</script>

<style lang="less" scoped>
</style>