"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Validate the form data
  if (!name || !email || !message) {
    throw new Error("All fields are required")
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format")
  }

  // In a real application, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with email service (SendGrid, Resend, etc.)

  console.log("Contact form submission:", { name, email, message })

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}
