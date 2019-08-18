<template>
  <div class="index_container">
    <!-- index header start -->

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

    <!-- index header end -->

    <!-- index nav start -->

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark index_nav">
          <div class="index_nav_box">
            <!-- 文字 -->
            <el-row>
              <el-col :span="24">
                <div class="nav_box_title">让生意更轻松</div>
              </el-col>
            </el-row>
            <!-- 搜索框 -->
            <el-row>
              <el-col :span="24">
                <div class="nav_box_iptdad">
                  <input value="双十一海报" class="nav_box_ipt" />
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
            <!-- 轮播图 -->
            <el-row>
              <el-col :span="24">
                <div class="nav_box_slideshow">
                  <template>
                    <el-carousel :interval="4000" type="card" height="175px">
                      <el-carousel-item v-for="item in 3" :key="item">
                        <h3 class="medium">{{ item }}</h3>
                      </el-carousel-item>
                    </el-carousel>
                  </template>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- index nav end -->

    <!-- category start -->

    <div class="category">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="category_left">
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">护肤美妆</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">美发美甲</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">保健养生</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">减肥瘦身</a>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="category_middle">
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">女性私护</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">母婴亲子</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">家具清洁</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">服鞋箱包</a>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="category_right">
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">内衣配饰</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">情趣计生</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">综合商城</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons"></div>
              <div class="category_name">
                <a href="#">虚拟商品/服务</a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- category end -->

    <!-- hotPoster start -->

    <div class="hotPoster">
      <el-row class="hotPoster_header">
        <el-col :span="12">
          <div class="hotPoster_title">热门海报</div>
        </el-col>
        <el-col :span="12">
          <div class="hopPoster_header_right">
            <a href="#">&lt;</a>
            <span>
              <a href="javascript:;">1</a>
              /
              <a href="javascript:;">2</a>
            </span>
            <a href="#">&gt;</a>
          </div>
        </el-col>
      </el-row>
      <div class="hotPoster_content">
        <div class="hotPoster_items">
          <img src="../assets/images/hotPoster_01.jpg" alt />
          <div class="hotPoster_items_textbox">
            <a href="#" class="hotPoster_items_text">
              旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击
            </a>
          </div>
        </div>
        <div class="hotPoster_items">
          <img src="../assets/images/hotPoster_02.jpg" alt />
          <div class="hotPoster_items_textbox">
            <a href="#" class="hotPoster_items_text">
              旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击
            </a>
          </div>
        </div>
        <div class="hotPoster_items">
          <img src="../assets/images/hotPoster_03.jpg" alt />
          <div class="hotPoster_items_textbox">
            <a href="#" class="hotPoster_items_text">
              旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击
            </a>
          </div>
        </div>
        <div class="hotPoster_items">
          <img src="../assets/images/hotPoster_04.jpg" alt />
          <div class="hotPoster_items_textbox">
            <a href="#" class="hotPoster_items_text">
              旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击
            </a>
          </div>
        </div>
        <div class="hotPoster_items">
          <img src="../assets/images/hotPoster_05.jpg" alt />
          <div class="hotPoster_items_textbox">
            <a href="#" class="hotPoster_items_text">
              旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击旅行社/文艺清新/民宿介
              绍/长图海报 点击
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- hotPoster end -->

    <!-- generalize start -->

    <div class="generalize">
      <div class="generalize_header">
        <el-row :gutter="10">
          <el-col :xs="12" :sm="3" :md="2" :lg="2" :xl="2">
            <div class="grid-content bg-purple generalize_name">推广</div>
          </el-col>
          <el-col :sm="18" :md="20" :lg="20" :xl="20" class="hidden-xs-only">
            <div class="grid-content bg-purple generalize_tab">
              <ul>
                <li>
                  <a href="javascript:;">价格表</a>
                </li>
                <li>
                  <a href="javascript:;">邀请函</a>
                </li>
                <li>
                  <a href="javascript:;">授权书</a>
                </li>
                <li>
                  <a href="javascript:;">招代理</a>
                </li>
                <li>
                  <a href="javascript:;">喜报</a>
                </li>
                <li>
                  <a href="javascript:;">招聘</a>
                </li>
                <li>
                  <a href="javascript:;">发布会</a>
                </li>
                <li>
                  <a href="javascript:;">门槛</a>
                </li>
                <li>
                  <a href="javascript:;">销售</a>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="12" :sm="3" :md="2" :lg="2" :xl="2">
            <div class="grid-content bg-purple generalize_checkall">
              <a href="javascript:;">查看全部 &gt;</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="generalize_content">
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
      </div>
      <div class="generalize_content">
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
      </div>
    </div>

    <!-- generalize end -->

    <!-- recommend start -->

    <el-row>
      <el-col :span="24">
        <div class="recommendBox">
          <div class="recommend">
            <div class="recommend_title">推荐专题</div>
            <div class="recommend_content">
              <div class="recommend_items">
                <img src="../assets/images/recommend_01.jpg" alt />
              </div>
              <div class="recommend_items">
                <img src="../assets/images/recommend_01.jpg" alt />
              </div>
              <div class="recommend_items">
                <img src="../assets/images/recommend_01.jpg" alt />
              </div>
              <div class="recommend_items">
                <img src="../assets/images/recommend_01.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- recommend end -->

    <!-- investment start  招商 -->

    <div class="generalize">
      <div class="generalize_header">
        <el-row :gutter="10">
          <el-col :xs="12" :sm="3" :md="2" :lg="2" :xl="2">
            <div class="grid-content bg-purple generalize_name">招商</div>
          </el-col>
          <el-col :sm="18" :md="20" :lg="20" :xl="20" class="hidden-xs-only">
            <div class="grid-content bg-purple generalize_tab">
              <ul>
                <li>
                  <a href="javascript:;">价格表</a>
                </li>
                <li>
                  <a href="javascript:;">邀请函</a>
                </li>
                <li>
                  <a href="javascript:;">授权书</a>
                </li>
                <li>
                  <a href="javascript:;">招代理</a>
                </li>
                <li>
                  <a href="javascript:;">喜报</a>
                </li>
                <li>
                  <a href="javascript:;">招聘</a>
                </li>
                <li>
                  <a href="javascript:;">发布会</a>
                </li>
                <li>
                  <a href="javascript:;">门槛</a>
                </li>
                <li>
                  <a href="javascript:;">销售</a>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="12" :sm="3" :md="2" :lg="2" :xl="2">
            <div class="grid-content bg-purple generalize_checkall">
              <a href="javascript:;">查看全部 &gt;</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="generalize_content">
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
      </div>
      <div class="generalize_content">
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
      </div>
    </div>

    <!-- investment end 招商 -->

    <!-- sport start -->

    <div class="sport">
      <el-row class="sport_header">
        <el-col :span="12">
          <div class="sport_title">运动健康</div>
        </el-col>
        <el-col :span="12">
          <div class="sport_header_right">
            <a href="#">&lt;</a>
            <span>
              <a href="javascript:;">1</a>
              /
              <a href="javascript:;">2</a>
            </span>
            <a href="#">&gt;</a>
          </div>
        </el-col>
      </el-row>
      <el-row class="sport_content">
        <el-col :span="8" class="sport_content_left">
          <a href="javascript:;">
            <img src="../assets/images/sport_01.jpg" alt />
          </a>
        </el-col>
        <el-col :span="16" class="soprt_content_right">
          <ul>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>

    <!-- sport end -->

    <!-- recommend start -->

    <el-row>
      <el-col :span="24">
        <div class="recommendBox">
          <div class="recommend">
            <div class="recommend_title">推荐专题</div>
            <div class="recommend_content">
              <div class="recommend_items">
                <img src="../assets/images/recommend_01.jpg" alt />
              </div>
              <div class="recommend_items">
                <img src="../assets/images/recommend_01.jpg" alt />
              </div>
              <div class="recommend_items">
                <img src="../assets/images/recommend_01.jpg" alt />
              </div>
              <div class="recommend_items">
                <img src="../assets/images/recommend_01.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- recommend end -->

    <!-- investment start  招商 -->

    <div class="generalize">
      <div class="generalize_header">
        <el-row :gutter="10">
          <el-col :xs="12" :sm="3" :md="2" :lg="2" :xl="2">
            <div class="grid-content bg-purple generalize_name">招商</div>
          </el-col>
          <el-col :sm="18" :md="20" :lg="20" :xl="20" class="hidden-xs-only">
            <div class="grid-content bg-purple generalize_tab">
              <ul>
                <li>
                  <a href="javascript:;">价格表</a>
                </li>
                <li>
                  <a href="javascript:;">邀请函</a>
                </li>
                <li>
                  <a href="javascript:;">授权书</a>
                </li>
                <li>
                  <a href="javascript:;">招代理</a>
                </li>
                <li>
                  <a href="javascript:;">喜报</a>
                </li>
                <li>
                  <a href="javascript:;">招聘</a>
                </li>
                <li>
                  <a href="javascript:;">发布会</a>
                </li>
                <li>
                  <a href="javascript:;">门槛</a>
                </li>
                <li>
                  <a href="javascript:;">销售</a>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="12" :sm="3" :md="2" :lg="2" :xl="2">
            <div class="grid-content bg-purple generalize_checkall">
              <a href="javascript:;">查看全部 &gt;</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="generalize_content">
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
      </div>
      <div class="generalize_content">
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
        <div class="generalize_items">
          <img src="../assets/images/generalize_01.jpg" alt />
        </div>
      </div>
    </div>

    <!-- investment end 招商 -->

    <!-- sport start -->

    <div class="sport">
      <el-row class="sport_header">
        <el-col :span="12">
          <div class="sport_title">运动健康</div>
        </el-col>
        <el-col :span="12">
          <div class="sport_header_right">
            <a href="#">&lt;</a>
            <span>
              <a href="javascript:;">1</a>
              /
              <a href="javascript:;">2</a>
            </span>
            <a href="#">&gt;</a>
          </div>
        </el-col>
      </el-row>
      <el-row class="sport_content">
        <el-col :span="8" class="sport_content_left">
          <a href="javascript:;">
            <img src="../assets/images/sport_01.jpg" alt />
          </a>
        </el-col>
        <el-col :span="16" class="soprt_content_right">
          <ul>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/sport_02.jpg" alt />
              </a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>

    <!-- sport end -->

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
                  <a href="javascript:;">
                    <img src="../assets/images/footer_02.jpg" alt />
                  </a>
                  <a href="javascript:;">
                    <img src="../assets/images/footer_03.jpg" alt />
                  </a>
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
  background-color: #e48bb5;
  padding: 13px 35px;
  z-index: 999;
}
.index_container_tab ul {
  overflow: hidden;
  li {
    float: left;
    height: 36px;
    line-height: 36px;
    margin: 0 20px;
    font-size: 16px;
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
  }
}
// index header end

// index_nav start
.index_nav {
  height: 500px;
  background-color: #e48bb5;
  padding-top: 60px;
  text-align: center;
}
.index_nav_box {
  max-width: 1200px;
  height: 440px;
  margin: 0 auto;
  text-align: center;
}
// 文字
.nav_box_title {
  font-size: 48px;
  letter-spacing: 5px;
  padding: 20px 0;
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
  color: #fff;
  a {
    margin-left: 10px;
  }
}
// 幻灯片
.nav_box_slideshow {
  width: 100%;
  height: 175px;
  margin: 30px auto;
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 175px;
    margin: 0;
    text-align: center;
    padding: 0 50px;
  }
  .el-carousel__item:nth-child(2) {
    background: url(../assets/images/slideshow_03.jpg) no-repeat top center;
    background-size: contain;
  }
  .el-carousel__item:nth-child(3) {
    background: url(../assets/images/slideshow_01.jpg) no-repeat top center;
    background-size: contain;
  }
  .el-carousel__item:nth-child(4) {
    background: url(../assets/images/slideshow_02.jpg) no-repeat top center;
    background-size: contain;
  }
  .el-carousel__item:nth-child(5) {
    background: url(../assets/images/slideshow_03.jpg) no-repeat top center;
    background-size: contain;
  }
  .el-carousel__item:nth-child(6) {
    background: url(../assets/images/slideshow_01.jpg) no-repeat top center;
    background-size: contain;
  }
}
// index_nav end

// category start
.category {
  // overflow: hidden;
  max-width: 1200px;
  min-height: 120px;
  margin: 60px auto 100px;
  text-align: center;
}
.category_boxs {
  float: left;
  width: 50%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  padding: 10px 0;
}
.category_icons {
  float: left;
  width: 43px;
  height: 43px;
  margin-left: 10px;
  background-color: #a87;
}
.category_name {
  float: left;
  width: 50%;
  height: 43px;
  text-align: center;
  line-height: 43px;
  margin-left: 15px;
  font-size: 14px;
  a {
    color: #333;
  }
}
// category end

// hotPoster start
.hotPoster,
.sport {
  max-width: 1200px;
  margin: auto;
}
.hotPoster_header,
.sport_header {
  height: 45px;
  margin-bottom: 24px;
}
.hopPoster_header_right,
.sport_header_right {
  float: right;
  color: #afafaf;
  margin-top: 10px;
  margin-right: 5px;
  a {
    color: #afafaf;
  }
  span {
    margin: 0 20px;
    font-size: 12px;
  }
}
.hotPoster_title,
.sport_title {
  font-size: 30px;
  color: #000;
}
.hotPoster_content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .hotPoster_items {
    width: 18%;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 10px;
    img {
      width: 100%;
    }
  }
}
.hotPoster_items_textbox {
  margin-top: 10px;
  padding: 0 7px;
  .hotPoster_items_text {
    width: 100%;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
// hotPoster end

// generalize start
.generalize {
  max-width: 1200px;
  margin: auto;
  margin-top: 140px;
}
.generalize_header {
  height: 45px;
}
.generalize_name {
  font-size: 30px;
  color: #000;
}
.generalize_tab {
  height: 45px;
  ul {
    overflow: hidden;
    height: 45px;
    line-height: 45px;
    text-align: center;
    li {
      float: left;
      height: 45px;
      margin-right: 35px;
      a {
        color: #333;
        font-size: 14px;
      }
    }
  }
}
.generalize_checkall {
  height: 45px;
  line-height: 45px;
  text-align: right;
  padding-right: 10px;
  a {
    color: #333;
    font-size: 14px;
  }
}
.generalize_content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
}
.generalize_items {
  width: 23%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 30px 25px;
  img {
    width: 100%;
  }
}
// generalize end;

// recommend start
.recommendBox {
  background-color: #1e1b1b;
  margin-top: 140px;
}
.recommend {
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 0;
}
.recommend_title {
  font-size: 30px;
  color: #fff;
  margin-bottom: 25px;
}
.recommend_content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .recommend_items {
    width: 23%;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
// recommend end

// investment start

// investment end

// sport start
.sport {
  margin-top: 130px;
}
.sport_content {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sport_content_left {
  border-radius: 6px;
  a {
    display: block;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.soprt_content_right {
  ul {
    overflow: hidden;
    height: 100%;
    li {
      overflow: hidden;
      float: left;
      width: 25%;
      height: 50%;
      padding-left: 23px;
      padding-bottom: 23px;
      border-radius: 6px;
      a {
        display: block;
        overflow: hidden;
      }
    }
    li:nth-child(n + 5) {
      padding-bottom: 0;
    }
    img {
      width: 100%;
    }
  }
}
// sport end

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
  dd {
    margin-top: 10px;
  }
}
.footer_contact {
  float: right;
  a {
    margin-left: 60px;
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