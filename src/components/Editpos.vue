<template>
  <div class="editContainer">
    <div>
      <el-row class="editContainerHeader">
        <el-col class="editPosLogo" :span="3">
          <img src="../assets/images/logo.png" alt />
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
      <el-row class="editContent">
        <el-col class="editContentAside">
          <a href="#" class="asideTem" @click="display = true">
            <i></i>
            <p>模板</p>
          </a>
          <a href="javascript:;" class="asideUpload">
            <i></i>
            <p>上传</p>
          </a>
          <a href="javascript:;" class="asideCollect">
            <i></i>
            <p>我的收藏</p>
          </a>
          <a href="javascript:;" class="asidePoster">
            <i></i>
            <p>我的海报</p>
          </a>
          <drawer
            title="我是一个抽屉组件"
            :display.sync="display"
            :inner="true"
            :width="drawerWidth"
            :mask="false"
          >
            1. Hello, world!
            2. Do you like it?
          </drawer>
        </el-col>
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
                  <a href="javascript:;"></a>
                </li>
                <li>
                  <a href="javascript:;"></a>
                </li>
                <li>
                  <a href="javascript:;"></a>
                </li>
                <li>
                  <a href="javascript:;"></a>
                </li>
              </ul>
            </div>
            <div class="editAreaTypeBox">
              <ul>
                <li>
                  <a href="javascript:;"></a>
                </li>
                <li>
                  <a href="javascript:;"></a>
                </li>
                <li>
                  <a href="javascript:;"></a>
                </li>
                <li>
                  <a href="javascript:;"></a>
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
      </el-row>
    </div>
  </div>
</template>

<script>
import Editdrawer from "./EditposDrawer";
export default {
  // 把自己定义的抽屉组件暴露出去
  components: {
    drawer: Editdrawer
  },
  data() {
    return {
      // 抽屉的属性
      display: false,
      drawerWidth: "500px",
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
    // 打开抽屉
    visible() {
      this.drawerVisible = true;
    }
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
}
.editPosLogo {
  padding: 13px 35px;
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
  width: 18px;
  height: 18px;
  background-color: red;
  vertical-align: middle;
  margin-right: 10px;
}
.posPreview i {
  display: inline-block;
  width: 23px;
  height: 16px;
  background-color: red;
  vertical-align: middle;
  margin-right: 10px;
}
.editPosSave {
  height: 60px;
  padding: 15px;
  a {
    float: right;
    display: block;
    width: 50px;
    height: 30px;
    background-color: #b99;
    text-align: center;
    line-height: 30px;
  }
}
// 编辑区域
.editContent {
  width: 100%;
  display: flex;
  height: 862px;
  position: absolute;
  top: 60px;
}
// 左侧导航栏 css

.editContentAside {
  position: relative;
  width: 100px;
  height: 862px;
  padding-top: 55px;
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.05);
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

// 中间的海报区域
.posArea {
  display: flex;
  flex: 1;
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
  // margin-bottom: 20px;
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
    padding: 14px 0;
    ul {
      overflow: hidden;
      li {
        float: left;
        width: 52px;
        height: 15px;
        border-right: 1px solid #f0f2f5;
        padding: 0 18px;
        a {
          display: block;
          width: 15px;
          height: 15px;
          background-color: #e51;
        }
      }
      li:last-child {
        border-right: none;
      }
    }
  }
}
.editAreaRowledge {
  margin-top: 20px;
}
</style>