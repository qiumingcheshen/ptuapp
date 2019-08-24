<template>
  <div id="editpos-rightbox">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>

<style lang="less" scoped>
// 右边的样式
#editpos-rightbox {
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
          background: url(../../../assets/images/icons.png) no-repeat;
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