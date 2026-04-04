/**
 * Sends the contact form via Web3Forms (https://web3forms.com).
 * Create an access key and set the notification email to sergiu.cojocari2002@gmail.com in the dashboard.
 */

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error(
      'Contact form is not configured. Create a file named .env in the project root (copy from .env.example), set VITE_WEB3FORMS_ACCESS_KEY=your_key, then restart npm run dev.',
    );
  }

  const subject =
    payload.subject.trim() ||
    `Website contact from ${payload.name.trim() || 'visitor'}`;

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: payload.name.trim(),
      email: payload.email.trim(),
      replyto: payload.email.trim(),
      message: payload.message.trim(),
    }),
  });

  let data: Web3FormsResponse;
  try {
    data = (await res.json()) as Web3FormsResponse;
  } catch {
    throw new Error('Invalid response from the form service. Please try again.');
  }

  if (!data.success) {
    throw new Error(data.message || 'Could not send your message. Please try again.');
  }
}
