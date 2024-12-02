export function initViewLive() {
    const viewLiveButtons = document.querySelectorAll(".view-live");

    viewLiveButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor redirection
            const url = button.getAttribute("data-url");

            Swal.fire({
                title: "Loading...",
                html: "Please wait while we prepare the live view.",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
                timer: 2000,
                timerProgressBar: true,
            }).then(() => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You will be redirected to the live view page.",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Yes, proceed!",
                    cancelButtonText: "No, stay here",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = url;
                    } else {
                        console.log("User canceled the redirection.");
                    }
                });
            });
        });
    });
}
