document.getElementById("reviewForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const game = document.getElementById("gameName").value;
  const author = document.getElementById("author").value;
  const rating = document.getElementById("rating").value;
  const content = document.getElementById("content").value;

  const newReview = { game, author, rating, content };

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  alert("리뷰가 저장되었습니다!");
  location.href = "index.html";
});
