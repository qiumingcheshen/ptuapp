<template>
  <div class="editContainer">
    <div>
      <el-row class="editContainerHeader">
        <el-col class="editPosLogo" :span="3">
          <h1>
            <a href="/index">
              <img src="../assets/images/logo2.png" alt />
            </a>
          </h1>
        </el-col>
        <el-col class="editPosColl" :span="18">
          <div class="posCollect">
            <i></i>
            <span>收藏</span>
          </div>
          <div class="posPreview">
            <i></i>
            <span>预览</span>
          </div>
        </el-col>
        <el-col class="editPosSave" :span="3">
          <a href="javascript:;">保存</a>
        </el-col>
      </el-row>
      <div class="editContent">
        <!-- 侧边栏区域 -->
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
          <Postemplate :is="currentComp"></Postemplate>
        </div>

        <!-- 中间的海报区域 -->
        <el-col class="posArea">
          <div class="posAreaImg"></div>
        </el-col>
        <!-- 右边的编辑部分 -->
        <el-col class="editArea">
          <div class="editAreaFontStyle editAreaFontType">
            <p>字体类型</p>
            <div class="editAreaFontTypeDp">
              <el-select v-model="FontTypeValue" placeholder="请选择">
                <el-option
                  v-for="item in FontType"
                  :key="item.FontTypeValue"
                  :label="item.FontTypeLabel"
                  :value="item.FontTypeValue"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="editAreaFontStyle editAreaFontSize">
            <p>字体大小</p>
            <div class="editAreaFontSizeDp">
              <el-select v-model="FontSizeValue" placeholder="请选择">
                <el-option
                  v-for="item in FontSize"
                  :key="item.FontSizeValue"
                  :label="item.FontSizeLabel"
                  :value="item.FontSizeValue"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="editAreaFontStyle editAreaFontColor">
            <p>颜色</p>
            <div class="editAreaFontColorDp">
              <el-color-picker v-model="color" show-alpha :predefine="predefineColors"></el-color-picker>
            </div>
          </div>
          <div class="editAreaType">
            <p>样式</p>
            <div class="editAreaTypeBox">
              <ul>
                <li>
                  <el-tooltip content="加粗" placement="top">
                    <a href="javascript:;" class="overstriking"></a>
                  </el-tooltip>
                </li>
                <li>
                  <el-tooltip content="斜体" placement="top">
                    <a href="javascript:;" class="italic"></a>
                  </el-tooltip>
                </li>
                <li>
                  <el-tooltip content="下划线" placement="top">
                    <a href="javascript:;" class="underline"></a>
                  </el-tooltip>
                </li>
                <li>
                  <el-tooltip content="删除线" placement="top">
                    <a href="javascript:;" class="delete"></a>
                  </el-tooltip>
                </li>
              </ul>
            </div>
            <div class="editAreaTypeBox">
              <ul>
                <li>
                  <el-tooltip content="文字方向" placement="bottom">
                    <a href="javascript:;" class="textDirection"></a>
                  </el-tooltip>
                </li>
                <li>
                  <el-tooltip content="左对齐" placement="bottom">
                    <a href="javascript:;" class="textLeft"></a>
                  </el-tooltip>
                </li>
                <li>
                  <el-tooltip content="居中" placement="bottom">
                    <a href="javascript:;" class="textMiddle"></a>
                  </el-tooltip>
                </li>
                <li>
                  <el-tooltip content="右对齐" placement="bottom">
                    <a href="javascript:;" class="textRight"></a>
                  </el-tooltip>
                </li>
              </ul>
            </div>
          </div>
          <div class="editAreaFontStyle editAreaRowledge">
            <p>行距</p>
            <div class="editAreaFontSizeDp">
              <el-select v-model="RowledgeValue" placeholder="请选择">
                <el-option
                  v-for="item in Rowledge"
                  :key="item.RowledgeValue"
                  :label="item.RowledgeLabel"
                  :value="item.RowledgeValue"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="editAreaFontStyle editAreaInterval">
            <p>间距</p>
            <div class="editAreaFontSizeDp">
              <el-select v-model="IntervalValue" placeholder="请选择">
                <el-option
                  v-for="item in Interval"
                  :key="item.IntervalValue"
                  :label="item.IntervalLabel"
                  :value="item.IntervalValue"
                ></el-option>
              </el-select>
            </div>
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
import Postemplate from "./asideUnfoldArea/AsideTem.vue";
import Myupload from "./asideUnfoldArea/AsideUpload.vue";
import Mycollect from "./asideUnfoldArea/AsideCollect.vue";
import Myposter from "./asideUnfoldArea/AsidePoster.vue";
import data from "../../public/mock/home.json";
// console.log(data);

export default {
  // 注册侧边栏的局部组件
  components: {
    Postemplate,
    Myupload,
    Mycollect,
    Myposter
  },
  data() {
    return {
      // 控制展开栏的显示与隐藏
      flag: true,

      // 当前选中的组件
      currentComp: "Postemplate",

      // 侧边栏的数据
      asideTabs: [
        {
          backgroundPosition: "background-position: -185px -363px",
          title: "模板",
          upfoldTemComp: "Postemplate"
        },
        {
          backgroundPosition: "background-position: -243px -363px",
          title: "上传",
          upfoldTemComp: "Myupload"
        },
        {
          backgroundPosition: "background-position: -69px -363px",
          title: "我的收藏",
          upfoldTemComp: "Mycollect"
        },
        {
          backgroundPosition: "background-position: -128px -363px",
          title: "我的海报",
          upfoldTemComp: "Myposter"
        }
      ],

      // 字体类型
      FontType: [
        {
          FontTypeValue: "1",
          FontTypeLabel: "微软雅黑"
        },
        {
          FontTypeValue: "2",
          FontTypeLabel: "微软雅黑"
        },
        {
          FontTypeValue: "3",
          FontTypeLabel: "微软雅黑"
        },
        {
          FontTypeValue: "4",
          FontTypeLabel: "微软雅黑"
        },
        {
          FontTypeValue: "5",
          FontTypeLabel: "微软雅黑"
        },
        {
          FontTypeValue: "6",
          FontTypeLabel: "微软雅黑"
        },
        {
          FontTypeValue: "7",
          FontTypeLabel: "微软雅黑"
        },
        {
          FontTypeValue: "8",
          FontTypeLabel: "微软雅黑"
        },
        {
          FontTypeValue: "9",
          FontTypeLabel: "微软雅黑"
        },
        {
          FontTypeValue: "10",
          FontTypeLabel: "微软雅黑"
        }
      ],
      FontTypeValue: "",

      // 字体大小

      FontSize: [
        {
          FontSizeValue: "1",
          FontSizeLabel: "12px"
        },
        {
          FontSizeValue: "2",
          FontSizeLabel: "14px"
        },
        {
          FontSizeValue: "3",
          FontSizeLabel: "16px"
        },
        {
          FontSizeValue: "4",
          FontSizeLabel: "18px"
        },
        {
          FontSizeValue: "5",
          FontSizeLabel: "20px"
        },
        {
          FontSizeValue: "6",
          FontSizeLabel: "22px"
        },
        {
          FontSizeValue: "7",
          FontSizeLabel: "26px"
        },
        {
          FontSizeValue: "8",
          FontSizeLabel: "28px"
        },
        {
          FontSizeValue: "9",
          FontSizeLabel: "30px"
        },
        {
          FontSizeValue: "10",
          FontSizeLabel: "32px"
        }
      ],
      FontSizeValue: "",

      // 颜色选择
      color: "rgba(255, 69, 0, 0.68)",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)"
      ],

      // 行距
      Rowledge: [
        {
          RowledgeValue: "1",
          RowledgeLabel: "75"
        },
        {
          RowledgeValue: "2",
          RowledgeLabel: "75"
        },
        {
          RowledgeValue: "3",
          RowledgeLabel: "75"
        },
        {
          RowledgeValue: "4",
          RowledgeLabel: "75"
        },
        {
          RowledgeValue: "5",
          RowledgeLabel: "75"
        },
        {
          RowledgeValue: "6",
          RowledgeLabel: "75"
        },
        {
          RowledgeValue: "7",
          RowledgeLabel: "75"
        },
        {
          RowledgeValue: "8",
          RowledgeLabel: "75"
        },
        {
          RowledgeValue: "9",
          RowledgeLabel: "75"
        },
        {
          RowledgeValue: "10",
          RowledgeLabel: "75"
        }
      ],
      RowledgeValue: "",

      // 间距
      Interval: [
        {
          IntervalValue: "1",
          IntervalLabel: "100"
        },
        {
          IntervalValue: "2",
          IntervalLabel: "100"
        },
        {
          IntervalValue: "3",
          IntervalLabel: "100"
        },
        {
          IntervalValue: "4",
          IntervalLabel: "100"
        },
        {
          IntervalValue: "5",
          IntervalLabel: "100"
        },
        {
          IntervalValue: "6",
          IntervalLabel: "100"
        },
        {
          IntervalValue: "7",
          IntervalLabel: "100"
        },
        {
          IntervalValue: "8",
          IntervalLabel: "100"
        },
        {
          IntervalValue: "9",
          IntervalLabel: "100"
        },
        {
          IntervalValue: "10",
          IntervalLabel: "100"
        }
      ],
      IntervalValue: ""
    };
  },

  methods: {
    // 展示 侧边栏tab 的组件的函数
    switchUnfoldArea: function(id) {
      this.flag = !this.flag;
      this.currentComp = this.asideTabs[id].upfoldTemComp;
    },
    agetinfo() {
      this.$http.get("http://localhost:8081/mock/home.json").then(response => {
        console.log(response);
      });
    }
  },
  computed: {
    // 侧边栏展开盒子的左定位
    mainstyle: function() {
      return {
        left: this.flag ? "100px" : "100px",
        opacity: 1
      };
    }
  },
  mounted() {
    this.agetinfo();
  }
};
</script>

<style lang="less" scoped>
.editContainer {
  position: relative;
  display: block;
  max-width: 1880px;
  min-width: 970px;
  height: 922px;
  margin: auto;
  background-color: #fff;
}
.editContainerHeader {
  height: 60px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  a {
    display: block;
    width: 135px;
    height: 35px;
  }
}
.editPosLogo {
  padding: 13px 35px;
  img {
    width: 135px;
    height: 35px;
  }
}
.editPosColl {
  padding-left: 100px;
  .posCollect,
  .posPreview {
    float: left;
    line-height: 60px;
    font-size: 14px;
    margin-right: 40px;
  }
}
.posCollect i {
  display: inline-block;
  width: 19px;
  height: 19px;
  background-color: red;
  vertical-align: middle;
  margin-right: 10px;
  background: url(../assets/images/icons.png) -301px -425px no-repeat;
}
.posPreview i {
  display: inline-block;
  width: 26px;
  height: 18px;
  background-color: red;
  vertical-align: middle;
  margin-right: 10px;
  background: url(../assets/images/icons.png) -266px -425px no-repeat;
}
.editPosSave {
  height: 60px;
  padding: 15px;
  a {
    float: right;
    display: block;
    width: 50px;
    height: 30px;
    border-radius: 6px;
    background: linear-gradient(
      90deg,
      rgba(255, 117, 140, 1),
      rgba(255, 126, 179, 1)
    );
    text-align: center;
    line-height: 30px;
  }
}
// 编辑区域
.editContent {
  overflow: hidden;
  display: flex;
  position: absolute;
  top: 60px;
  width: 100%;
  height: 862px;
}
// 左侧导航栏 css

.editContentAside {
  position: absolute;
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
      background: url("../assets/images/icons.png") no-repeat;
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

// 中间的海报区域
.posArea {
  display: flex;
  flex: 1;
  margin-left: 100px;
  justify-content: center;
  align-items: center;
  background-color: #f7f4f5;
  .posAreaImg {
    width: 430px;
    height: 770px;
    background-color: #ffcaca;
  }
}

// 右边的样式
.editArea {
  width: 280px;
  padding: 50px 35px;
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.05);
}

.editAreaFontStyle {
  width: 210px;
  height: 80px;
  margin-bottom: 25px;
  p {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #333;
    text-align: left;
  }
  div {
    height: 40px;
  }
}
.editAreaType {
  height: 135px;
  p {
    margin-bottom: 15px;
    font-size: 12px;
    color: #333;
  }
  .editAreaTypeBox {
    width: 210px;
    height: 45px;
    border: 1px solid rgba(225, 225, 225, 1);
    border-radius: 6px;
    margin-bottom: 20px;
    padding: 12px 0;
    ul {
      overflow: hidden;
      li {
        float: left;
        width: 52px;
        height: 20px;
        border-right: 1px solid #f0f2f5;
        padding: 0 18px;
        a {
          display: block;
          width: 20px;
          height: 20px;
          background-color: #e51;
          background: url(../assets/images/icons.png) no-repeat;
        }
      }
      li:last-child {
        border-right: none;
      }
    }
    .overstriking {
      background-position: -104px -424px;
    }
    .italic {
      background-position: -4px -424px;
    }
    .underline {
      background-position: -36px -424px;
    }
    .delete {
      background-position: -69px -424px;
    }
    .textDirection {
      background-position: -136px -424px;
    }
    .textLeft {
      background-position: -234px -423px;
    }
    .textMiddle {
      background-position: -169px -423px;
    }
    .textRight {
      background-position: -202px -423px;
    }
  }
}
.editAreaRowledge {
  margin-top: 20px;
}
</style>