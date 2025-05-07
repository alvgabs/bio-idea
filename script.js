// Editar Foto
const editPhotoBtn = document.getElementById("editPhotoBtn");
const photoInput = document.getElementById("photoInput");
const profileImage = document.getElementById("profileImage");

editPhotoBtn.addEventListener("click", () => {
  photoInput.click();
});

photoInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Editar Bio
const editBioBtn = document.getElementById("editBioBtn");
const bioText = document.getElementById("bioText");
const bioInput = document.getElementById("bioInput");

editBioBtn.addEventListener("click", () => {
  bioInput.style.display = "block";
  bioInput.value = bioText.textContent;
  bioText.style.display = "none";
});

bioInput.addEventListener("blur", () => {
  bioText.textContent = bioInput.value;
  bioText.style.display = "block";
  bioInput.style.display = "none";
});

// Tabs de Profissões e Hobbies
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// Busca nas abas
const searchProfessions = document.getElementById("searchProfessions");
const professionList = document.getElementById("professionList");

searchProfessions.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  Array.from(professionList.children).forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
});

const searchHobbies = document.getElementById("searchHobbies");
const hobbyList = document.getElementById("hobbyList");

searchHobbies.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  Array.from(hobbyList.children).forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
});
