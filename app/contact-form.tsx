"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "submitting" | "succeeded" | "failed";

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmissionState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null) as { errors?: Array<{ message?: string }> } | null;
        const message = result?.errors?.map((error) => error.message).filter(Boolean).join(" ");
        throw new Error(message || "Your message could not be sent.");
      }

      setSubmissionState("succeeded");
      form.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Your message could not be sent.");
      setSubmissionState("failed");
    }
  }

  if (submissionState === "succeeded") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>
        <h3>Message sent</h3>
        <p>Thanks for reaching out. You’ll receive a reply at the email address you provided.</p>
      </div>
    );
  }

  return (
    <form
      className="support-form"
      action="https://formspree.io/f/mwleopzr"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="CompressLite support request" />
      <input type="text" name="_gotcha" className="form-honeypot" tabIndex={-1} autoComplete="off" />

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="support-name">Name</label>
          <input id="support-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="support-email">Email</label>
          <input id="support-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="support-topic">What can we help with?</label>
        <select id="support-topic" name="topic" defaultValue="" required>
          <option value="" disabled>Select a topic</option>
          <option value="compression">Compression question</option>
          <option value="saving">Saving or replacing photos</option>
          <option value="permissions">Photo permissions</option>
          <option value="bug">Bug report</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="support-device">iPhone model <span>Optional</span></label>
          <input id="support-device" name="iphone_model" type="text" placeholder="e.g. iPhone 17 Pro" />
        </div>
        <div className="form-field">
          <label htmlFor="support-ios">iOS version <span>Optional</span></label>
          <input id="support-ios" name="ios_version" type="text" placeholder="e.g. iOS 26.3" />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="support-message">Message</label>
        <textarea
          id="support-message"
          name="message"
          rows={7}
          maxLength={4000}
          placeholder="Tell us what happened and where you got stuck."
          required
        />
      </div>

      <p className="form-note">
        Please don’t include private photos or sensitive information. By sending this form,
        you agree that Formspree will process your submission as described in the{" "}
        <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noreferrer">Formspree Privacy Policy</a>.
      </p>

      <button className="button button-primary form-submit" type="submit" disabled={submissionState === "submitting"}>
        {submissionState === "submitting" ? "Sending…" : "Send message"}
      </button>
      {submissionState === "failed" && (
        <p className="form-error" role="alert">
          {errorMessage} Please check your connection and try again.
        </p>
      )}
    </form>
  );
}
