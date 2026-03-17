const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

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

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
