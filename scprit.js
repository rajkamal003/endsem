// Reusable form handler function
function useForm(formId, onSubmit) {
    const form = document.getElementById(formId);

    // Log input changes
    form.addEventListener("input", (e) => {
        console.log(`[INPUT CHANGE] ${e.target.name}:`, e.target.value);
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = {};
        new FormData(form).forEach((value, key) => {
            data[key] = value;
        });

        console.log("[FORM SUBMIT]", data);
        onSubmit(data);
    });
}

// FORMS USING THE SAME REUSABLE FUNCTION

// Login form
useForm("loginForm", (data) => {
    console.log("Login Submitted:", data);
});

// Registration form
useForm("registerForm", (data) => {
    console.log("Registration Submitted:", data);

    if (data.password !== data.confirmPassword) {
        console.log("❌ Passwords do not match");
    } else {
        console.log("✅ Registration successful (passwords match)");
    }
});
