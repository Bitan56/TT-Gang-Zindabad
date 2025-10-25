const scriptURL = "https://script.google.com/macros/s/AKfycbzspZo0SDxgToYhJC2nfbjmEVaNl3KinGKpBOQwaLoKks-U0LTBrTvrxLr6RidzK5GgUQ/exec"; // Replace this

document.getElementById("showcaseForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    roll: document.getElementById("roll").value,
    name: document.getElementById("name").value,
    link: document.getElementById("link").value,
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => {
    document.getElementById("status").textContent = "✅ Submitted successfully!";
    document.getElementById("showcaseForm").reset();
  })
  .catch(err => {
    document.getElementById("status").textContent = "❌ Submission failed.";
    console.error(err);
  });
});