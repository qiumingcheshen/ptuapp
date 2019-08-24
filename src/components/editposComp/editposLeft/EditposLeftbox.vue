<template>
  <div id="editpos-leftbox">
    <!-- 侧边栏 tab 区域 -->
    <div class="editContentAside">
      <ul>
        <li v-for="(item, index) in asideTabs" :key="index" @click="switchUnfoldArea(index)">
          <a href="javascript:;">
            <i :style="item.backgroundPosition"></i>
            <p>{{item.title}}</p>
          </a>
        </li>
      </ul>
    </div>

    <!-- 侧边栏展开区域 -->
    <div class="asideUnfold" :style="mainstyle">
      <!-- 动态切换要显示的组件 -->
      <aside-tem :is="currentComp"></aside-tem>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制展开栏的显示与隐藏
      flag: false,

      // 当前选中的组件
      currentComp: "aside-tem",

      // 侧边栏的数据
      asideTabs: [
        {
          backgroundPosition: "background-position: -185px -363px",
          title: "模板",
          upfoldTemComp: "aside-tem"
        },
        {
          backgroundPosition: "background-position: -243px -363px",
          title: "上传",
          upfoldTemComp: "aside-upload"
        },
        {
          backgroundPosition: "background-position: -69px -363px",
          title: "我的收藏",
          upfoldTemComp: "aside-collect"
        },
        {
          backgroundPosition: "background-position: -128px -363px",
          title: "我的海报",
          upfoldTemComp: "aside-poster"
        }
      ]
    };
  },
  methods: {
    // 展示 侧边栏 tab 的组件的函数
    switchUnfoldArea: function(id) {
      this.flag = !this.flag;
      this.currentComp = this.asideTabs[id].upfoldTemComp;
    }
  },
  computed: {
    // 侧边栏展开盒子的左定位
    mainstyle: function() {
      return {
        left: this.flag ? "100px" : "-230px",
        opacity: 1
      };
    }
  }
};
</script>

<style lang="less" scoped>
#editpos-leftbox {
  position: absolute;
  width: 100px;
  height: 862px;
  padding-top: 55px;
  background-color: #fff;
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.05);
  z-index: 10;
}

// 左侧导航栏 css

.editContentAside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 862px;
  padding-top: 55px;
  background-color: #fff;
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.05);
  z-index: 10;
  a {
    display: block;
    width: 100px;
    height: 60px;
    background-color: #fff;
    margin-bottom: 40px;
    text-align: center;
    padding-top: 2px;
    i {
      display: block;
      width: 30px;
      height: 30px;
      background-color: #b67;
      margin-left: 35px;
      background: url("../../../assets/images/icons.png") no-repeat;
    }

    p {
      display: block;
      width: 100px;
      height: 30px;
      line-height: 35px;
      font-size: 14px;
      color: #666;
      text-align: center;
    }
  }
}

// 侧边栏展开区域
.asideUnfold {
  position: absolute;
  top: 0;
  left: -230px;
  width: 330px;
  height: 862px;
  background-color: #fff;
  transition: all 0.5s;
  z-index: 9;
}
</style>