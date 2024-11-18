const CLOUD_NAME = "drtzfkbny";
const UPLOAD_PRESET = "neontek-cms-files";

const dropZone = document.getElementById("dropZone");
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");

let ASSET_ID = "";

dropZone.addEventListener("click", () => {
  fileInput.click();
});

["dragover", "dragleave", "dragenter", "drop"].forEach((eventType) => {
  dropZone.addEventListener(eventType, (e) => {
    e.preventDefault();
  });
});

dropZone.addEventListener("dragenter", () => {
  dropZone.classList.add("drag_over");
});
dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("drag_over");
});
dropZone.addEventListener("drop", () => {
  dropZone.classList.remove("drag_over");
});

dropZone.addEventListener("drop", (e) => {
  const files = e.dataTransfer.files;
  if (files.length) {
    fileInput.files = files;
    console.log(files);

    handleFileUpload(fileInput.files[0]);
  }
});

function handleFileUpload(file) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("File uploaded to Cloudinary:", data.secure_url);
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
}

// GET ALL IMAGES FROM SERVER
const imgPreview = document.getElementById("imgCont");

imgPreview.addEventListener("click", () => {
  console.log(ASSET_ID);
});

fetch("http://localhost:3000/api/images")
  .then((response) => response.json())
  .then((images) => {
    const gallery = document.getElementById("mediaImageContainer");
    const imgPreview = document.getElementById("imgCont");
    const imageTitle = document.getElementById("imageTitle");
    const uploadedImage = document.getElementById("mediaImage");
    gallery.innerHTML = "";

    images.forEach((image) => {
      console.log(image);
      ASSET_ID = image.asset_id;
      const mediaPrev = imgPreview.cloneNode(true);
      uploadedImage.setAttribute("src", image.secure_url);
      imageTitle.textContent = image.display_name;
      mediaPrev.style.display = "block";
      gallery.appendChild(mediaPrev);
    });
  })
  .catch((error) => console.error("Error fetching images:", error));

const deleteImage = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("image deleted: ", result);
  } catch (err) {
    console.error("Error deleting image: ", err);
  }
};
