import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [sender, setSender] = useState({
    email: '',
    message: '',
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setSender({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      })
    }
  }

  const handleChange = (e) => {
    e.persist()
    setSender((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sender),
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <section className='mb-auto'>
      <div>
        <h1 className='pt-16 pb-4 text-center text-4xl font-medium font-serif' >Contact me</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full px-4 mx-auto max-w-lg"
      >
        <div className="mt-10">
          <label htmlFor="email">Email</label>
          <input
            className="block w-full p-2 bg-gray-300 border border-black focus:outline-none placeholder-gray-600"
            id="email"
            type="email"
            onChange={handleChange}
            required
            placeholder="your@email.com"
            value={sender.email}
          />
        </div>
        <div className="mt-10">
          <label htmlFor="message">Message</label>
          <textarea
            className="block w-full p-2 bg-gray-300 border border-black focus:outline-none placeholder-gray-600"
            id="message"
            onChange={handleChange}
            required
            rows={7}
            value={sender.message}
            placeholder="Your message..."
          />
        </div>
        <button
          className="mt-10 py-2 px-4 border-2 border-black text-black uppercase text-sm tracking-24 bg-transparent hover:bg-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
          type="submit"
          disabled={status.submitting}
        >
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
        <div className="mt-4">
          {status.info.error && (
            <div className="error">
              Error: {status.info.msg}
            </div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="success">{status.info.msg}</div>
          )}
        </div>
      </form>
    </section>
  )
}

export default Contact
