<template>
  <div class="asideTem">
    <div class="searchBox">
      <input type="text" placeholder="搜索模板" />
      <i></i>
    </div>
    <div class="temContent">
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
</template>

<script>
export default {};
</script>

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
  input {
    display: block;
    width: 280px;
    height: 50px;
    border-radius: 25px;
    padding-left: 23px;
    color: #afafaf;
    font-size: 14px;
    background: #f4f4f4;
  }
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
    background-color: #e70;
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
        width: 100%;
        height: 100%;
      }
    }
    li:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>