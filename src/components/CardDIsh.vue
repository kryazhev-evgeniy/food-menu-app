<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        {{ dish.name }}
      </div>
    </div>
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="
            dish.urlImage || require(`../assets/images/image_not_found.png`)
          "
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDish",
  props: {
    dish: Object
  },
  data: () => ({
    image_not_found: "../assets/images/image_not_found.png"
  })
};
</script>
