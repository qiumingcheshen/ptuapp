<template>
  <div class="index_container">
    <!-- index header start -->

    <el-row :gutter="10" class="index_container_header">
      <el-col :xs="12" :sm="5" :md="5" :lg="4" :xl="4">
        <div class="grid-content bg-purple">
          <h1>
            <a href="/index" class="logoBoxa">
              <img src="../assets/images/logo.png" alt="拼图工厂" title="拼图工厂" />
            </a>
          </h1>
        </div>
      </el-col>
      <el-col :sm="14" :md="14" :lg="16" :xl="16" class="hidden-xs-only">
        <div class="grid-content bg-purple-light index_container_tab">
          <ul>
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <router-link to="/postem">海报模板</router-link>
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

            <!-- 轮播图 -->
            <el-row>
              <el-col :span="24">
                <div class="nav_box_slideshow">
                  <swiper :options="swiperOption">
                    <swiper-slide>
                      <img src="../assets/images/slideshow_01.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/slideshow_02.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/slideshow_03.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/slideshow_04.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/slideshow_01.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/slideshow_02.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/slideshow_03.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/slideshow_04.jpg" alt />
                    </swiper-slide>
                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                    <div class="swiper-button-prev el-icon-arrow-left" slot="button-prev"></div>
                    <div class="swiper-button-next el-icon-arrow-right" slot="button-next"></div>
                  </swiper>
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
              <div class="category_icons category_icons1"></div>
              <div class="category_name">
                <a href="#">护肤美妆</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons category_icons2"></div>
              <div class="category_name">
                <a href="#">美发美甲</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons category_icons3"></div>
              <div class="category_name">
                <a href="#">保健养生</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons category_icons4"></div>
              <div class="category_name">
                <a href="#">减肥瘦身</a>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="category_middle">
            <div class="category_boxs">
              <div class="category_icons category_icons5"></div>
              <div class="category_name">
                <a href="#">女性私护</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons category_icons6"></div>
              <div class="category_name">
                <a href="#">母婴亲子</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons category_icons7"></div>
              <div class="category_name">
                <a href="#">家具清洁</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons category_icons8"></div>
              <div class="category_name">
                <a href="#">服鞋箱包</a>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="category_right">
            <div class="category_boxs">
              <div class="category_icons category_icons9"></div>
              <div class="category_name">
                <a href="#">内衣配饰</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons category_icons10"></div>
              <div class="category_name">
                <a href="#">情趣计生</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons category_icons11"></div>
              <div class="category_name">
                <a href="#">综合商城</a>
              </div>
            </div>
            <div class="category_boxs">
              <div class="category_icons category_icons12"></div>
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
                  <img src="../assets/images/footer_01.png" alt />
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
                      <a href="javascript:;">电话：0731-82290973</a>
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
// 引入 swiper css 和  注册 swiper 组件
import "../../node_modules/swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      // 控制登录对话框的显示隐藏
      loginDialogVisible: false,

      // 控制注册对话框的显示隐藏
      registerDialogVisible: false,

      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
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
    }
  }
};
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
  .logoBoxa {
    display: block;
    width: 136px;
    height: 36px;
    img {
      width: 136px;
      height: 36px;
    }
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
    color: #fff;
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
  color: #fff;
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
  // .el-carousel__item:nth-child(2) {
  //   background: url(../assets/images/slideshow_03.jpg) no-repeat top center;
  //   background-size: contain;
  // }
  .swiper-container {
    height: 100%;
  }
  .swiper-slide {
    background-color: darkturquoise;
    border-radius: 6px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 43%;
    width: 38px;
    height: 70px;
    line-height: 70px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
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
  width: 44px;
  height: 44px;
  margin-left: 10px;
}
.category_icons1 {
  background: url(../assets/images/icons.png) -6px 0 no-repeat;
}
.category_icons2 {
  background: url(../assets/images/icons.png) -84px 0 no-repeat;
}
.category_icons3 {
  background: url(../assets/images/icons.png) -159px 0 no-repeat;
}
.category_icons4 {
  background: url(../assets/images/icons.png) -236px 0 no-repeat;
}
.category_icons5 {
  background: url(../assets/images/icons.png) -312px 0 no-repeat;
}
.category_icons6 {
  background: url(../assets/images/icons.png) -388px 0 no-repeat;
}
.category_icons7 {
  background: url(../assets/images/icons.png) -464px 0 no-repeat;
}
.category_icons8 {
  background: url(../assets/images/icons.png) -542px 0 no-repeat;
}
.category_icons9 {
  background: url(../assets/images/icons.png) -618px 0 no-repeat;
}
.category_icons10 {
  background: url(../assets/images/icons.png) -695px 0 no-repeat;
}
.category_icons11 {
  width: 44px;
  height: 44px;
  background: url(../assets/images/icons.png) -771px 0 no-repeat;
}
.category_icons12 {
  background: url(../assets/images/icons.png) -848px 0 no-repeat;
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
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 22px;
  background-color: #f4f4f4;
  text-align: center;
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
  img {
    width: 200px;
    height: 50px;
  }
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