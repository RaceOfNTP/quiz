const base64CorrectAnswer = "bMOqIHRy4bqnbiB0aMOhaSBhbg=="; // Đáp án đúng của câu hỏi 1 ở dạng base64

const answerForm = document.getElementById('answerForm');
const userAnswerInput = document.getElementById('userAnswer');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const nextQuestion = document.getElementById('nextQuestion');
const closeButton = document.getElementById('closeButton');

answerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userAnswer = userAnswerInput.value.trim().toLowerCase();

    // Giải mã đáp án từ base64
    const decodedCorrectAnswer = (() => {
        const decodedData = new Uint8Array(atob(base64CorrectAnswer).split('').map((c) => c.charCodeAt(0)));
        const decoder = new TextDecoder();
        return decoder.decode(decodedData);
    })();

    if (userAnswer === decodedCorrectAnswer.toLowerCase()) {
        alert("Chúc mừng bạn đã trả lời đúng. Bấm OK để xem câu hỏi tiếp theo");
        overlay.style.display = 'flex'; // Hiển thị overlay
        popup.style.display = 'block'; // Hiển thị popup
        nextQuestion.textContent = "Câu hỏi tiếp theo là...";

        // Xử lý khi nút "Đóng" được nhấn
        closeButton.addEventListener('click', function () {
            overlay.style.display = 'none'; // Ẩn overlay
            popup.style.display = 'none'; // Ẩn popup
        });
    } else {
        alert('Câu trả lời không chính xác. Hãy thử lại!');
    }
});
