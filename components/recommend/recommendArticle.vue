<template>
  <div class="wap-main-part">
    <div class="tab-content">
      <div class="recommend-list">
        <div
          v-for="(item, index) in recommend"
          :key="index"
          class="rec-news-item">
          <article
            v-if="item.newsType === 'card-type-news'"
            :class="item.newsType"
            class="news-card">
            <a href="javascript:;">
              <div class="news-info">
                <h3 class="title">{{ item.title }}</h3>
                <div class="detail">
                  <span
                    v-if="item.detail.newsSource"
                    class="news-source">{{ item.detail.newsSource }}</span>
                  <span
                    v-if="item.detail.pubtime"
                    class="pubtime">{{ item.detail.pubtime }}</span>
                  <span
                    v-if="item.detail.reply"
                    class="reply">{{ item.detail.reply }}</span>
                  <span
                    v-if="item.detail.unlike"
                    class="unlike">X</span>
                </div>                
              </div>
              <div
                v-if="item.newsPic.length > 0"
                class="news-pic">
                <img
                  v-for="(picItem, index) in item.newsPic"
                  :key="index"
                  :src="picItem"
                  :alt="item.title" />
              </div>              
            </a>
          </article>
          <article
            v-else-if="item.newsType === 'card-type-one'"
            :class="item.newsType"
            class="news-card">
            <a href="javascript:;">
              <h3 class="title">{{ item.title }}</h3>
              <div
                v-if="item.newsPic.length > 0"
                class="news-pic">
                <img
                  v-for="(picItem, index) in item.newsPic"
                  :key="index"
                  :alt="item.title"
                  :src="picItem"
                  lazy="loaded" />
              </div>
              <div class="detail">
                <span
                  v-if="item.detail.newsSource"
                  class="news-source">{{ item.detail.newsSource }}</span>
                <span
                  v-if="item.detail.pubtime"
                  class="pubtime">{{ item.detail.pubtime }}</span>
                <span
                  v-if="item.detail.reply"
                  class="reply">{{ item.detail.reply }}</span>
                <span
                  v-if="item.detail.unlike"
                  class="unlike">X</span>
              </div>                            
            </a>
          </article>
          <article
            v-else-if="item.newsType === 'card-type-three'"
            :class="item.newsType"
            class="news-card">
            <a href="javascript:;">
              <h3 class="title">{{ item.title }}</h3>
              <div
                v-if="item.newsPic.length > 0"
                class="news-pic">
                <img
                  v-for="(picItem, index) in item.newsPic"
                  :key="index"
                  :alt="item.title"
                  :src="picItem"
                  lazy="loaded" />
              </div>
              <div class="detail">
                <span
                  v-if="item.detail.newsSource"
                  class="news-source">{{ item.detail.newsSource }}</span>
                <span
                  v-if="item.detail.pubtime"
                  class="pubtime">{{ item.detail.pubtime }}</span>
                <span
                  v-if="item.detail.reply"
                  class="reply">{{ item.detail.reply }}</span>
                <span
                  v-if="item.detail.unlike"
                  class="unlike">X</span>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="css">
@import "../../assets/css/recommend/recommendArticle.css";
</style>
