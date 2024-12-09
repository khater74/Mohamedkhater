// Toggle Light/Dark Theme
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Toggle Fun Fact Visibility
const funFactBtn = document.getElementById("fun-fact-btn");
const funFact = document.getElementById("fun-fact");

funFactBtn.addEventListener("click", () => {
    funFact.classList.toggle("hidden");
});

// Add New Skill to the List
const addSkillBtn = document.getElementById("add-skill-btn");
const newSkillInput = document.getElementById("new-skill");
const skillsList = document.getElementById("skills-list");

addSkillBtn.addEventListener("click", () => {
    const skill = newSkillInput.value.trim();
    if (skill) {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
        newSkillInput.value = "";
    }
});
