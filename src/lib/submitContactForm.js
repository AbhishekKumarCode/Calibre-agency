// Shared submission logic for the Home page's contact form: inserts the
// lead into Supabase (data you own) and sends a notification via EmailJS.
// Keys are read from Vite env vars (see .env / .env.example) so real
// credentials never get hardcoded into source that reaches GitHub.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function submitContactForm({ name, email, project, projectLabel, budget, budgetLabel, message }) {
  const insertToSupabase = fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ name, email, project, budget, message }),
  })

  const sendEmail = fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        name,
        email,
        phone: '',
        company: '',
        service: projectLabel,
        budget: budgetLabel,
        message,
        time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      },
    }),
  })

  const [dbResult] = await Promise.allSettled([insertToSupabase, sendEmail])
  return dbResult.status === 'fulfilled' && dbResult.value.ok
}
