import { mriResults } from "/appHealth/frontend/items/items.js"

export const init = function () {
  const leftContainer = document.querySelector(".column-left");
  const rightContainer = document.querySelector(".column-right");

  if (!leftContainer || !rightContainer) return;

  const uniqueResults = [];
  const seenTitles = new Set();

  mriResults.forEach((result) => {
    if (!seenTitles.has(result.title)) {
      seenTitles.add(result.title);
      uniqueResults.push(result);
    }
  });

  const leftColumn = uniqueResults.slice(0, 3);
  const rightColumn = uniqueResults.slice(3, 6);

  [leftColumn, rightColumn].forEach((group, index) => {
    const target = index === 0 ? leftContainer : rightContainer;

    group.forEach((result) => {
      const markup = `

                        <div class="mri_each" data-id="${result.id}">
                       <img src="${result.image}" alt="MRI 1" class="mri-results">
                         <div class="container2">
                          <div class="culumn">
    <p class="column__title"> ${result.title}</p>
    <p class="column__day"> ${result.day}</p>
</div>
    <button class="btn--round btn--bookmark">
  <img src="/appHealth/public/assets/icons/save-instagram (4).png" alt="Bookmark icon" id="bookmarkIcon">
</button>
 </div>

 </div>
  `;
      target.insertAdjacentHTML("beforeend", markup);
    });
  });
};
