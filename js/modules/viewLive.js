let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000, // 2 seconds timer
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`; // Show remaining time in the <b> element
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval); // Clear the interval when the alert closes
  }
}).then((result) => {
  // Handle dismissals after the alert closes
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
