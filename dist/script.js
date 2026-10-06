'use strict';

// 실제 강의 주소가 준비되면 여기에 입력하세요.
const COURSE_URL = '';
const enrollButton = document.querySelector('#enroll-button');
const courseDialog = document.querySelector('#course-dialog');

enrollButton.addEventListener('click', () => {
  if (COURSE_URL) {
    window.location.assign(COURSE_URL);
    return;
  }
  courseDialog.showModal();
});

courseDialog.querySelectorAll('.close-dialog, .dialog-confirm').forEach((button) => {
  button.addEventListener('click', () => courseDialog.close());
});

courseDialog.addEventListener('click', (event) => {
  if (event.target !== courseDialog) return;
  const bounds = courseDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    courseDialog.close();
  }
});
