<template>
  <div class="asideTem">
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
  background-color: #fff;
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.05);
}
.temContent {
  height: 862px;
  overflow-y: scroll;
  padding-left: 25px;
  padding-top: 34px;
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