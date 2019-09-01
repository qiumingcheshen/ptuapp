<template>
  <div id="edit-pos" :style="editPosStyle()">
    <div :style="canvasesStyle()">
      <!-- 固定图层 -->
      <div
        class="varcoverpic"
        v-for="(item1, index1) in varcoverpic"
        :key="index1"
        :style="fixedelementStyle(item1)"
      ></div>
      <!-- 可变图层 -->
      <div class="pics" v-for="(item2, index2) in pics" :key="index2" :style="picsStyle(item2)"></div>
      <!-- 文本图层 -->
      <div
        class="texts"
        v-for="(item3, index3) in texts"
        :key="index3"
        :style="textsStyle(item3)"
      >{{item3.text}}</div>
    </div>
  </div>
</template>

<script>
// 图片组件
const NAME = "edit-pos";
export default {
  name: NAME,

  data() {
    return {
      // 图片的 id
      id: "",
      // 海报的基础属性
      basedata: {},
      // 海报的拼图信息
      canvases: [],
      // 固定图层
      varcoverpic: [],
      // 可变图层
      pics: [],
      // 文本图层
      texts: [],
      // 设置信息

      // 固定元素信息
      fixedeleSetting: {
        fixedeleWidth: 100,
        fixedeleHeight: 100,
        fixedelebgc: "",
        fixedelebgi: ""
      },
      // 图片元素信息
      imageeleSetting: {
        imageeleWidth: 0,
        imageeleHeight: 0,
        imageeleLeft: 0,
        imageeletop: 0,
        imageeleSrc: "",
        imageeleZindex: 1
      },
      // 文字元素信息
      texteleSetting: {
        texteleContent: "",
        fontColor: "",
        fontstyle: "",
        fontweight: "",
        textLeft: 0,
        textTop: 0,
        textWidth: 0,
        textRight: 0,
        kernspacing: 0,
        lineHeight: "1.0",
        linespacing: "0px",
        opacity: 1,
        textAlign: "center",
        textdecoration: "none",
        textshadow: "",
        verticalAlign: "center",
        zIndex: 0
      }
    };
  },
  computed: {},
  methods: {
    // 发送请求得到图片的信息
    async getPosInfo() {
      this.id = this.$route.query.id;
      const { data: res } = await this.$http.post(
        `api/puzzle/data/info?token=f2f26ffd-91af-494e-987e-5c71cf418e24&uid=1&id=1909`
      );
      console.log(res);

      if (res.status !== "1") {
        return this.$message.error("获取海报失败！");
      }
      this.basedata = res.data.basedata;
      this.canvases = res.data.canvases;
      if (this.canvases) {
        this.varcoverpic = this.canvases.slice(-1)[0].varcoverpic;
        this.pics = this.canvases.slice(-1)[0].pics;
        this.texts = this.canvases.slice(-1)[0].texts;
      }

      console.log(this.canvases.slice(-1)[0].coverpic);
    },

    // 大盒子样式
    editPosStyle() {
      return {
        // width: this.basedata.w + "px",
        // height: this.basedata.h + "px",
        // transform: "scale(" + 800 / this.basedata.h + ")"
      };
    },

    // 拼图信息盒子样式
    canvasesStyle() {
      return {
        position: "relative",
        width: this.basedata.w + "px",
        height: this.basedata.h + "px",
        backgroundColor: "#" + this.basedata.bgcolor,
        backgroundImage: "url(" + this.canvases.slice(-1)[0].coverpic + ")",
        transform: "scale(" + 800 / this.basedata.h + ")",
        transformOrigin: "left top"
      };
    },

    // 固定图层样式
    fixedelementStyle(item) {
      return {
        position: "absolute",
        left: item.rect.split(",")[0] + "px",
        top: item.rect.split(",")[1] + "px",
        width: item.rect.split(",")[2] + "px",
        height: item.rect.split(",")[3] + "px",
        backgroundImage: "url(" + item.pic + ")"
      };
    },

    // 可变图层样式
    picsStyle(item) {
      if (item.rect == null) {
        var picsleft = item.point_int.split(",")[0] + "px";
        var picstop = item.point_int.split(",")[1] + "px";
        var picswidth =
          item.point_int.split(",")[4] - item.point_int.split(",")[0] + "px";
        var picsheight =
          item.point_int.split(",")[5] - item.point_int.split(",")[1] + "px";
      } else {
        var picsleft = item.rect.split(",")[0] + "px";
        var picstop = item.rect.split(",")[1] + "px";
        var picswidth = item.rect.split(",")[2] + "px";
        var picsheight = item.rect.split(",")[3] + "px";
      }
      return {
        position: "absolute",
        left: picsleft,
        top: picstop,
        width: picswidth,
        height: picsheight
      };
    },
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
        // lineHeight: item.linespace,
        lineHeight: 1,
        maxHeight: item.maxheight,
        fontSize: item.minfontsize * (800 / this.basedata.h) + "px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      };
    }
  },
  created() {
    this.getPosInfo();
  }
};
</script>

<style lang="less" scoped>
#edit-pos {
  box-sizing: content-box;
  margin: 0 auto;
  overflow: visible;
  position: relative;
  width: 450px;
  height: 800px;
}
</style>