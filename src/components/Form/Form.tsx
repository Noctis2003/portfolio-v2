import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'

import {  useState } from 'react'
import validator from 'validator'

export function Form() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `From: ${email}\n\n${message}` }),
      })

      const data = await res.json()
      if (data.success) {
        toast.success('Email successfully sent!', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        })
        setSubmitted(true)
      } else {
        toast.error('Failed to send email')
      }
    } catch (error) {
      toast.error('Error sending email')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            verifyEmail(e.target.value)
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          disabled={submitting || !validEmail || !message}
        >
          {submitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
