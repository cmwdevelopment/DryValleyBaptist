"use server";

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // In a real deployment, send an email or save to a database here.
  // For now we simulate a successful submission.
  return {
    status: "success",
    message: `Thank you, ${name}! Your message has been received. We'll be in touch at ${email} soon.`,
  };
}
