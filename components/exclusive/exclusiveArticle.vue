<template>
  <div class="wap-main-part">
    <div class="tab-content">
      <section class="wap-section section-channel section-headline">
        <template
          v-for="(item, index) in headline"
        >
          <article
            v-if="item.newsType === 'card-type-one'"
            :key="index"
            :class="item.newsType"
            class="news-card"
          >
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
                  v-if="item.detail.newsTag"
                  class="news-tag">{{ item.detail.newsTag }}</span>
                <span
                  v-if="item.detail.newsSource"
                  class="news-source">{{ item.detail.newsSource }}</span>
                <span
                  v-if="item.detail.pubtime"
                  class="pubtime">{{ item.detail.pubtime }}</span>
                <span
                  v-if="item.detail.reply"
                  class="reply">{{ item.detail.reply }}</span>
              </div>              
            </a>
          </article>
          <article
            v-else-if="item.newsType === 'card-type-three'"
            :key="index"
            :class="item.newsType"
            class="news-card"
          >
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
                  v-if="item.detail.newsTag"
                  class="news-tag">{{ item.detail.newsTag }}</span>
                <span
                  v-if="item.detail.newsSource"
                  class="news-source">{{ item.detail.newsSource }}</span>
                <span
                  v-if="item.detail.pubtime"
                  class="pubtime">{{ item.detail.pubtime }}</span>
                <span
                  v-if="item.detail.reply"
                  class="reply">{{ item.detail.reply }}</span>
              </div>              
            </a>
          </article>
          <article
            v-else-if="item.newsType === 'card-type-news'"
            :key="index"
            :class="item.newsType"
            class="news-card"
          >
            <a href="javascript:;">
              <div class="news-info">
                <h3 class="title">{{ item.title }}</h3>
                <div class="detail">
                  <span
                    v-if="item.detail.newsTag"
                    class="news-tag">{{ item.detail.newsTag }}</span>
                  <span
                    v-if="item.detail.newsSource"
                    class="news-source">{{ item.detail.newsSource }}</span>
                  <span
                    v-if="item.detail.pubtime"
                    class="pubtime">{{ item.detail.pubtime }}</span>
                  <span
                    v-if="item.detail.reply"
                    class="reply">{{ item.detail.reply }}</span>
                </div>
              </div>
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
            </a>
          </article>
        </template>
      </section>
      <section class="wap-section section-channel section-qsyk">
        <div class="sec-top">
          <h2 class="sec-name"><a href="javascript:;">轻松一刻</a></h2>
          <div class="sec-tabs">
            <ul>
              <li class="link-item"><a href="javascript:;">胖编怪聊</a></li>
              <li class="link-item"><a href="javascript:;">曲一刀</a></li>
              <li class="link-item"><a href="javascript:;">今日之声</a></li>
            </ul>
          </div>
        </div>
        <div class="sec-content">
          <template
            v-for="(item, index) in qsyk"
          >
            <article
              v-if="item.newsType === 'card-type-news'"
              :key="index"
              :class="item.newsType"
              class="news-card"
            >
              <a href="javascript:;">
                <div class="news-info">
                  <h3 class="title">{{ item.title }}</h3>
                  <div class="detail">
                    <span
                      v-if="item.detail.newsTag"
                      class="news-tag">{{ item.detail.newsTag }}</span>
                    <span
                      v-if="item.detail.newsSource"
                      class="news-source">{{ item.detail.newsSource }}</span>
                    <span
                      v-if="item.detail.pubtime"
                      class="pubtime">{{ item.detail.pubtime }}</span>
                    <span
                      v-if="item.detail.reply"
                      class="reply">{{ item.detail.reply }}</span>
                  </div>
                </div>
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
              </a>
            </article>
            <article
              v-else-if="item.newsType === 'card-type-one'"
              :key="index"
              :class="item.newsType"
              class="news-card"
            >
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
                    v-if="item.detail.newsTag"
                    class="news-tag">{{ item.detail.newsTag }}</span>
                  <span
                    v-if="item.detail.newsSource"
                    class="news-source">{{ item.detail.newsSource }}</span>
                  <span
                    v-if="item.detail.pubtime"
                    class="pubtime">{{ item.detail.pubtime }}</span>
                  <span
                    v-if="item.detail.reply"
                    class="reply">{{ item.detail.reply }}</span>
                </div>              
              </a>
            </article>            
          </template>
        </div>
        <div class="sec-bottom">
          <a
            href="javascript:;"
            class="sec-more-link">进入轻松一刻</a>
        </div>
      </section>
      <section class="wap-section section-channel section-fd">
        <div class="sec-top">
          <h2 class="sec-name">
            <a href="javascript:;">沸点工作室</a>
          </h2>
          <div class="sec-tabs">
            <ul>
              <li class="link-item"><a href="javascript:;">槽值</a></li>
              <li class="link-item"><a href="javascript:;">谈心社</a></li>
              <li class="link-item"><a href="javascript:;">哒哒</a></li>
            </ul>
          </div>
        </div>
        <div class="sec-content">
          <template
            v-for="(item, index) in fd"
          >
            <article
              v-if="item.newsType === 'card-type-three'"
              :key="index"
              :class="item.newsType"
              class="news-card"
            >
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
                    v-if="item.detail.newsTag"
                    class="news-tag">{{ item.detail.newsTag }}</span>
                  <span
                    v-if="item.detail.newsSource"
                    class="news-source">{{ item.detail.newsSource }}</span>
                  <span
                    v-if="item.detail.pubtime"
                    class="pubtime">{{ item.detail.pubtime }}</span>
                  <span
                    v-if="item.detail.reply"
                    class="reply">{{ item.detail.reply }}</span>
                </div>              
              </a>
            </article>
            <article
              v-else-if="item.newsType === 'card-type-news'"
              :key="index"
              :class="item.newsType"
              class="news-card"
            >
              <a href="javascript:;">
                <div class="news-info">
                  <h3 class="title">{{ item.title }}</h3>
                  <div class="detail">
                    <span
                      v-if="item.detail.newsTag"
                      class="news-tag">{{ item.detail.newsTag }}</span>
                    <span
                      v-if="item.detail.newsSource"
                      class="news-source">{{ item.detail.newsSource }}</span>
                    <span
                      v-if="item.detail.pubtime"
                      class="pubtime">{{ item.detail.pubtime }}</span>
                    <span
                      v-if="item.detail.reply"
                      class="reply">{{ item.detail.reply }}</span>
                  </div>
                </div>
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
              </a>
            </article>
            <article
              v-else-if="item.newsType === 'card-type-one'"
              :key="index"
              :class="item.newsType"
              class="news-card"
            >
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
                    v-if="item.detail.newsTag"
                    class="news-tag">{{ item.detail.newsTag }}</span>
                  <span
                    v-if="item.detail.newsSource"
                    class="news-source">{{ item.detail.newsSource }}</span>
                  <span
                    v-if="item.detail.pubtime"
                    class="pubtime">{{ item.detail.pubtime }}</span>
                  <span
                    v-if="item.detail.reply"
                    class="reply">{{ item.detail.reply }}</span>
                </div>              
              </a>
            </article>            
          </template>
        </div>
        <div class="sec-bottom">
          <a
            href="javascript:;"
            class="sec-more-link">进入沸点工作室</a></div>
      </section>
      <section class="wap-section section-channel section-rj">
        <div class="sec-top">
          <h2 class="sec-name">
            <a href="javascript:;">人间工作室</a>
          </h2>
          <div class="sec-tabs">
            <ul>
              <li class="link-item"><a href="javascript:;">人间</a></li>
              <li class="link-item"><a href="javascript:;">大国小民</a></li>
              <li class="link-item"><a href="javascript:;">看客</a></li>
            </ul>
          </div>
        </div>
        <div class="sec-content">
          <template
            v-for="(item, index) in rj"
          >
            <article
              v-if="item.newsType === 'card-type-one'"
              :key="index"
              :class="item.newsType"
              class="news-card"
            >
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
                    v-if="item.detail.newsTag"
                    class="news-tag">{{ item.detail.newsTag }}</span>
                  <span
                    v-if="item.detail.newsSource"
                    class="news-source">{{ item.detail.newsSource }}</span>
                  <span
                    v-if="item.detail.pubtime"
                    class="pubtime">{{ item.detail.pubtime }}</span>
                  <span
                    v-if="item.detail.reply"
                    class="reply">{{ item.detail.reply }}</span>
                </div>              
              </a>
            </article>
          </template>
        </div>
        <div class="sec-bottom">
          <a
            href="javascript:;"
            class="sec-more-link">进入人间工作室</a></div>
      </section>
      <section class="wap-section section-channel section-lc">
        <div class="sec-top">
          <h2 class="sec-name">
            <a href="javascript:;">浪潮工作室</a>
          </h2>
          <div class="sec-tabs">
            <ul>
              <li class="link-item"><a href="javascript:;">下划线</a></li>
              <li class="link-item"><a href="javascript:;">数读</a></li>
            </ul>
          </div>
        </div>
        <div class="sec-content">
          <template
            v-for="(item, index) in lc"
          >
            <article
              v-if="item.newsType === 'card-type-one'"
              :key="index"
              :class="item.newsType"
              class="news-card"
            >
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
                    v-if="item.detail.newsTag"
                    class="news-tag">{{ item.detail.newsTag }}</span>
                  <span
                    v-if="item.detail.newsSource"
                    class="news-source">{{ item.detail.newsSource }}</span>
                  <span
                    v-if="item.detail.pubtime"
                    class="pubtime">{{ item.detail.pubtime }}</span>
                  <span
                    v-if="item.detail.reply"
                    class="reply">{{ item.detail.reply }}</span>
                </div>              
              </a>
            </article>
          </template>
        </div>
        <div class="sec-bottom">
          <a
            href="javascript:;"
            class="sec-more-link">进入浪潮工作室</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: Array,
      default: () => {
        return []
      }
    },
    qsyk: {
      type: Array,
      default: () => {
        return []
      }
    },
    fd: {
      type: Array,
      default: () => {
        return []
      }
    },
    rj: {
      type: Array,
      default: () => {
        return []
      }
    },
    lc: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="css">
@import "../../assets/css/exclusive/exclusiveArticle.css";
</style>
