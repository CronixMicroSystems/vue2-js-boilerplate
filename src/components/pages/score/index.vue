<template>
    <div>
        <md-list class="md-double-line">
            <md-subheader class="md-inset">Folders</md-subheader>

            <md-list-item>
                <md-avatar class="md-avatar-icon">
                    <md-icon>folder</md-icon>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>Photos</span>
                    <p>Jan 9, 2014</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                </md-button>
            </md-list-item>

            <md-list-item>
                <md-avatar class="md-avatar-icon">
                    <md-icon>folder</md-icon>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>Recipes</span>
                    <p>Jan 17, 2014</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                </md-button>
            </md-list-item>

            <md-list-item>
                <md-avatar class="md-avatar-icon">
                    <md-icon>folder</md-icon>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>Work</span>
                    <p>Jan 28, 2014</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                </md-button>

                <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-subheader class="md-inset">Files</md-subheader>

            <md-list-item>
                <md-avatar class="md-avatar-icon md-primary">
                    <md-icon>insert_drive_file</md-icon>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>Vacation Itinerary</span>
                    <p>Jan 20, 2014</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                </md-button>
            </md-list-item>

            <md-list-item>
                <md-avatar md-theme="orange" class="md-avatar-icon md-primary">
                    <md-icon>collections</md-icon>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>Kitchen Remodel</span>
                    <p>Jan 10, 2014</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                </md-button>
            </md-list-item>

            <md-list-item>
                <md-avatar md-theme="green" class="md-avatar-icon md-primary">
                    <md-icon>view_list</md-icon>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>Grocery Shop</span>
                    <p>Jan 10, 2014</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                </md-button>
            </md-list-item>

            <md-list-item>
                <md-avatar md-theme="orange" class="md-avatar-icon md-primary">
                    <md-icon>collections</md-icon>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>Weekend Pictures</span>
                    <p>Jan 10, 2014</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                </md-button>
            </md-list-item>
        </md-list>
    </div>
</template>


<script>

export default {
	name: 'score',
    data(){
        return {
            showHide: false,
            score: 0,
            scoreTips:'',
            shareTitle:'',
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
        }
    },
    methods: {
        showCover: function (){
            this.showHide = !this.showHide;
        },
        getScoreTip: function (){
            if(this.score <= 50) {
                this.scoreTips = this.scoreTipsArr[0];
                return
            }
            if(this.score <= 70) {
                this.scoreTips = this.scoreTipsArr[1];
                return
            }
            if(this.score <= 80) {
                this.scoreTips = this.scoreTipsArr[2];
                return
            }
            if(this.score <= 90) {
                this.scoreTips = this.scoreTipsArr[3];
                return
            }
            if(this.score <= 100) {
                this.scoreTips = this.scoreTipsArr[4];
            }
        }
    },
	created(){
        this.score = 20;
        this.getScoreTip();
    }
}

</script>

<style lang="scss">
    //colors
    $color_mexican_red_approx: #a51d31;
    $color_deep_oak_approx: #3e2415;
    $color_horses_neck_approx: #664718;

    //fonts
    $font_0: Microsoft YaHei;
    $font_1: Tahoma;
    $font_2: Helvetica;
    $font_3: Arial;

    body {
        padding-top: 1.2rem;
    }
    .your_scores_container {
        width: 9.7rem;
        height: 9.1rem;
        background-size: 100% 100%;
        margin: 0 auto 0;
        position: relative;
        .your_scores {
            position: absolute;
            width: 100%;
            text-indent: 3.3rem;
            top: 4.7rem;
            font-size: 1.4rem;
            font-weight: 900;
            font-family: $font_0;
            .score_num {
                font-family: $font_1, $font_2, $font_3;
                color: $color_mexican_red_approx;
            }
            .fenshu {
                color: $color_mexican_red_approx;
            }
        }
        .result_tip {
            position: absolute;
            top: 7rem;
            width: 9rem;
            left: 0.6rem;
            color: $color_deep_oak_approx;
            font-size: 0.65rem;
            text-align: center;
        }
    }
    .share_button {
        width: 6.025rem;
        height: 2.4rem;
        margin: 0.8rem auto 0;
        background-size: 5.825rem 100%;
    }
    .share_code {
        width: 5.3rem;
        margin: 1.5rem auto 0;
        .share_header {
            color: $color_horses_neck_approx;
            font-size: 0.475rem;
            font-family: $font_0;
            width: 7rem;
            font-weight: 500;
        }
        .code_img {
            height: 5.3rem;
            width: 5.3rem;
            margin-top: 0.5rem;
        }
    }
    .share_cover {
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background-size: 100% 100%;
        opacity: 0.92;
    }
    .share_img {
        height: 10.975rem;
        width: 11.95rem;
        position: fixed;
        top: 0.5rem;
        left: 50%;
        margin-left: -5.975rem;
    }
</style>
