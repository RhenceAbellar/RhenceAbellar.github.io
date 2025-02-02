function changeBgColor() {
    const resumeBody = document.getElementsByClassName("resume-container")[0];

    if (resumeBody.style.backgroundColor === 'rgb(208, 200, 222)' || resumeBody.style.backgroundColor === '#d0c8de') {
        resumeBody.style.backgroundColor = '#f5e3eb';
    } else {
        resumeBody.style.backgroundColor = '#d0c8de';
    }
}
