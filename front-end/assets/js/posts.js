fetch("../assets/test/test-post.json")
  .then((res) => res.json())
  .then((data) => {
    const postsContainer = document.getElementById("post_list");

    data.posts.forEach((post) => {
      const postTemp = document.getElementById("post");
      const postSummery = document.getElementById("post-summery");
      const postImage = document.getElementById("post-image");

      const clonedPost = postTemp.cloneNode(true);
      postSummery.textContent = post.description;
      postImage.setAttribute("src", post.image);
      clonedPost.style.display = "block";

      postsContainer.appendChild(clonedPost);
    });
  })

  .catch((err) => console.error("Error fetching JSON: ", err));
