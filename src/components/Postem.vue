<template>
  <div class="index_container">
    <!-- postem header start -->

    <el-row :gutter="10" class="index_container_header">
      <el-col :xs="12" :sm="5" :md="5" :lg="4" :xl="4">
        <div class="grid-content bg-purple">
          <h1>
            <router-link to="/index">
              <img src="../assets/images/logo2.png" alt />
            </router-link>
          </h1>
        </div>
      </el-col>
      <el-col :sm="14" :md="14" :lg="16" :xl="16" class="hidden-xs-only">
        <div class="grid-content bg-purple-light index_container_tab">
          <ul>
            <li>
              <router-link to="/index">首页</router-link>
            </li>
            <li>
              <a href="#" class="active">海报模板</a>
            </li>
            <li>
              <a href="#">客户端下载</a>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="12" :sm="5" :md="5" :lg="4" :xl="4">
        <div class="index_header_login">
          <a href="javascript:;" @click="showLoginDialog()">登录</a>
          <span>|</span>
          <a href="javascript:;" @click="showRegisterDialog()">注册</a>
        </div>
      </el-col>
    </el-row>

    <!-- 搜索框 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark index_nav">
          <div class="index_nav_box">
            <!-- 搜索框 -->
            <el-row>
              <el-col :span="24">
                <div class="nav_box_iptdad">
                  <input placeholder="双十一海报" class="nav_box_ipt" />
                  <a href="#" class="navinput_icon el-icon-search"></a>
                </div>
              </el-col>
            </el-row>
            <!-- 热门搜索 -->
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
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- postem header start -->

    <!-- template category  start  -->
    <div class="templateCate w">
      <!-- 面包屑导航 -->
      <div class="templateCate_nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">当前位置 :首页</el-breadcrumb-item>
          <el-breadcrumb-item>海报模板</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 模板信息 -->
      <div class="template_info">
        <div class="template_info_cate">
          <dl>
            <dt>
              <a href="javascript:;">类别</a>
            </dt>
            <dd>
              <a href="javascript:;">全部</a>
            </dd>
            <dd>
              <a href="javascript:;">七夕</a>
            </dd>
            <dd>
              <a href="javascript:;">立秋</a>
            </dd>
            <dd>
              <a href="javascript:;">促销</a>
            </dd>
            <dd>
              <a href="javascript:;">母婴亲子</a>
            </dd>
            <dd>
              <a href="javascript:;">代购晒产品</a>
            </dd>
            <dd>
              <a href="javascript:;">七夕</a>
            </dd>
            <dd>
              <a href="javascript:;">立秋</a>
            </dd>
            <dd>
              <a href="javascript:;">促销</a>
            </dd>
            <dd>
              <a href="javascript:;">母婴亲子</a>
            </dd>
          </dl>
          <div class="checkAll">
            <a href="javascript:;">
              <span>查看更多</span>
              <i></i>
            </a>
          </div>
        </div>
        <div class="template_info_style">
          <dl>
            <dt>
              <a href="javascript:;">风格</a>
            </dt>
            <dd>
              <a href="javascript:;">全部</a>
            </dd>
            <dd>
              <a href="javascript:;">简约</a>
            </dd>
            <dd>
              <a href="javascript:;">卡通</a>
            </dd>
            <dd>
              <a href="javascript:;">欧美</a>
            </dd>
            <dd>
              <a href="javascript:;">古风</a>
            </dd>
          </dl>
        </div>
        <div class="template_info_type">
          <dl>
            <dt>
              <a href="javascript:;">板式</a>
            </dt>
            <dd>
              <a href="javascript:;">全部</a>
            </dd>
            <dd>
              <a href="javascript:;">横图</a>
            </dd>
            <dd>
              <a href="javascript:;">竖图</a>
            </dd>
            <dd>
              <a href="javascript:;">方图</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- template category  end  -->

    <!-- posterItem start -->
    <div class="w posterItemBox clearfix">
      <!-- 瀑布流 -->
      <vue-waterfall-easy
        :imgsArr="recommendImgList"
        :maxCols="4"
        :width="1200"
        :height="4000"
        :imgWidth="239"
        @click="toEditpos"
      ></vue-waterfall-easy>
    </div>
    <!-- posterItem end -->

    <!-- pageNum start -->
    <div class="w pageNum">
      <div class="block">
        <el-pagination
          background
          :pager-count="9"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="1"
          layout="pager, next, total, jumper"
          next-text="下一页"
          :total="255"
        ></el-pagination>
      </div>
    </div>
    <!-- pageNum end -->

    <!-- footer start -->
    <el-row>
      <el-col :span="24">
        <div class="foorerBox">
          <div class="footer">
            <el-row :gutter="10">
              <el-col :xs="8" :sm="8" :md="7" :lg="6" :xl="6">
                <div class="footer_logo">
                  <img src="../assets/images/footer_01.jpg" alt />
                </div>
              </el-col>
              <el-col :xs="8" :sm="8" :md="10" :lg="12" :xl="12">
                <div class="footer_infos">
                  <dl>
                    <dt>海报模板</dt>
                    <dd>
                      <a href="javascript:;">专题一</a>
                    </dd>
                    <dd>
                      <a href="javascript:;">专题二</a>
                    </dd>
                    <dd>
                      <a href="javascript:;">专题三</a>
                    </dd>
                  </dl>
                </div>
                <div class="footer_infos">
                  <dl>
                    <dt>关于我们</dt>
                    <dd>
                      <a href="javascript:;">公司介绍</a>
                    </dd>
                    <dd>
                      <a href="javascript:;">新闻中心</a>
                    </dd>
                  </dl>
                </div>
                <div class="footer_infos">
                  <dl>
                    <dt>联系我们</dt>
                    <dd>
                      <a href="javascript:;">QQ： 1647685232</a>
                    </dd>
                    <dd>
                      <a href="javascript:;">电话： 0731-82290973</a>
                    </dd>
                  </dl>
                </div>
              </el-col>
              <el-col :xs="8" :sm="8" :md="7" :lg="6" :xl="6">
                <div class="footer_contact">
                  <a href="javascript:;" class="phoneIcon"></a>
                  <a href="javascript:;" class="weixinIcon"></a>
                </div>
              </el-col>
            </el-row>
          </div>
          <div
            class="companyInfo"
          >Copyright © 2018 All Rights Reserved 湖南惠人网络科技有限公司 湘公网安备 43019002000704号 湘ICP备17004594号</div>
        </div>
      </el-col>
    </el-row>

    <!-- footer end -->

    <!-- 登录对话框 -->
    <el-dialog
      title="登录"
      :visible.sync="loginDialogVisible"
      width="400px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <login @openResterDialog="openResterDialog"></login>
    </el-dialog>

    <!-- 注册对话框 -->
    <el-dialog
      title="注册"
      :visible.sync="registerDialogVisible"
      width="400px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <register @openLoginDialog="openLoginDialog"></register>
    </el-dialog>

    <!-- 回到顶部 -->
    <el-tooltip placement="top" content="回到顶部">
      <back-to-top
        :custom-style="myBackToTopStyle"
        :visibility-height="300"
        :back-position="0"
        transition-name="fade"
      />
    </el-tooltip>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
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
      // 控制登录对话框的显示隐藏
      loginDialogVisible: false,

      // 控制注册对话框的显示隐藏
      registerDialogVisible: false,

      // 瀑布流参数
      // 存放渲染瀑布流的数据
      imgsArr: [],
      // 请求参数
      group: 0,
      width: 279,
      srcKey: "thumbs",
      hrefKey: "varcoverpic.rect",

      // 分页区域
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      // 回到顶部的样式
      myBackToTopStyle: {
        right: "50px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        borderRadius: "4px",
        lineHeight: "45px", // 请保持与高度一致以垂直居中
        background: "#e7eaf1" // 按钮的背景颜色
      }
    };
  },
  methods: {
    // 分页区域处理当前页的函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 展示登录对话框
    showLoginDialog() {
      this.loginDialogVisible = true;
    },

    // 展示注册对话框
    showRegisterDialog() {
      this.registerDialogVisible = true;
    },
    // 接收 登录页、注册页中传回的参数 控制登录页和注册页的显示隐藏
    openResterDialog(switchObj) {
      this.registerDialogVisible = switchObj.registerDialogVisible;
      this.loginDialogVisible = switchObj.loginDialogVisible;
    },
    openLoginDialog(switchObj) {
      this.registerDialogVisible = switchObj.registerDialogVisible;
      this.loginDialogVisible = switchObj.loginDialogVisible;
    },
    // 瀑布流请求数据
    getWaterfallData() {
      this.$http.get("http://localhost:8081/mock/home.json").then(res => {
        this.imgsArr = res.data.data.canvases;
      });
    },

    // 路由传参给编辑页面
    toEditpos(event, { index, value }) {
      // 新窗口打开
      let { href } = this.$router.resolve({
        path: "/editpos",
        query: {
          id: `${value.id}`
        }
      });
      window.open(href, "_blank");
    }
  },
  created() {
    this.getWaterfallData();
  }
};
</script>


<style>
/* 瀑布流 css */
.posterItemBox
  .vue-waterfall-easy-container
  .vue-waterfall-easy
  > .img-box.default-card-animation[data-v-ded6b974] {
  overflow: hidden;
  /* width: 279px !important; */
  border-radius: 6px !important;
  /* padding: 20px !important; */
  background-color: #fff;
  /* margin-bottom: 30px; */
}
.posterItemBox
  .vue-waterfall-easy-container
  .vue-waterfall-easy
  .vue-waterfall-easy-container
  .vue-waterfall-easy-scroll[data-v-ded6b974] {
  overflow-y: hidden !important;
}
.posterItemBox .vue-waterfall-easy {
  margin-left: -583.5px !important;
}
</style>
<style lang="less" scoped>
// 版心
.w {
  width: 1200px;
  margin: 0 auto;
}
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
  img {
    width: 135px;
    height: 35px;
  }
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
  li a.active {
    color: #ff6a94;
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
// index_nav start
.index_nav {
  padding-top: 130px;
  text-align: center;
}
.index_nav_box {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
// 搜索框
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
  color: #000;
}
.nav_box_ipt::placeholder {
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
  line-height: 50px;
  border-radius: 0 25px 25px 0;
  font-size: 28px;
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

// template category  start
.templateCate {
  height: 260px;
  background-color: #fff;
  margin-top: 50px;
  padding: 30px;
}
.templateCate_nav {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 40px;
}
el-breadcrumb-item {
  color: #666;
  font-size: 14px;
  font-weight: 400 !important;
}
.template_info {
  height: 126px;
  width: 100%;
}
.template_info_cate,
.template_info_style,
.template_info_type {
  height: 43px;
  font-size: 14px;
  color: #666;
  text-align: center;
  dt {
    float: left;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    a {
      color: #666;
    }
  }
  dd {
    display: block;
    float: left;
    height: 30px;
    line-height: 14px;
    margin: 0 12px;
    border-radius: 15px;
    a {
      display: block;
      padding: 9px 14px;
      color: #666;
      font-size: 14px;
      line-height: 14px;
    }
    a:hover {
      background-color: #ffd2df;
      color: #ff6a94;
      border-radius: 15px;
    }
  }
}
.template_info_cate .checkAll {
  float: right;
  width: 120px;
  height: 36px;
  background-color: #f4f4f4;
  border-radius: 18px;
  a {
    display: block;
    width: 120px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
  span {
    color: #333;
  }
  i {
    display: inline-block;
    width: 12px;
    height: 9px;
    background: url(../assets/images/arrowdown.png) no-repeat;
    background-size: 12px 9px;
    margin-left: 9px;
  }
}
// template category  end

// posterItem start
.posterItemBox {
  min-height: 500px;
  margin-top: 60px;
  ul {
    overflow: hidden;
    width: 1200px;
    li {
      float: left;
      width: 279px;
      height: 468px;
      margin-right: 28px;
      margin-bottom: 30px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      padding: 30px 25px;
      a {
        display: block;
        width: 100%;
      }
    }
    li:nth-child(4n) {
      margin-right: 0;
    }
  }
}

// pageNum start
.pageNum {
  height: 50px;
  line-height: 50px;
  margin: 80px auto 0;
  text-align: center;
}
// pageNum end

// footer start
.foorerBox {
  background-color: #1e1b1b;
  margin-top: 100px;
  height: 280px;
}

.footer {
  max-width: 1200px;
  height: 200px;
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
}

.footer_logo {
  width: 200px;
  height: 50px;
}

.footer_infos {
  float: left;
  width: 33.33%;
  text-align: left;
  dt {
    color: #fff;
  }
  dd {
    margin-top: 10px;
    color: #fff;
  }
  a {
    color: #afafaf;
  }
}

.footer_contact {
  float: right;
  a {
    float: left;
    width: 32px;
    height: 28px;
    display: block;
  }
  .phoneIcon {
    background: url(../assets/images/icons.png) -244px -84px no-repeat;
  }
  .weixinIcon {
    margin-left: 40px;
    background: url(../assets/images/icons.png) -198px -83px no-repeat;
  }
}

.companyInfo {
  max-width: 1200px;
  height: 80px;
  margin: 0 auto;
  border-top: 1px solid #464334;
  text-align: center;
  line-height: 80px;
  font-size: 12px;
  color: #666;
}

// footer end
</style>