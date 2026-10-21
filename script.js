const textInput = document.getElementById("textInput");
const textColorPicker = document.getElementById("textColorPicker");
const bgColorPicker = document.getElementById("bgColorPicker");
const fontFamilySelect = document.getElementById("fontFamilySelect");
const modeToggleBtn = document.getElementById("modeToggleBtn");

// 1. Change Text Color
textColorPicker.addEventListener("input", (e) => {
    textInput.style.color = e.target.value;
});

// 2. Change Background Color of Text Area
bgColorPicker.addEventListener("input", (e) => {
    textInput.style.backgroundColor = e.target.value;
});

// 3. Change Font Family
fontFamilySelect.addEventListener("change", (e) => {
    textInput.style.fontFamily = e.target.value;
});

// 4. Change Font Size
let currentFontSize = 16;
function changeFontSize(action) {
    if (action === 'increase') {
        currentFontSize += 2;
    } else if (action === 'decrease' && currentFontSize > 10) {
        currentFontSize -= 2;
    }
    textInput.style.fontSize = currentFontSize + "px";
}

// 5. Bold and Italic
function toggleStyle(styleType) {
    if (styleType === 'bold') {
        textInput.style.fontWeight = textInput.style.fontWeight === 'bold' ? 'normal' : 'bold';
    } else if (styleType === 'italic') {
        textInput.style.fontStyle = textInput.style.fontStyle === 'italic' ? 'normal' : 'italic';
    }
}

// 6. Text Decoration
function setDecoration(decoration) {
    textInput.style.textDecoration = decoration;
}

// 7. Text Alignment
function setAlignment(alignment) {
    textInput.style.textAlign = alignment;
}

// 8. Uppercase and Lowercase
function setCase(caseType) {
    if (caseType === 'uppercase') {
        textInput.value = textInput.value.toUpperCase();
    } else if (caseType === 'lowercase') {
        textInput.value = textInput.value.toLowerCase();
    }
}

// 9. Dark and Light Mode Toggle
modeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 10. Reset Button
function resetStyles() {
    textInput.style = "";
    textInput.value = "Change my style using the controls below!";
    currentFontSize = 16;
    textColorPicker.value = "#333333";
    bgColorPicker.value = "#ffffff";
    fontFamilySelect.value = "Arial, sans-serif";
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
    }
}