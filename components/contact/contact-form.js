import { useState, useEffect } from 'react';

import Notification from '../ui/notification';

import classes from './contact-form.module.css';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    header: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message) || 'Something went wrong.';
  }
}

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    // possibly add client side validation here

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        message: enteredMessage,
        name: enteredName,
      });
      setRequestStatus('success');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notificationData;

  if (requestStatus === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestData === 'success') {
    notificationData = {
      status: 'success',
      title: 'Success',
      message: 'Message sent successfully',
    };
  }

  if (requestData === 'error') {
    notificationData = {
      status: 'error',
      title: 'Error',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={sendMessageHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message </label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          message={notificationData.message}
          title={notificationData.title}
        />
      )}
    </section>
  );
};

export default ContactForm;
