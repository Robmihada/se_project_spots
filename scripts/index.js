const initialCards = [
  { name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
  { name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
  { name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
  { name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
  { name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
  { name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},
];

const profileEditButton = document.querySelector(".profile__edit-button");
const cardModalButton = document.querySelector(".profile__new-post-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__form");
const editModalCloseButton = editModal.querySelector(".modal__close-button");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDesriptionInput = editModal.querySelector("#profile-description-input");

const cardModal = document.querySelector("#add-card-modal");
const cardModalCloseButton = cardModal.querySelector(".modal__close-button");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
function getCardElement(data) {
const cardElement = cardTemplate.content
.querySelector(".card")
.cloneNode(true);

const cardNameEl = cardElement.querySelector(".card__title");
const cardImage = cardElement.querySelector(".card__image");

cardNameEl.textContent = data.name;
cardImage.src = data.link;
cardImage.alt = data.name;

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

initialCards.forEach((item) =>{
  const cardEl = getCardElement(item);
  cardsList.append(cardEl);
});