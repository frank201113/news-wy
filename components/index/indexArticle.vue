<template>
  <div>
    <section class="wap-section section-channel section-headline">
      <div class="sec-top">
        <h2 class="sec-name"><a href="javascript:;">今日要闻</a></h2>
      </div>
      <div class="sec-content">
        <template
          v-for="(item, index) in todayNews"
        >
          <article
            v-if="item.newsType === 'card-type-news'"
            :key="index"
            :class="item.newsType"            
            class="news-card">
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
                <div
                  v-if="item.toApp"
                  class="to-app">打开APP</div>
              </div>
              <div
                v-if="item.newPic.length > 0"
                class="news-pic">
                <img
                  v-for="(picItem, index) in item.newPic"
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
            class="news-card">
            <a href="javascript:;">
              <h3 class="title">{{ item.title }}</h3>
              <div
                v-if="item.newPic.length > 0"
                class="news-pic">
                <img
                  v-for="(picItem, index) in item.newPic"
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
        <div class="sec-col-2 sec-change">换一换</div>
        <div class="sec-col-2">
          <a
            href="javascript:;"
            class="sec-more-link">进入今日要闻</a>
        </div>
      </div>
    </section>
    <section class="wap-section section-channel section-sports">
      <div class="sec-top">
        <h2 class="sec-name"><a href="javascript:;">体育</a></h2>
        <div class="sec-tabs">
          <ul>
            <li class="link-item"><a href="javascript:;">赛事</a></li>
            <li class="link-item"><a href="javascript:;">NBA</a></li>
            <li class="link-item"><a href="javascript:;">中超</a></li>
            <li class="link-item"><a href="javascript:;">CBA</a></li>
          </ul>
        </div>
      </div>
      <div class="sec-content">
        <template
          v-for="(item, index) in sports"
        >
          <article
            v-if="item.newsType === 'card-type-three'"
            :key="index"
            :class="item.newsType"
            class="news-card">
            <a href="">
              <h3 class="title">{{ item.title }}</h3>
              <div
                v-if="item.newPic.length > 0"
                class="news-pic">
                <img
                  v-for="(picItem, index) in item.newPic"
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
              <div
                v-if="item.toApp"
                class="to-app">打开APP</div>
            </a>
          </article>
          <article
            v-else-if="item.newsType === 'card-type-news'"
            :key="index"
            :class="item.newsType"
            class="news-card">
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
                <div
                  v-if="item.toApp"
                  class="to-app">打开APP</div>
              </div>
              <div
                v-if="item.newPic.length > 0"
                class="news-pic">
                <img
                  v-for="(picItem, index) in item.newPic"
                  :key="index"
                  :alt="item.title"
                  :src="picItem"
                  lazy="loaded" />
              </div>
            </a>
          </article>          
        </template>
      </div>
      <div class="sec-bottom">
        <a
          href="javascript:;"
          class="sec-more-link">
          进入体育频道
        </a>
      </div>
    </section>
    <section class="wap-section section-channel section-ent">
      <div class="sec-top">
        <h2 class="sec-name"><a href="javascript:;">娱乐</a></h2>
        <div class="sec-tabs">
          <ul>
            <li class="link-item"><a href="javascript:;">电视</a></li>
            <li class="link-item"><a href="javascript:;">电影</a></li>
            <li class="link-item"><a href="javascript:;">明星</a></li>
          </ul>
        </div>
      </div>
      <div class="sec-content">
        <template
          v-for="(item, index) in entertainment"
        >
          <article
            v-if="item.newsType === 'card-type-one'"
            :key="index"
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
                  :src="picItem" 
                  :alt="item.title"
                  lazy="loaded"/>
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
              <div
                v-if="item.toApp"
                class="to-app">打开APP</div>
            </a>
          </article>
          <article
            v-else-if="item.newsType === 'card-type-news'"
            :key="index"
            :class="item.newsType"
            class="news-card">
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
                <div
                  v-if="item.toApp"
                  class="to-app">打开APP</div>
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
      </div>
      <div class="sec-bottom">
        <a
          href="javascript:;"
          class="sec-more-link">
          进入娱乐频道
        </a>
      </div>
    </section>
    <section class="wap-section section-channel section-war">
      <div class="sec-top">
        <h2 class="sec-name">
          <a href="javascript:;">军事</a>
        </h2>
        <div class="sec-tabs">
          <ul>
            <li class="link-item"><a href="javascript:;">军品</a></li>
            <li class="link-item"><a href="javascript:;">军情</a></li>
          </ul>
        </div>
      </div>
      <div class="sec-content">
        <template
          v-for="(item, index) in military"
        >
          <article
            v-if="item.newsType === 'card-type-news'"
            :key="index"
            :class="item.newsType"            
            class="news-card">
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
                <div
                  v-if="item.toApp"
                  class="to-app">打开APP</div>
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
          class="sec-more-link">进入军事频道</a>
      </div>
    </section>
    <section class="wap-section section-channel section-money">
      <div class="sec-top">
        <h2 class="sec-name"><a href="javascript:;">财经</a></h2>
        <div class="sec-tabs">
          <ul>
            <li class="link-item"><a href="javascript:;">股票</a></li>
            <li class="link-item"><a href="javascript:;">基金</a></li>
            <li class="link-item"><a href="javascript:;">商业</a></li>
          </ul>
        </div>
      </div>
      <div class="sec-content">
        <template
          v-for="(item, index) in finance"
        >
          <article
            v-if="item.newsType === 'card-type-news'"
            :key="index"
            :class="item.newsType"            
            class="news-card">
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
                <div
                  v-if="item.toApp"
                  class="to-app">打开APP</div>
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
            v-else-if="item.newsType === 'card-type-three'"
            :key="index"
            :class="item.newsType"
            class="news-card">
            <a href="">
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
            v-else-if="item.newsType === 'card-type-one'"
            :key="index"
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
          class="sec-more-link">进入财经频道</a>
      </div>
    </section>
    <section class="wap-section section-channel section-local">
      <div class="sec-top">
        <h2 class="sec-name">
          <a href="javascript:;">本地·深圳</a>
        </h2>
        <div class="sec-tabs">
          <ul>
            <li class="link-item"><a href="javascript:;">选择城市</a></li>
          </ul>
        </div>
      </div>
      <div class="sec-content">
        <template
          v-for="(item, index) in local"
        >
          <article
            v-if="item.newsType === 'card-type-three'"
            :key="index"
            :class="item.newsType"
            class="news-card">
            <a href="">
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
              <div
                v-if="item.toApp"
                class="to-app">打开APP</div>
            </a>
          </article>
          <article
            v-else-if="item.newsType === 'card-type-one'"
            :key="index"
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
            class="news-card">
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
                <div
                  v-if="item.toApp"
                  class="to-app">打开APP</div>
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
      </div>
      <div class="sec-bottom">
        <a
          href="javascript:;"
          class="sec-more-link">进入本地·深圳频道</a>
      </div>
    </section>
    <section class="wap-section section-channel section-dy">
      <div class="sec-top">
        <h2 class="sec-name"><a href="javascript:;">网易号</a></h2>
        <div class="sec-tabs">
          <ul>
            <li class="link-item"><a href="javascript:;">每日推荐</a></li>
          </ul>
        </div>
      </div>
      <div class="sec-content">
        <template
          v-for="(item, index) in netease"
        >
          <article
            v-if="item.newsType === 'card-type-three'"
            :key="index"
            :class="item.newsType"
            class="news-card">
            <a href="">
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
              <div
                v-if="item.toApp"
                class="to-app">打开APP</div>
            </a>
          </article>
          <article
            v-else-if="item.newsType === 'card-type-one'"
            :key="index"
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
            class="news-card">
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
                <div
                  v-if="item.toApp"
                  class="to-app">打开APP</div>
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
      </div>
      <div class="sec-bottom">
        <a
          href="javascript:;"
          class="sec-more-link">进入网易号</a></div>
    </section>
    <section class="wap-section section-channel section-auto">
      <div class="sec-top">
        <h2 class="sec-name">
          <a href="javascript:;">汽车</a>
        </h2>
        <div class="sec-tabs">
          <ul>
            <li class="link-item"><a href="javascript:;">汽车观察</a></li>
            <li class="link-item"><a href="javascript:;">每日易乐</a></li>
          </ul>
        </div>
      </div>
      <div class="sec-content">
        <template
          v-for="(item, index) in car"
        >
          <article
            v-if="item.newsType === 'card-type-news'"
            :key="index"
            :class="item.newsType"            
            class="news-card">
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
                <div
                  v-if="item.toApp"
                  class="to-app">打开APP</div>
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
            class="news-card">
            <a href="">
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
          class="sec-more-link">进入汽车频道</a>
      </div>
    </section>
    <section class="wap-section section-channel section-tech">
      <div class="sec-top">
        <h2 class="sec-name">
          <a href="javascript:;">科技</a>
        </h2>
        <div class="sec-tabs">
          <ul>
            <li class="link-item"><a href="javascript:;">科学</a></li>
            <li class="link-item"><a href="javascript:;">智能</a></li>
          </ul>
        </div>
      </div>
      <div class="sec-content">
        <template
          v-for="(item, index) in tech"
        >
          <article
            v-if="item.newsType === 'card-type-news'"
            :key="index"
            :class="item.newsType"            
            class="news-card">
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
                <div
                  v-if="item.toApp"
                  class="to-app">打开APP</div>
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
            v-else-if="item.newsType === 'card-type-three'"
            :key="index"
            :class="item.newsType"
            class="news-card">
            <a href="">
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
            v-else-if="item.newsType === 'card-type-one'"
            :key="index"
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
          class="sec-more-link">进入科技频道</a>
      </div>
    </section>
    <section class="wap-section section-bottom-links">
      <div class="sec-top"><h2 class="sec-name">推荐栏目</h2></div>
      <div class="sec-content">
        <ul class="wap-linklist">
          <li
            v-for="(item, index) in column"
            :key="index"
            class="link-item"><a :href="item.linkAddress">{{ item.name }}</a></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    column: {
      type: Array,
      default: () => {
        return []
      }
    },
    car: {
      type: Array,
      default: () => {
        return []
      }
    },
    entertainment: {
      type: Array,
      default: () => {
        return []
      }
    },
    finance: {
      type: Array,
      default: () => {
        return []
      }
    },
    local: {
      type: Array,
      default: () => {
        return []
      }
    },
    military: {
      type: Array,
      default: () => {
        return []
      }
    },
    netease: {
      type: Array,
      default: () => {
        return []
      }
    },
    sports: {
      type: Array,
      default: () => {
        return []
      }
    },
    tech: {
      type: Array,
      default: () => {
        return []
      }
    },
    todayNews: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="css">
@import "../../assets/css/index/indexArticle.css";
</style>
