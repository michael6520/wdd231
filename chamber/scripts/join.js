const mappings = {
    np: "npModal",
    bronze: "bronzeModal",
    silver: "silverModal",
    gold: "goldModal"
};

Object.entries(mappings).forEach(([buttonId, modalId]) => {
    const button = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);

    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modal.addEventListener("click", (e) => {
        modal.style.display = "none";
    });
});

const today = new Date();
const date = today.toLocaleDateString('en-US');
document.getElementById('timestamp').value = date;