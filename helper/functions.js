import axios from "axios";
import * as cheerio from "cheerio";

export const fetchVideos = async (url) => {
  const result = await axios.get(url);
  const $ = cheerio.load(result.data);
  let arr = [];

  $(".progression-studios-video-index", result.data).each((index, element) => {
    const title = $(element)
      .children("a")
      .children(".progression-video-index-content")
      .children("h2")
      .text();
    const link = $(element).children("a").attr("href");
    const thumbnail = $(element)
      .children("a")
      .children(".progression-video-feaured-image")
      .children("img")
      .attr("src");

    if (title != "") arr.push({ title, link, thumbnail });
  });

  console.log(arr);
};

export const fetchCategories = async (reqUrl) => {
  const result = await axios.get(reqUrl);
  const $ = cheerio.load(result.data);
  let arr = [];

  $(".progression-studios-video-index", result.data).each((index, element) => {
    const title = $(element)
      .children("a")
      .children(".progression-video-index-content")
      .children("h2")
      .text();
    const url = $(element).children("a").attr("href");
    const thumbnail = $(element)
      .children("a")
      .children(".progression-video-feaured-image")
      .children("img")
      .attr("src");

    if (title != "") arr.push({ title, url, thumbnail });
  });

  return arr;
};

export const fetchDetail = async (url) => {
  const result = await axios.get(url);
  const $ = cheerio.load(result.data);

  const video = $("source").attr("src");
  const title = $(".video-post-page-title").text();
  const releaseDate = $("#video-post-meta-year").text().trim();
  const duration = $("#video-post-meta-duration").text().replace("min", "");
  const description = $("#progression-video-single-content")
    .children("div")
    .children("p")
    .text();

  const otherData = [];
  const categories = [];
  const relatedVideos = [];

  $(".info-meta", result.data).each((index, element) => {
    const title = $(element).children("h4").text();
    const name = $(element).children("a").text();

    if (title !== "Categories") otherData.push({ title, name });
  });

  $(".info-meta>ul>li", result.data).each((index, element) => {
    const category = $(element).children("a").text();

    categories.push(category);
  });

  $(".progression-studios-video-index", result.data).each((index, element) => {
    const title = $(element)
      .children("a")
      .children(".progression-video-index-content")
      .children("h2")
      .text();
    const link = $(element).children("a").attr("href");
    const thumbnail = $(element)
      .children("a")
      .children(".progression-video-feaured-image")
      .children("img")
      .attr("src");

    if (title != "") relatedVideos.push({ title, link, thumbnail });
  });

  return {
    video,
    title,
    releaseDate,
    duration,
    description,
    otherData,
    categories,
    relatedVideos,
  };
};

export const fetchVideos_xgroovy = async (url) => {
  const result = await axios.get(url);
  const $ = cheerio.load(result.data);
  let data = [];

  $(".item", result.data).each((index, element) => {
    const title = $(element)
      .children("a")
      .children("div")
      .children("img")
      .attr("alt");
    const link = $(element).children("a").attr("href");
    const thumbnail = $(element)
      .children("a")
      .children("div")
      .children("img")
      .attr("src");

    if (link != undefined) data.push({ title, link, thumbnail });
  });

  return data;
};

export const fetchDetail_xgroovy = async (url) => {
  const result = await axios.get(url);
  const $ = cheerio.load(result.data);

  const title = $(".page-title").children("h1").text();
  const duration = $(".page-title").children(".duration").text();
  const releaseDate = "---";
  const description = $(".info").children(".item").text().trim();
  const video = $("source").attr("src");
  const otherData = [];
  let categories = [];
  let relatedVideos = [];

  $(".default-list>li", result.data).each((index, element) => {
    categories.push($(element).children("a").text().trim());
  });

  $(".item", result.data).each((index, element) => {
    const title = $(element)
      .children("a")
      .children("div")
      .children("img")
      .attr("alt");
    const link = $(element).children("a").attr("href");
    const thumbnail = $(element)
      .children("a")
      .children("div")
      .children("img")
      .attr("src");

    if (title !== undefined) relatedVideos.push({ title, link, thumbnail });
  });

  return {
    title,
    duration,
    releaseDate,
    description,
    video,
    otherData,
    categories,
    relatedVideos,
  };
};

export const fetchTags = async () => {
  const result = await axios.get("https://xgroovy.com/tags/");
  const $ = cheerio.load(result.data);
  const tags = [];

  $(".list-tags-simple>li", result.data).each((index, element) => {
    const url = $(element).children("a").attr("href");
    if (url !== undefined) {
      const nameAndTotal = $(element).children("a").text().split(" (");
      const title = nameAndTotal[0];
      const total = nameAndTotal[1].replace(" vids)", "");

      if (parseInt(total) > 300) {
        tags.push({ url, title, total });
      }
    }
  });

  return { tags, total: tags.length };
};

export const scrollToTop = (scrollRef) => {
  scrollRef.current?.scrollTo({
    y: 0,
    animated: false,
  });
};
