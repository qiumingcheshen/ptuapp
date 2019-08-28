<template>
  <div id="edit-image" :style="'min-width : 800' + 'px'">
    <div class="varcover" :style="{width: this.iWidth + 'px',height: this.iHeight + 'px'}">
      <img
        :src="iSrc"
        :style="{
      position: 'absolute',
      left: this.iLeft + 'px',
      top: this.iRight + 'px',
      width: this.iWidth + 'px',
      height: this.iHeight + 'px',
      }"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
// 图片组件
const NAME = "edit-image";
export default {
  name: NAME,

  data() {
    return {
      setting: {
        indexno: 1,
        thumbs: "",
        coverpic: "",
        maskpic: "",
        sizeratio: 0.85333,
        signature: "",
        qrcodes: "",
        pics: [],
        logo: {},
        watermark: {},
        contactcards: {},
        varcoverpic: [
          {
            pic:
              "http://ptres.huirw.com/puzzle/element/14/zip/unzip/PhotoSplice24807/PhotoSplice24807VariableFg1_1.png",
            rect: "0,0,720,349"
          }
        ]
      },
      // 大图左定位
      iLeft: 0,
      // 大图右定位
      iRight: 0,
      // 大图宽
      iWidth: 0,
      // 大图高
      iHeight: 0,
      // 大图路径
      iSrc: ""
    };
  },
  methods: {
    computeImg() {
      let rectpos = this.setting.varcoverpic[0].rect.split(",");
      this.iSrc = this.setting.varcoverpic[0].pic;
      this.iLeft = parseInt(rectpos[0]);
      this.iRight = parseInt(rectpos[1]);
      this.iWidth = parseInt(rectpos[2]);
      this.iHeight = parseInt(rectpos[3]);
      console.log(this.iSrc);
    }
  },
  created() {
    this.computeImg();
  }
};
</script>

<style lang="less" scoped>
#edit-image {
  position: relative;
}
.varcover {
  position: relative;
  margin: 0 auto;
}
</style>