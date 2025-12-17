import viewPage from "/appHealth/backend/control/viewPage.js";
import BookmarksView from "/appHealth/backend/control/bookmarksView.js";
import { toggleBookmarkIcon } from "/appHealth/backend/control/viewPage.js";
import * as model from "/appHealth/backend/model/control.js";
import * as controlPage from "/appHealth/backend/control/controlPage.js";
import { syncBookmarkIcons } from "/appHealth/backend/control/viewPage.js";
import { sendSms } from "/appHealth/backend/model/sendSms.js";
const controlBookmarks = function (list, btn) {
  const action = model.toggleBookmarks(list);
  toggleBookmarkIcon(btn, action);

  if (action === "added") {
    BookmarksView.add(list);
  } else {
    BookmarksView.remove(list.id);
  }

  model.btnPatient();

  document.getElementById("contactForm").addEventListener("submit-btn", (e) => 
    { e.preventDefault();
    sendSms(e.target); }
)};

const init = function (bookmark) {
  controlPage.init();

  model.loadBookmarks();
  syncBookmarkIcons(model.state.bookmarks);

  viewPage.addHandlerAddBookmark(controlBookmarks);
  model.state.bookmarks.forEach((bookmark) => {
    BookmarksView.add(bookmark);
  });
  model.btnPatient();
};
init();