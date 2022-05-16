<template>
  <div class="topbar">
    <div class="left">
      <div class="date">
        <div class="month">{{ day }}</div>
        <div class="day">{{ mouth }}</div>
      </div>
      <div class="splice"></div>
      <div class="logo">知乎日报</div>
    </div>
    <div class="right">
      <img src="./img/微博登录.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  props: ["date"],
  methods: {
    // 数字日期转为中文日期
    numberfilter(num) {
      const changeNum = [
        "零",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
      ]; // changeNum[0] = "零"
      const unit = ["", "十", "百"];
      num = parseInt(num);
      const getWan = (temp) => {
        const strArr = temp.toString().split("").reverse();
        let newNum = "";
        for (var i = 0; i < strArr.length; i++) {
          newNum =
            (i === 0 && strArr[i] === 0
              ? ""
              : i > 0 && strArr[i] === 0 && strArr[i - 1] === 0
              ? ""
              : changeNum[strArr[i]] + (strArr[i] === 0 ? unit[0] : unit[i])) +
            newNum;
        }
        return newNum;
      };
      const overWan = Math.floor(num / 100);
      let noWan = num % 100;
      if (noWan.toString().length < 2) noWan = "0" + noWan;
      const strr = overWan
        ? getWan(overWan) + "百" + getWan(noWan)
        : getWan(num);
      if (strr.split("")[0] === "一") {
        let showNum = "";
        if (strr === "一") {
          showNum = strr.substring(0);
        } else {
          showNum = strr.substring(1);
        }
        return showNum + "月";
      } else {
        const showNum = overWan
          ? getWan(overWan) + "百" + getWan(noWan)
          : getWan(num);
        return showNum + "月";
      }
    },
  },
  computed: {
    // 计算月份
    mouth() {
      return this.numberfilter(this.date.substring(4, 6));
    },
    // 计算日期
    day() {
      return this.date.substring(6, 8);
    },
  },
};
</script>

<style scoped lang="less">
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 16vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.2667vw;
  background-color: #fff;
  z-index: 10;

  .left {
    display: flex;
    align-items: center;
    flex: 1;

    .date {
      text-align: center;
      line-height: 5vw;

      .month {
        font-size: 6vw;
        font-weight: 550;
      }

      .day {
        font-size: 3.2vw;
      }
    }

    .splice {
      width: 0.2667vw;
      height: 10vw;
      margin: 0 3vw;
      background-color: #999;
    }

    .logo {
      font-size: 5.8667vw;
      font-weight: 550;
    }
  }

  .right {
    width: 10vw;
    height: 10vw;

    img {
      width: 100%;
    }
  }
}
</style>
