function checkAnswer(answer) {
  const result = document.getElementById("result");
  if (answer === 4) {
    result.textContent = "✅ Correct!";
  } else {
    result.textContent = "❌ Try again.";
  }
}