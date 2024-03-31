document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const MyModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    MyModal.show();
  }
});

let images = {
  imgpath: [
    "galleryimg/1.jpg",
    "galleryimg/2.jpg",
    "galleryimg/3.jpg",
    "galleryimg/4.jpg",
    "galleryimg/5.jpg",
    "galleryimg/6.jpg",
    "galleryimg/7.jpg",
    "galleryimg/8.jpg",
    "galleryimg/9.jpg",
    "galleryimg/10.jpg",
    "galleryimg/11.jpg",
    "galleryimg/12.jpg",
    "galleryimg/13.jpg",
    "galleryimg/14.jpeg",
    "galleryimg/15.jpeg",
    "galleryimg/16.jpeg",
    "galleryimg/17.jpeg",
    "galleryimg/18.jpg",
    "galleryimg/19.jpeg",
    "galleryimg/20.jpg",
    "galleryimg/21.jpg",
    "galleryimg/22.jpg",
    "galleryimg/23.jpg",
    "galleryimg/24.jpg",
    "galleryimg/25.jpg",
    "galleryimg/26.jpg",
    "galleryimg/27.jpg",
    "galleryimg/28.jpg",
    "galleryimg/29.jpg",
    "galleryimg/30.jpg",
  ],
};

for (let i = 0; i <= images.imgpath.length - 1; i++) {
  document.getElementsByClassName("gallery-item")[i].src = images.imgpath[i];
}
