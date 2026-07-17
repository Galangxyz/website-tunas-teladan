import emailjs from '@emailjs/browser';
import type { ComplaintFormData } from '@/types';

export async function sendComplaint(
  data: ComplaintFormData
) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      category: data.category,
      subject: data.subject,
      message: data.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
}