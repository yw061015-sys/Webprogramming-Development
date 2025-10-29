document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("reviewList");
  const searchInput = document.getElementById("searchInput");

  function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    return reviews;
  }

  function renderReviews(reviews) {
    listContainer.innerHTML = "";
    reviews.forEach((r) => {
      const card = document.createElement("div");
      card.className = "review-card";
      card.innerHTML = `
        <h3>${r.game}</h3>
        <p>작성자: ${r.author}</p>
        <p>평점: ⭐ ${r.rating}</p>
        <p>${r.content.slice(0, 50)}...</p>
      `;
      listContainer.appendChild(card);
    });
  }

  function searchReviews(keyword) {
    const allReviews = loadReviews();
    const filtered = allReviews.filter(
      (r) =>
        r.game.includes(keyword) ||
        r.author.includes(keyword)
    );
    renderReviews(filtered);
  }

  searchInput.addEventListener("input", (e) => {
    searchReviews(e.target.value);
  });

  renderReviews(loadReviews());
});

