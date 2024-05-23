// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    let modal = document.getElementById("exit-modal");
    let span = document.getElementsByClassName("close-btn")[0];
    let youtubeVideo = document.getElementById("youtube-video");

    function showModal() {
        modal.style.display = "block";
        youtubeVideo.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }

    function hideModal() {
        modal.style.display = "none";
        sessionStorage.setItem('modalClosed', 'true');
        youtubeVideo.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        hideModal();
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            hideModal();
        }
    }

    // Detect mouse leave event
    document.addEventListener('mouseleave', function(event) {
        if (event.clientY <= 0 && !sessionStorage.getItem('modalClosed')) {
            showModal();
        }
    });
});

