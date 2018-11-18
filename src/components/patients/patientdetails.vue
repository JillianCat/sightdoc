<style lang="less">
  table {
      border-collapse:collapse;
      .left {
        width :120px;
      }
      .right {
        width: 200px;
      }
      td {
        text-align: center;
      }
  }
  table, td, th {
    border: 1px solid black;
}
</style>

<template>
  <Tabs type="card">
        <TabPane label="基础信息">
          <table>
            <tr>
              <td class="left">姓名</td>
              <td class="right" id="name"></td>
            </tr>
            <tr>
              <td>性别</td>
              <td></td>
            </tr>
            <tr>
              <td>出生日期</td>
              <td></td>
            </tr>
            <tr>
              <td>民族</td>
              <td></td>
            </tr>
            <tr>
              <td>籍贯</td>
              <td></td>
            </tr>
            <tr>
              <td>学校</td>
              <td></td>
            </tr>
            <tr>
              <td>联系电话</td>
              <td></td>
            </tr>
          </table>
        </TabPane>
        <TabPane label="筛查信息">
          标签二的内容
        </TabPane>
        <TabPane label="诊疗信息">
          <Tabs value="graph">
            <TabPane label="曲线图" name="graph">标签一的内容</TabPane>
            <TabPane label="详情列表" name="treatlist">标签二的内容</TabPane>
          </Tabs>
        </TabPane>
    </Tabs>
</template>

<script>
    export default {
      
    }
</script>