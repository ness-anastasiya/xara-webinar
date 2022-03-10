function toggleItem(id) {
    const item = document.getElementById(`item_${id}`);
    item?.classList.toggle('accordion_item_content_active');

    const arrow = document.getElementById(`arrow_${id}`);
    arrow?.classList.toggle('arrow_button_active');
}

function sendForm() {
    alert("Form data saved")
}