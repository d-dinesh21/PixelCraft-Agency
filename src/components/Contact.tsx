"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/validations";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);

    setSubmitted(true);

    reset();
  };

  return (
    <section
      id="contact"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Contact Us
        </h2>

        <p className="mb-12 text-center text-slate-400">
          Have a project in mind? Let's discuss it.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h3 className="text-2xl font-semibold text-green-400">
              Thank You!
            </h3>

            <p className="mt-4 text-slate-300">
              Your message has been submitted successfully.
              We will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 outline-none"
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 outline-none"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                {...register("message")}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 outline-none"
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 py-4 font-semibold transition hover:bg-cyan-400"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}