<template>
  <div
    id="edit-pos"
    :style="{
    width: this.posInfos.global.width + 'px',
    height: this.posInfos.global.height + 'px',
    backgroundColor: this.posInfos.global.backgroundColor
    }"
  >
    <!-- 固定元素 -->
    <div
      class="fixedelement"
      v-for="(item1, index1) in fixedeleArr"
      :key="index1"
      :style="fixedelementStyle(item1)"
    >
      <img :src="item1.backgroundImage" alt />
    </div>
    <!-- 图片元素 -->
    <div
      class="imageelement"
      v-for="(item2, index2) in imageeleArr"
      :key="index2"
      :style="imageelementStyle(item2)"
    >
      <img :src="item2.overlapImage" alt />
    </div>
    <!-- 文字元素 -->
    <div
      class="textelement"
      v-for="(item3, index3) in texteleArr"
      :key="index3"
      :style="textelementStyle(item3)"
    >{{item3.content}}</div>
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
      // 海报的信息数组
      posInfos: [],
      // 固定元素数组
      fixedeleArr: [],
      // 图片元素数组
      imageeleArr: [],
      // 文字元素数组
      texteleArr: [],

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
        "api/puzzle/data/info?token=f2f26ffd-91af-494e-987e-5c71cf418e24&uid=1&id=2616"
      );
      // console.log(this.id);
      console.log(res);

      if (res.status !== "1") {
        return this.$message.error("获取海报失败！");
      }
      this.posInfos = res.data.canvases;
      this.fixedeleArr = res.data.canvases[0].varcoverpic;
      this.imageeleArr = res.data.canvases[0].imageelement;
      this.texteleArr = res.data.canvases[0].texts;
      // console.log(this.fixedeleArr);
      // console.log(this.imageeleArr);
    },
    // 固定元素样式
    fixedelementStyle(item) {
      return {
        position: "absolute",
        left: item.frame.split(",")[0],
        top: item.frame.split(",")[1],
        width: item.frame.split(",")[2],
        height: item.frame.split(",")[3],
        background: item.backgroundImage,
        opacity: item.opacity,
        zIndex: item.zIndex
      };
    },

    // 图片样式
    imageelementStyle(item) {
      return {
        position: "absolute",
        left: item.frame.split(",")[0],
        top: item.frame.split(",")[1],
        width: item.frame.split(",")[2],
        height: item.frame.split(",")[3],
        borderColor: item.borderColor,
        borderRadius: item.borderRadius,
        borderWidth: item.borderWidth,
        opacity: item.opacity,
        zIndex: item.zIndex
      };
    },
    // 文字样式
    textelementStyle(item) {
      return {
        position: "absolute",
        left: item.frame.split(",")[0],
        top: item.frame.split(",")[1],
        width: item.frame.split(",")[2],
        height: item.frame.split(",")[3],
        color: item.fontColor,
        fontFamily: item.fontName,
        fontSize: item.fontSize,
        fontStyle: item.fontstyle,
        fontWeight: item.fontweight,
        letterSpacing: item.kernspacing,
        // 行高
        lineHeight: item.lineHeight,
        opacity: item.opacity,
        textAlign: item.textAlign,
        textDecoration: item.textdecoration,
        textShadow: item.textshadow,
        verticalAlign: item.verticalAlign,
        zIndex: item.zIndex
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
  position: relative;
}
</style>