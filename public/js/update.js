const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-edit-name").value.trim();
  const description = document.querySelector("#post-edit-desc").value.trim();
  const id = event.target.getAttribute("data-id");
  if (title && description) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create project");
    }
  }
};
document
  .querySelector("#updateBtn")
  .addEventListener("click", updateFormHandler);
