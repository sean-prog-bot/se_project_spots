const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseBtn = profileEditModal.querySelector(".modal__close-btn");
const editProfileForm = profileEditModal.querySelector(".modal__form");
const editProfileNameInput = profileEditModal.querySelector(
  "#profile-name-input",
);

const editProfileDescriptionInput = profileEditModal.querySelector(
  "#profile-description-input",
);

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const editNewPostForm = newPostModal.querySelector(".modal__form");
const editNewPostLinkInput = newPostModal.querySelector("#card-image-input");
const editNewPostCaptionInput = newPostModal.querySelector(
  "#card-caption-input",
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

profileEditBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(profileEditModal);
});

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

profileEditCloseBtn.addEventListener("click", function () {
  closeModal(profileEditModal);
});

newPostBtn.addEventListener("click", function () {
  editNewPostLinkInput.value = "";
  editNewPostCaptionInput.value = "";
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(profileEditModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleEditNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(editNewPostLinkInput.value, editNewPostCaptionInput.value);
  console.log("submitting");
  closeModal(newPostModal);
}

editNewPostForm.addEventListener("submit", handleEditNewPostSubmit);
