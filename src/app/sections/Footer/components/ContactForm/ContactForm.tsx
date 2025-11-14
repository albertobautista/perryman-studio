"use client";

import React from "react";
import { useForm, FieldError } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(4, "Invalid phone"),
  country: z.string().min(2, "Required"),
  foundUs: z.string().min(1, "Required"),
  message: z.string().min(10, "Please add a bit more detail"),
});

type ContactFormType = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormType) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        w-full max-w-7xl
        rounded-3xl
        px-12 py-18 md:py-18
        bg-white
        shadow-[0_0_50px_rgba(0,0,0,0.15)]
      "
    >
      {/* GRID CAMPOS PRINCIPALES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        <Field label="Name" error={errors.name}>
          <input
            {...register("name")}
            placeholder="John Smith"
            className="input-footer font-neue text-xl"
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            {...register("email")}
            placeholder="johnsmith@gmail.com"
            className="input-footer font-neue text-xl"
          />
        </Field>

        <Field label="Phone number" error={errors.phone}>
          <input
            {...register("phone")}
            placeholder="+1..."
            className="input-footer font-neue text-xl"
          />
        </Field>

        <Field label="Country" error={errors.country}>
          <input
            {...register("country")}
            placeholder="United States"
            className="input-footer font-neue text-xl"
          />
        </Field>
      </div>

      {/* HOW DID YOU FIND US */}
      <div className="mt-12">
        <Field label="How did you find us?" error={errors.foundUs}>
          <select
            {...register("foundUs")}
            className="input-footer bg-transparent"
          >
            <option value="">Select</option>
            <option value="google">Google</option>
            <option value="instagram">Instagram</option>
            <option value="referral">Referral</option>
            <option value="behance">Behance / Dribbble</option>
            <option value="other">Other</option>
          </select>
        </Field>
      </div>

      {/* MESSAGE */}
      <div className="mt-12">
        <Field label="What’s your project about?" error={errors.message}>
          <textarea
            {...register("message")}
            placeholder="Tell us more…"
            className="
              w-full border-b border-gray-300 pb-3 text-gray-700
              h-40 resize-none focus:outline-none
              focus:border-gray-900
              font-neue text-xl
            "
          />
        </Field>
      </div>

      {/* LINEA + BOTÓN */}
      <div className="mt-14 border-t border-gray-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-gray-800 text-xl font-neue font-medium">
          Let’s make your project happen.
        </p>

        <button
          disabled={isSubmitting}
          className="
            self-end md:self-auto
            rounded-full border border-gray-900 px-22 py-3
            text-sm font-medium
            bg-gray-900 hover:bg-gray-700 cursor-pointer
            transition-colors
            disabled:opacity-40
          "
        >
          {isSubmitting ? "Sending…" : "Send"}
        </button>
      </div>

      {isSubmitSuccessful && (
        <p className="mt-6 text-green-600 text-lg font-neue">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: FieldError;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xl uppercase font-neue tracking-[0.16em] text-black mb-2">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-red-500  text-xl mt-1 font-neue">{error.message}</p>
      )}
    </div>
  );
}
