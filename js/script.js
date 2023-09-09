const profileImage = document.getElementById('profile_img');
const messageBox = document.getElementById('message_box');

profileImage.addEventListener('mouseover', (event) => {
  messageBox.classList.remove('display-none');
  messageBox.classList.add('message-box');
});

profileImage.addEventListener('mouseout', (event) => {
  messageBox.classList.add('display-none');
})