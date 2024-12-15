let isEditing = false;

let originalName = document.querySelector(".name"); 
const editButton = document.createElement("button");
editButton.innerText = "edit";
originalName.after(editButton); 

let inputElement = null;

editButton.addEventListener("click", () => {
    if (!isEditing) {
        inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.value = originalName.innerText; 
        originalName.replaceWith(inputElement);
        editButton.innerText = "save";
    } 
    
    else {
        const addNewName = inputElement.value.trim();
        if (addNewName) {
            const newName = document.createElement("h1");
            newName.className = "name";
            newName.innerText = addNewName;
            inputElement.replaceWith(newName);
            originalName = newName; 
        }
        editButton.innerText = "edit";
    }
    isEditing = !isEditing; 
});


const musicButton = document.createElement("button");
musicButton.innerText = "add";
musicButton.classList.add("add-music"); 

const favoriteMusicSection = document.querySelector(".favorite-music");
favoriteMusicSection.after(musicButton);

let musicForm = null;

musicButton.addEventListener("click", () => {
    
    if (musicForm) return;
    musicForm = document.createElement("div");
    musicForm.innerHTML = `
        <input type="text" id="musicLink" placeholder="Music Link" />
        <input type="text" id="musicName" placeholder="Music Name" />
        <button id="submitMusic">Submit</button>
    `;
    musicForm.style.marginTop = "10px";
    musicButton.after(musicForm);

    document.getElementById("submitMusic").addEventListener("click", () => {
        const musicLink = document.getElementById("musicLink").value.trim();
        const musicName = document.getElementById("musicName").value.trim();

        if (!musicLink || !musicName) {
            alert("You need to fill in both music name and link!");
            return;
        }

        const musicSection = document.querySelector(".favorite-music");
        const musicItem = document.createElement("div");
        musicItem.className = "music-item";
        musicItem.innerHTML = `
            <a href="${musicLink}" target="_blank">
                <img src="spotify.png" alt="Music Logo" class="music-logo" style="width: 50px; height: 50px;">
                <div class="song-title">${musicName}</div>
            </a>
        `;
        musicSection.appendChild(musicItem);


        musicForm.remove();
        musicForm = null;
    });
});

