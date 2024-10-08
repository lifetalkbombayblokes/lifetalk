"use client";
import React, { useState, FormEvent } from "react";
import { submitForm } from "./submitForm";

type StatusMessage = {
  type: "success" | "error";
  text: string;
};

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState<StatusMessage | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    tel?: string;
  }>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);

    const result = await submitForm(formData);

    if (result.success) {
      setStatusMessage({ type: "success", text: result.message });
    } else {
      setStatusMessage({ type: "error", text: result.message });
      setFieldErrors(result.fieldErrors || {});
    }
    setIsSubmitting(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="fname"
            type="text"
            placeholder="First Name *"
            className="w-full p-3 border border-gray-300 rounded-[20px]"
            required
            pattern="^[A-Za-z\s]+$"
            title="First name should contain only letters and spaces."
          />
          <input
            name="lname"
            type="text"
            placeholder="Last Name *"
            className="w-full p-3 border border-gray-300 rounded-[20px]"
            required
            pattern="^[A-Za-z\s]+$"
            title="Last name should contain only letters and spaces."
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email *"
              className={`w-full p-3 border ${
                fieldErrors.email ? "border-red-500" : "border-gray-300"
              } rounded-[20px]`}
              required
              pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address."
              onChange={(e) => {
                const email = e.target.value;
                const blockedDomains = [
                  "gmail.com",
                  "yahoo.com",
                  "ymail.com",
                  "hotmail.com",
                ];
                const emailDomain = email.split("@")[1];
                if (blockedDomains.includes(emailDomain)) {
                  setFieldErrors((prev) => ({
                    ...prev,
                    email: "This email domain is not allowed.",
                  }));
                } else {
                  setFieldErrors((prev) => ({ ...prev, email: "" }));
                }
              }}
            />

            {fieldErrors.email && (
              <p className="text-red-500">
                {" "}
                <br /> {fieldErrors.email}
              </p>
            )}
          </div>
          <div>
            <input
              name="tel"
              type="tel"
              placeholder="Phone Number *"
              className={`w-full p-3 border ${
                fieldErrors.tel ? "border-red-500" : "border-gray-300"
              } rounded-[20px]`}
              required
              pattern="^[0-9+\-\(\)\s]+$"
              title="Phone number can contain digits, spaces, and characters like +, -, (, )."
            />
          </div>

          {fieldErrors.tel && (
            <p className="text-red-500">
              {" "}
              <br /> {fieldErrors.tel}
            </p>
          )}
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="des"
              type="text"
              placeholder="Designation *"
              className="w-full p-3 border border-gray-300 rounded-[20px]"
              required
              pattern="^[A-Za-z\s.,'-]+$"
              title="Designation can contain letters, spaces, and characters like ., '-."
            />
          </div>
          <input
            name="com"
            type="text"
            placeholder="Company Name *"
            className="w-full p-3 border border-gray-300 rounded-[20px]"
            required
            pattern="^[A-Za-z\s.,'-]+$"
            title="Company name can contain letters, spaces, and characters like ., '-."
          />
        </div>

        {/* Text Area */}
        <div>
          <textarea
            name="mess"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-[20px]"
          ></textarea>
        </div>

        {/* Submit Button */}
        {/* <div className="col-span-1 flex">
                    <div className="flex items-center gap-2">
                        <p className="text-primary font-semibold">Send Inquiry</p>
                        <button
                            type="submit"
                            aria-label="send inquiry"
                            className="btn btn-circle btn-primary hover:animate-pulse"
                            disabled={isSubmitting}
                        >
                            <svg
                                width="27"
                                height="16"
                                viewBox="0 0 27 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div> */}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting || !!fieldErrors.email || !!fieldErrors.tel}
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
      {statusMessage && (
        <div
          className={`mt-4 p-3 border rounded-[20px] ${
            statusMessage.type === "success"
              ? "border-green-500 bg-green-100 text-green-800"
              : "border-red-500 bg-red-100 text-red-800"
          }`}
        >
          {statusMessage.text}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
