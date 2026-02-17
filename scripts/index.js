/* CARDS */
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg`,
  },
  {
    name: "Lago Louise",
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg`,
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg`,
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg`,
  },
  {
    name: "Lago di Braies",
    link: `https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg`,
  },
];



/* DOCUMENT VARIABLES */
//PROFILE VARS
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");

//EDIT PROFILE VARS
const editProfileForm = editProfileModal.querySelector("#edit-profile-form");
const editProfileBtnClose = editProfileModal.querySelector(".popup__close");
const editProfileTitle = editProfileModal.querySelector(
  ".popup__input_type_name",
);
const editProfileDescription = editProfileModal.querySelector(
  ".popup__input_type_description",
);
const editProfileSubmitBtn = editProfileModal.querySelector("popup__button");

//CARD VARS
const cardTemplate = document
  .querySelector("#card__template")
  .content.querySelector(".card");
const cardListContainer = document.querySelector(".cards__list");
const addCardBtn = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#new-card-popup");
const closeAddCardBtn = addCardModal.querySelector(".popup__close");
/* EVENT LISTENERS */

//BUTTONS
editProfileBtn.addEventListener("click", function () {
  handleOpenEditModal();
});

editProfileBtnClose.addEventListener("click", function () {
  closeModal(editProfileModal);
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

addCardBtn.addEventListener("click", openModal);

closeAddCardBtn.addEventListener("click", closeModal);

/* MODAL FUNCTIONS */

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  const inputValues = {
    title: profileTitle.textContent,
    description: profileDescription.textContent,
  };
  editProfileTitle.value = inputValues.title;
  editProfileDescription.value = inputValues.description;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfileModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const inputValues = {
    title: editProfileTitle.value,
    description: editProfileDescription.value,
  };
  profileTitle.textContent = inputValues.title;
  profileDescription.textContent = inputValues.description;
  closeModal(editProfileModal);
}

function getCardElement(name, link) {
  // también aplica los parámetros predeterminados
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = name ? name : "Sin titulo";
  cardImage.src = link ? link : "./images/placeholder.jpg";
  cardImage.alt = name ? name : "Sin titulo";

  return cardElement;
}

function renderCard(name, link, cardListContainer) {
  const cardEl = getCardElement(name, link);
  cardListContainer.append(cardEl);
}

function handleCardSubmit() {}


initialCards.forEach((element) => {
  renderCard(element.name, element.link, cardListContainer);
  console.log(element.name);
});