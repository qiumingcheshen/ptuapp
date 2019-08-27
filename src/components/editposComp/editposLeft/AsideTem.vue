<template>
  <div class="asideTem">
    <div class="searchBox">
      <el-input v-model="searchInfo" type="text" placeholder="搜索模板" clearable></el-input>
      <i class="el-icon-search"></i>
    </div>
    <div class="temContent">
      <!-- <ul>
        <li v-for="(item, index) in imgInfo" :key="index">
          <a href="javascript:;">
            <img :src="item.thumbs" alt />
          </a>
        </li>
      </ul>-->
      <vue-waterfall-easy
        :imgsArr="recommendImgList"
        :maxCols="2"
        :width="330"
        :height="755"
        :imgWidth="135"
        @click="selectImg"
      ></vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    vueWaterfallEasy
  },
  data() {
    return {
      recommendImgList: [
        {
          id: 1,
          src:
            "http://bearcarimg.codebear.cn/7456f975fccea2d5cce19a82e08912ec3ilFkUx56xsHRcFttsqK2Q!gradual.show",
          href: "javascript:;"
        },
        {
          id: 2,
          src:
            "http://bearcarimg.codebear.cn/be123aa0b72465ee503c7ba5c368863bXC6Yu6FwQMPiYF1yk3F2q!gradual.show",
          href: "javascript:;"
        },
        {
          id: 3,
          src:
            "http://bearcarimg.codebear.cn/ce6f9ec8a0d9f077930c15b91b82252b7j9z2sowAjxQQjNJ7eMJwO!gradual.show",
          href: "javascript:;"
        },
        {
          id: 4,
          src:
            "http://bearcarimg.codebear.cn/e8b71e7857b96c7b0c091b1f7592fea536hoikc99bOmERWGriRQDU!gradual.show",
          href: "javascript:;"
        },
        {
          id: 5,
          src:
            "http://bearcarimg.codebear.cn/5de18d7dd61a4c9b055efdabb9f09c836WgCbYTpXrQq9eWgeTXU1s!gradual.show",
          href: "javascript:;"
        },
        {
          id: 6,
          src:
            "http://bearcarimg.codebear.cn/ca6b942ea3f0d7e0ae7f107fe9779d287EeRHrnU6Gjhz639uv6PMY!gradual.show",
          href: "javascript:;"
        },
        {
          id: 7,
          src:
            "http://bearcarimg.codebear.cn/8ead687106ad6d380394a39bebb8eef86wCsJmaJbG07HGEDU8H7S0!gradual.show",
          href: "javascript:;"
        },
        {
          id: 8,
          src:
            "http://bearcarimg.codebear.cn/02596325952cb88e2e63fe9cf2c952bc1SwWxKfeNvZRulKQLgukpM!gradual.show",
          href: "javascript:;"
        },
        {
          id: 9,
          src:
            "http://bearcarimg.codebear.cn/349f6dc27e66f787d93169cad6da732bH9TbSIQgtiC5PIhraGZ9k!gradual.show",
          href: "javascript:;"
        },
        {
          id: 10,
          src:
            "http://bearcarimg.codebear.cn/a87c39432206952ade30d742da64fceb4D6uzMD5EeaKULYsZq7qVe!gradual.show",
          href: "javascript:;"
        },
        {
          id: 11,
          src:
            "http://bearcarimg.codebear.cn/8bdc77316c2f60c84cd84060c4c345af1Z27Iuz4RudcbNBa0Djehi!gradual.show",
          href: "javascript:;"
        },
        {
          id: 12,
          src:
            "http://bearcarimg.codebear.cn/d74e089543afe11a3945c6cd06130b463skAwou9VRH4DpDcMKfEuo!gradual.show",
          href: "javascript:;"
        },
        {
          id: 13,
          src:
            "http://bearcarimg.codebear.cn/f67d9d38e280544cd9dbd3ee6c520b904MtiiViAgAH7HYywyZdNIG!gradual.show",
          href: "javascript:;"
        },
        {
          id: 14,
          src:
            "http://bearcarimg.codebear.cn/25ffb31f5adf7e837540f8da695bc28aHQuHhBZ93Nw7JAMYFJC4U!gradual.show",
          href: "javascript:;"
        },
        {
          id: 15,
          src:
            "http://bearcarimg.codebear.cn/8a61e2e098c59d13bc28b8a4eb667cce3sSvE6gBueFAqFrduNAxS4!gradual.show",
          href: "javascript:;"
        },
        {
          id: 16,
          src:
            "http://bearcarimg.codebear.cn/95a06eee907b49c1e095211323df40f54dnhpdyuf7WLhl6MZxtaPE!gradual.show",
          href: "javascript:;"
        },
        {
          id: 17,
          src:
            "http://bearcarimg.codebear.cn/e386feed6faea239d4e628ae334343c76TKhqAPxh84mKixcFD2jDg!gradual.show",
          href: "javascript:;"
        },
        {
          id: 18,
          src:
            "http://bearcarimg.codebear.cn/d876071258082127cebb0de42f5270b9rxJbFGS4jObsgrikYBq9c!gradual.show",
          href: "javascript:;"
        },
        {
          id: 19,
          src:
            "http://bearcarimg.codebear.cn/4bba98b9b2d3ebc7c41da23cba70f9eb5ZVz5X4NceKe3ioi54a8tu!gradual.show",
          href: "javascript:;"
        },
        {
          id: 20,
          src:
            "http://bearcarimg.codebear.cn/b159e9d856d5bb82a73d92103674134817Ih6um8QgB3fmMUDdAtT4!gradual.show",
          href: "javascript:;"
        }
      ],
      // 图片的容器
      imgInfo: [],
      // 搜索信息
      searchInfo: ""
    };
  },
  computed: {
    ...mapGetters(["eimgSrc"])
  },
  methods: {
    ...mapActions(["updateimgSrc"]),
    // 请求图片的数据，以数组的形式保存
    getImg() {
      this.$http.get("http://localhost:8081/mock/home.json").then(res => {
        this.imgInfo = res.data.data.canvases;
      });
    },
    // 侧边栏选择图片，中间对应显示选择的图片呢
    selectImg(event, { index, value }) {
      this.updateimgSrc({
        src: value.src
      });
    }
  },
  created() {
    this.getImg();
  }
};
</script>

<style>
/* 瀑布流样式 */
.asideTem .temContent[data-v-2f16ef28] {
  padding-left: 0;
}
.temContent .vue-waterfall-easy {
  width: 280px !important;
}
/* 左侧搜索框 */
.searchBox .el-input__inner {
  display: block;
  width: 280px;
  height: 50px;
  border-radius: 25px;
  padding-left: 23px;
  padding-right: 50px !important;
  color: #000;
  font-size: 14px;
  background: #f4f4f4;
}
.searchBox .el-input__suffix {
  left: -245px;
  top: 3px;
}
</style>
<style lang="less" scoped>
.asideTem {
  padding-top: 34px;
  background-color: #fff;
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.05);
}
.searchBox {
  position: relative;
  width: 330px;
  height: 50px;
  padding: 0 25px;
  border-radius: 25px;
  margin-bottom: 23px;

  input::placeholder {
    color: #afafaf;
    font-size: 14px;
  }
  i {
    position: absolute;
    right: 46px;
    top: 13px;
    width: 24px;
    height: 24px;
    font-size: 24px;
    color: #ff5b9e;
    cursor: pointer;
  }
}
.temContent {
  height: 755px;
  overflow-x: hidden;
  padding-left: 25px;
  .vue-waterfall-easy {
    width: 280px !important;
    overflow: hidden;
    li {
      float: left;
      width: 135px;
      height: 240px;
      background-color: tan;
      margin-right: 8px;
      margin-bottom: 10px;
      border-radius: 6px;
      a {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        &:hover:before {
          opacity: 1;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
      :before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.15);
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: 1;
      }
    }
    li:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>

