// fetchd datas from api ****************************************************************************

function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

const loadVideosByCategory = (id) => {
  const url = (`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)

  fetch(url)
  .then((res)=> res.json())
  .then((data)=> displayVideos(data.category))
}

// displayed data ************************************************************************************

function displayCategories(categories) {
  // console.log(categories);

  const categoryContainer = document.getElementById("category-container");

  // loop operation on an array of object
  for (let name of categories) {
    // create an element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button onclick="loadVideosByCategory(${name.category_id})" class="btn btn-soft btn-sm font-semibold text-lg px-5 py-5 hover:bg-[#FF1F3D] hover:text-white">${name.category}</button>`;

    // appned the elemnet
    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
  // console.log(videos);

  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = "";

  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
      <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[230px] object-cover" src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-4 bg-black text-white p-2 rounded text-[12px]"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 py-5 px-3">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="text-xl font-semibold mb-1">${video.title}</h2>
            <p class="text-sm text-gray-400 flex gap-1 mb-1">
              ${video.authors[0].profile_name}
              <img
                class="w-5 h-5"
                src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"
                alt=""
              />
            </p>
            <p class="text-sm text-gray-400">${video.others.views} views</p>
          </div>
        </div>
      </div>
    `;
    videoContainer.append(videoCard);
  });
};

// Calling the functions***************************************
loadCategories();

