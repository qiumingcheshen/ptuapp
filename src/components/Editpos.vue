<template>
  <div class="editContainer">
    <div>
      <!-- 顶部区域 -->
      <el-row class="editContainerHeader">
        <el-col class="editPosLogo" :span="3">
          <h1>
            <router-link to="/index">
              <img src="../assets/images/logo2.png" alt />
            </router-link>
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

      <!-- 编辑主体区域 -->
      <div class="editContent">
        <!-- 侧边栏区域 -->
        <editpos-leftbox></editpos-leftbox>
        <!-- 中间的海报区域 -->
        <editpos-centerbox class="posArea"></editpos-centerbox>
        <!-- 右边的编辑部分 -->
        <editpos-rightbox></editpos-rightbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {}
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

// 中间的海报区域
.posArea {
  display: flex;
  position: relative;
  flex: 1;
  margin-left: 100px;
  justify-content: center;
  align-items: center;
  background-color: #f7f4f5;
}
</style>