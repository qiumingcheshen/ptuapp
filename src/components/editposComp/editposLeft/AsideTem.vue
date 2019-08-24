<template>
  <div class="asideTem">
    <div class="searchBox">
      <el-input v-model="searchInfo" type="text" placeholder="搜索模板" clearable></el-input>
      <i class="el-icon-search"></i>
    </div>
    <div class="temContent">
      <ul>
        <li v-for="(item, index) in imgInfo" :key="index">
          <a href="javascript:;">
            <img :src="item.thumbs" alt />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 图片的容器
      imgInfo: [],
      // 搜索信息
      searchInfo: ""
    };
  },
  methods: {
    // 请求图片的数据，以数组的形式保存
    getImg() {
      this.$http.get("http://localhost:8081/mock/home.json").then(res => {
        this.imgInfo = res.data.data.canvases;
      });
    }
  },
  created() {
    this.getImg();
  }
};
</script>

<style>
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
  overflow-y: scroll;
  padding-left: 25px;
  ul {
    width: 280px;
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

