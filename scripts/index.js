const initialCards = [
  { name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
  { name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
  { name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
  { name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
  { name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
  { name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},
];

//Profile elements
const profileEditButton = document.querySelector(".profile__edit-button");
const cardModalButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//Form elements
const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__form");
const editModalCloseButton = editModal.querySelector(".modal__close-button");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDesriptionInput = editModal.querySelector("#profile-description-input");

const cardModal = document.querySelector("#add-card-modal");
const cardForm = cardModal.querySelector(".add-card__form");
const cardModalCloseButton = cardModal.querySelector(".modal__close-button");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");

//Card related elements
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
  .querySelector(".card")
  .cloneNode(true);
  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardNameEl.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardLikeButton.addEventListener("click", () => {
  cardLikeButton.classList.toggle("card__like-button_liked");
  });

  cardImage .addEventListener("click", () => {
  openModal(previewModal);
  previewModalImageEl.src = data.link;
  previewModalCaptionEl.textContent = data.name;
  previewModalImageEl.alt = data.name;
  });

  cardDeleteButton.addEventListener("click", () => {
  cardElement.remove();
  });

  return cardElement;
  }

  function openModal(modal){
    modal.classList.add("modal_opened");
  }

  function closeModal(modal){
    modal.classList.remove("modal_opened");
  }

  function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDescription.textContent = editModalDesriptionInput.value;
    closeModal(editModal);
  }

  function handleAddCardSubmit(evt) {
    evt.preventDefault;
    const inputValues = { name: "cardNameInput.value", link: "cardLinkInput.value"};
    const cardElement =getCardElement(inputValues);
    cardsList.prepend(cardElement);
    cardForm.requestFullscreen();
    closeModal(cardModal);
    closeModal(cardForm);
  }

profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDesriptionInput.value = profileDescription.textContent;
  openModal(editModal);
});
editModalCloseButton.addEventListener("click", () => {
  closeModal(editModal);
});

cardModalButton.addEventListener("click", () => {
  openModal(cardModal);
});
cardModalCloseButton.addEventListener("click", () => {
  closeModal(cardModal);
});

editFormElement.addEventListener("submit", handleEditFormSubmit);
cardForm.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach((item) =>{
  const cardEl = getCardElement(item);
  cardsList.append(cardEl);
});