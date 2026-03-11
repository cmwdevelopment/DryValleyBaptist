"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-green-800 font-semibold">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      {state.status === "error" && (
        <div className="rounded bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700" role="alert">
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={isPending}
          className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dvb-navy disabled:opacity-60"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={isPending}
          className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dvb-navy disabled:opacity-60"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={isPending}
          className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dvb-navy disabled:opacity-60"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-dvb-gold text-white px-6 py-2.5 rounded font-semibold text-sm hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-dvb-gold focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
