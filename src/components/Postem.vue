<template>
  <div class="index_container">
    <!-- postem header start -->

    <el-row :gutter="10" class="index_container_header">
      <el-col :xs="12" :sm="5" :md="5" :lg="4" :xl="4">
        <div class="grid-content bg-purple">
          <img src="../assets/images/logo.png" alt />
        </div>
      </el-col>
      <el-col :sm="14" :md="14" :lg="16" :xl="16" class="hidden-xs-only">
        <div class="grid-content bg-purple-light index_container_tab">
          <ul>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">海报模板</a>
            </li>
            <li>
              <a href="#">客户端下载</a>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="12" :sm="5" :md="5" :lg="4" :xl="4">
        <div class="index_header_login">
          <a href="#">登录</a>
          <span>|</span>
          <a href="#">注册</a>
        </div>
      </el-col>
    </el-row>

    <!-- 搜索框 -->
    <el-row>
      <el-col :span="24">
        <div class="postem_search">
          <el-row>
            <el-col :span="24">
              <div class="nav_box_iptdad">
                <input value="双十一海报" class="nav_box_ipt" />
                <a href="#" class="navinput_icon el-icon-search"></a>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="nav_box_hotsearch">
          <span>热门搜索 :</span>
          <a href="javascript:;">七夕</a>
          <a href="javascript:;">立秋</a>
          <a href="javascript:;">促销</a>
          <a href="javascript:;">母婴亲子</a>
          <a href="javascript:;">代购晒产品</a>
        </div>
      </el-col>
    </el-row>

    <!-- postem header start -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// index header start

.index_container_header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  background-color: #fff;
  padding: 13px 35px;
  z-index: 999;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
}
.index_container_tab ul {
  overflow: hidden;
  li {
    float: left;
    height: 36px;
    line-height: 36px;
    margin: 0 20px;
    font-size: 16px;
    a {
      color: #000;
    }
  }
}
.index_header_login {
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  text-align: right;
  span {
    margin: 0 10px;
    vertical-align: 0;
    color: #000;
  }
  a {
    color: #000;
  }
}
// 搜索框
.postem_search {
  max-width: 1200px;
  margin: 135px auto 0;
}

.nav_box_iptdad {
  width: 70%;
  position: relative;
  margin: auto;
  overflow: hidden;
}
.nav_box_ipt {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 25px;
  border: none;
  padding-left: 43px;
  font-size: 14px;
  color: #afafaf;
}
.navinput_icon {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 13%;
  height: 50px;
  border-radius: 0 25px 25px 0;
  background: linear-gradient(
    90deg,
    rgba(255, 117, 140, 1),
    rgba(255, 126, 179, 1)
  );
  border-image: linear-gradient(
    90deg,
    rgba(255, 91, 118, 1),
    rgba(255, 91, 158, 1)
  );
}
// 热门搜索
.nav_box_hotsearch {
  width: 70%;
  margin: auto;
  overflow: hidden;
  text-align: left;
  padding-left: 43px;
  margin-top: 12px;
  font-size: 14px;
  color: #666;
  a {
    margin-left: 10px;
    color: #666;
  }
}
// index header end
</style>