<template>
    <section>
        <header class="top_tips">
            <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
            <span class="num_tip" v-if="fatherComponent == 'item'">{{itemNum}}</span>
        </header>
        <div v-if="fatherComponent == 'home'" >
            <div class="home_logo item_container_style"></div>
            <router-link to="item" class="start button_style" ></router-link>
        </div>
        <div v-if="fatherComponent == 'item'" >
            <div class="item_back item_container_style">
                <div class="item_list_container" v-if="this.$store.state.itemDetail.length > 0">
                    <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
                    <ul>
                        <li  v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
                            <span class="option_style" v-bind:class="{'has_choosed': choosedNum==index}">{{chooseType(index)}}</span>
                            <span class="option_detail">{{item.answer_name}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
            <span class="submit_item button_style" v-else @click="submitAnswer"></span>
        </div>
    </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'itemcontainer',
    data() {
      return {
        itemId: null,
        choosedNum: null,
        choosedId:null
      }
    },
    props:['fatherComponent'],
    computed: mapState({
      itemNum: state => state.itemNum,
      level: state => state.level,
      itemDetail: state => state.itemDetail
    }),
    methods: {
      nextItem: function (){
        if (this.choosedNum !== null) {
          this.choosedNum = null;
          this.$store.dispatch('addNum',this.choosedId)
        }else{
          alert('您还没有选择答案哦')
        }
      },
      chooseType: type => {
        switch(type){
          case 0: return 'A';
          case 1: return 'B';
          case 2: return 'C';
          case 3: return 'D';
        }
      },
      choosed: function (type,id){
        this.choosedNum = type;
        this.choosedId = id;
      },
      submitAnswer: function (){
        if (this.choosedNum !== null) {
          this.$store.dispatch('addNum',this.choosedId)
          clearInterval(this.$store.state.timer)
          this.$router.push('score')
        }else{
          alert('您还没有选择答案哦')
        }
      },
    },
    created(){
      this.$store.dispatch('initializeData');
      if(this.$store.state.itemDetail.length == 0){
        this.$store.dispatch('getData');
      }
    }
  }
</script>

<style lang="sass">
    //colors
	$color_driftwood_approx: #a57c50;
    $white: #fff;
    $color_gold_approx: #ffd400;
    $color_chicago_approx: #575757;

    //fonts
	$font_0: 黑体;
    $font_1: Arial;

    .top_tips {
        position: absolute;
        height: 7.35rem;
        width: 3.25rem;
        top: -1.3rem;
        right: 1.6rem;
        background-size: 100% 100%;
        z-index: 10;
    .num_tip {
        position: absolute;
        left: 0.48rem;
        bottom: 1.1rem;
        height: 0.7rem;
        width: 2.5rem;
        font-size: 0.6rem;
        font-family: $font_0;
        font-weight: 600;
        color: $color_driftwood_approx;
        text-align: center;
    }
    }
    .item_container_style {
        height: 11.625rem;
        width: 13.15rem;
        background-repeat: no-repeat;
        position: absolute;
        top: 4.1rem;
        left: 1rem;
    }
    .home_logo {
        background-size: 13.142rem 100%;
        background-position: right center;
    }
    .item_back {
        background-size: 100% 100%;
    }
    .button_style {
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
    }
    .start {
    }
    .next_item {
    }
    .submit_item {
    }
    .item_list_container {
        position: absolute;
        height: 7.0rem;
        width: 8.0rem;
        top: 2.4rem;
        left: 3rem;
    }
    .item_title {
        font-size: 0.65rem;
        color: $white;
        line-height: 0.7rem;
    }
    .item_list {
        font-size: 0;
        margin-top: 0.4rem;
        width: 10rem;
    span {
        display: inline-block;
        font-size: 0.6rem;
        color: $white;
        vertical-align: middle;
    }
    .option_style {
        height: 0.725rem;
        width: 0.725rem;
        border: 1px solid $white;
    //Instead of the line below you could use @include border-radius($radius, $vertical-radius)
    border-radius: 50%;
        line-height: 0.725rem;
        text-align: center;
        margin-right: 0.3rem;
        font-size: 0.5rem;
        font-family: $font_1;
    }
    .has_choosed {
        background-color: $color_gold_approx;
        color: $color_chicago_approx;
        border-color: $color_gold_approx;
    }
    .option_detail {
        width: 7.5rem;
        padding-top: 0.11rem;
    }
    }
</style>
