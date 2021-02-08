<template>
  <div class="postsDiv">
    <ul>
      <li class="msg-err" v-for="err in errors" :key="err">{{ err }}</li>
    </ul>
    <b-row class="posts">
      <b-col col cols="12" md="12" lg="8">
        <div class="post" shadow>
          <h3 class="cut-word">{{ newsData[0].titel }}</h3>
          <!-- <p>{{ post.description }}</p> -->
          <span
            >{{ newsData[0].activeDateFrom }} <br />
            {{ newsData[0].activeDateTo }}</span
          >
          <img :src="baseUrl + newsData[0].imagePath" alt="Image" />
        </div>
      </b-col>
      <b-col
        col
        cols="12"
        md="6"
        lg="4"
        v-for="post in newsData"
        :key="post.newsId"
      >
        <div class="post" shadow>
          <h3 class="cut-word">{{ post.titel }}</h3>
          <!-- <p>{{ post.description }}</p> -->
          <span
            >{{ post.activeDateFrom }} <br />
            {{ post.activeDateTo }}</span
          >
          <img :src="baseUrl + post.imagePath" alt="Image" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  data: function() {
    return {
      baseUrl: "https://api-task1.adminssw.com/",
      status: null,
      msg: null,
      newsData: [],
      errors: [],
    };
  },
  // Fetches posts when the component is created.
  created() {
    axios
      .get(`${this.baseUrl}//news/allnews`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.status = response.data.status;
        this.msg = response.data.msg;
        this.newsData = response.data.newsData;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style scoped lang="scss">
.msg-err,
.msg-suc {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  li {
    list-style: none;
  }
}
.msg-err {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.msg-suc {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}

.cut-word {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.cut-1line,
.cut-2line,
.cut-3line {
  display: -moz-box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cut-1line {
  -webkit-line-clamp: 1;
}

.cut-2line {
  -webkit-line-clamp: 2;
}

.cut-3line {
  -webkit-line-clamp: 3;
}

.posts {
  .post {
    position: relative;
    margin: 10px 0;
    border: 1px solid #607d8b;
    border-radius: 5px;
    min-height: 250px;
    box-shadow: 0 0 9px 6px rgba(0, 0, 0, 0.2);
    h3 {
      color: #ffffff;
      position: absolute;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.65);
      text-align: start;
      width: 100%;
      padding: 20px;
      margin: 0;
    }
    span {
      position: absolute;
      right: 0;
      top: 0;
      background: #607d8b;
      color: #f0f8ff;
      padding: 5px 5px 7px 15px;
      border-radius: 0px 0px 0px 35px;
    }
    p {
      padding-top: 10px;
      font-size: initial;
      color: #607d8b;
      text-align: justify;
    }
    img {
      width: 100%;
      height: 250px;
    }
  }
}
</style>
