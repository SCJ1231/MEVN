<template>
  <div>
    <h1>6. 바인드리스트</h1>
    <select name="" id="" v-model="selData">
      <option v-for="city in arr" :key="city">
        {{ city }}
      </option>
    </select>
    <br />
    <span>선택하신 배송지역은: {{ selData }}</span>
    <br />
    <table>
      <tr>
        <th>No.</th>
        <th>카테고리</th>
        <th>품명</th>
        <th>가격</th>
        <th>배송비</th>
        <th>수량</th>
        <th style="width: 100px">합계</th>
      </tr>
      <tr v-for="(item, i) in dataArr" :key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.product_name }}</td>
        <td class="iprice"><input v-model.number="item.price" /></td>
        <td>
          {{
            selData === '제주'
              ? item.delivery_price + 5000
              : item.delivery_price
          }}
        </td>
        <td>
          <input
            style="width: 50px; text-align: center"
            type="number"
            min="0"
            v-model="수량[i]"
          />
        </td>
        <td>
          {{
            (total[i] =
              item.price * 수량[i] +
              (수량[i] > 0
                ? elData === '제주'
                  ? item.delivery_price + 5000
                  : item.delivery_price
                : 0))
          }}
        </td>
      </tr>
      <tr>
        <td id="sum-title" colspan="6">총합</td>
        <td>{{ (sum = total.reduce((a, c) => a + c, 0)) }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import data from '../assets/productData.js'
export default {
  data () {
    return {
      수량: [0, 0, 0, 0, 0, 0, 0],
      sum: 0,
      total: [],
      selData: '',
      arr: ['부산', '서울', '제주', '창원', '대구'],
      dataArr: data
    }
  }
}
</script>

<style>
table {
  text-align: center;
  margin: auto;
  border-collapse: collapse;
  width: 80%;
}
table :first-child {
  background-color: rgb(150, 245, 121);
}
th,
td {
  border: 1px solid black;
}
</style>
