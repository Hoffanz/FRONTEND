document.getElementById("cv-section").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "/FRONTEND/CV-2024.pdf";
  link.download = "CV-2024.pdf";
  link.click();
});
