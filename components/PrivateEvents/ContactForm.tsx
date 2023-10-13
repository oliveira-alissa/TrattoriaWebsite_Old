import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import classNames from "classnames";

import { Modal } from "../Modal/Modal";
// import { CalendarSVG } from "../UI/CalendarSVG";
// import { Calendar } from "react-date-range";
// import format from "date-fns/format";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file

const isEmpty = (value: string) => value.trim() === "";
const isTenChars = (value: string) => value.trim().length >= 10;

const isEmailValid = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

type ContactInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  eventType: string;
  guestCount: string;
  date: any;
  touched: {
    firstName: boolean;
    lastName: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
    eventType: boolean;
    guestCount: boolean;
    date: boolean;
  };
  validity: {
    firstName: boolean;
    lastName: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
    eventType: boolean;
    guestCount: boolean;
    date: boolean;
  };
};

const initialFormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  eventType: "",
  guestCount: "",
  date: "",
  touched: {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    message: false,
    eventType: false,
    guestCount: false,
    date: false,
  },
  validity: {
    firstName: true,
    lastName: true,
    phone: true,
    email: true,
    message: true,
    eventType: true,
    guestCount: true,
    date: true,
  },
};

export const ContactForm = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  // const [currDate, setCurrDate] = useState<string>("");

  // const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const [form, setForm] = useState<ContactInput>(initialFormState);
  const [error, setError] = useState<boolean>(false);

  // const refOne = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   setCurrDate(format(new Date(), "MM/dd/yyyy"));
  //   document.addEventListener("keydown", hideOnEscape, true);
  //   document.addEventListener("click", hideOnClickOutside, true);
  // }, []);

  // const hideOnEscape = (e: any) => {
  //   if (e.key === "Escape") {
  //     setShowCalendar(false);
  //   }
  // };

  // const hideOnClickOutside = (e: any) => {
  //   if (refOne.current && !refOne?.current?.contains(e.target)) {
  //     setShowCalendar(false);
  //   }
  // };

  const onCloseModalHandler = () => {
    setShowModal(false);
  };
  const inputStyle = classNames(
    "placeholder:text-white border-b-2 border-b-white bg-transparent m-3 p-4 w-60 text-white shadow-lg md:w-25vw"
  );

  const dateInputStyle = classNames(
    "placeholder:text-white h-12 bg-icon-calendar bg-transparent bg-no-repeat border-b-2 border-white m-3 pr-2 pl-16 lg:pl-32 p-3 w-60 shadow-lg md:w-25vw"
  );

  const textareaStyle = classNames(
    "placeholder:text-white bg-transparent border-b-2 border-white m-3 p-2 w-60 h-32 shadow-lg md:w-25vw"
  );

  // const dateHandler = (date: any) => {
  //   setCurrDate(format(date, "MM/dd/yyyy"));
  //   setForm((current) => ({
  //     ...current,
  //     date: currDate,
  //     touched: {
  //       ...current.touched,
  //       date: true,
  //     },
  //   }));
  // };

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    const firstNameisValid = !isEmpty(form.firstName);
    const lastNameisValid = !isEmpty(form.lastName);
    const phoneNumberisValid = isTenChars(form.phone);
    const messageIsValid = !isEmpty(form.message);
    const eventTypeIsValid = !isEmpty(form.eventType);
    const guestCountIsValid = !isEmpty(form.guestCount);
    const dateIsValid = !isEmpty(form.date);
    const emailIsValid = isEmailValid(form.email);

    setForm((current) => ({
      ...current,
      validity: {
        firstName: firstNameisValid,
        lastName: lastNameisValid,
        phone: phoneNumberisValid,
        message: messageIsValid,
        email: emailIsValid,
        eventType: eventTypeIsValid,
        guestCount: guestCountIsValid,
        date: dateIsValid,
      },
    }));

    const formIsValid =
      firstNameisValid &&
      lastNameisValid &&
      phoneNumberisValid &&
      emailIsValid &&
      eventTypeIsValid &&
      guestCountIsValid &&
      dateIsValid;

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        "contact_service",
        "template_n66gdm8",
        e.target,
        "user_kwfk7unP7jS9DOSbszb09"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.message);
        }
      );
    setForm(initialFormState);

    setShowModal(true);
  };

  return (
    <section
      className="flex flex-col md:flex-row pt-20 bg-header text-white md:m-8 md:rounded-3xl md:w-75vw md:mx-auto"
      id="Contact"
    >
      <div className="flex flex-col md:w-50vw">
        <h1 className="md:text-3xl pb-2 mb-2 md:ml-6 self-center text-xl tracking-widest uppercase border-b-2 w-fit border-b-lightGrayThree">
          Contact Us
        </h1>
        <p className="px-6 pt-4 leading-8 text-center  md:text-md md:leading-10">
          From birthday parties to social events, Il Cafone extends its services
          by turning it's dining room into your private event space. We have a
          variety of prefixed party menus for you to choose from. If there are
          any food or dietery restrictions please let us know so we can make the
          proper arrangments. Please leave us a short detailed message regarding
          your upcoming event.
        </p>
      </div>

      <form
        onSubmit={submitFormHandler}
        className="flex flex-col items-center w-3/4 md:w-50vw py-8 mx-auto mt-2 rounded-xl"
      >
        <div className="flex flex-col">
          <label htmlFor="fname" />
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                firstName: e.target.value,
                touched: {
                  ...current.touched,
                  firstName: true,
                },
              }))
            }
            value={form.firstName}
          />
          {!form.validity.firstName && (
            <span
              className={
                !form.validity.firstName && form.touched.firstName
                  ? "hidden"
                  : "visible self-center"
              }
            >
              Please enter your first name.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="lname" />

          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                lastName: e.target.value,
                touched: {
                  ...current.touched,
                  lastName: true,
                },
              }))
            }
            value={form.lastName}
          />
          {!form.validity.lastName && (
            <span
              className={
                !form.validity.lastName && form.touched.lastName
                  ? "hidden"
                  : "visible self-center"
              }
            >
              Please enter your last name.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                email: e.target.value,
                touched: {
                  ...current.touched,
                  email: true,
                },
              }))
            }
            value={form.email}
          />
          {!form.validity.email && (
            <span
              className={
                !form.validity.email && form.touched.email
                  ? "hidden"
                  : "visible self-center"
              }
            >
              Please enter your email address.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" />

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                phone: e.target.value,
                touched: {
                  ...current.touched,
                  phone: true,
                },
              }))
            }
            value={form.phone}
          />
          {!form.validity.phone && (
            <span
              className={
                !form.validity.phone && form.touched.phone
                  ? "hidden"
                  : "visible self-center"
              }
            >
              Please enter your phone number.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="eventType" />

          <input
            type="text"
            id="eventType"
            name="eventType"
            placeholder="Event Type"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                eventType: e.target.value,
                touched: {
                  ...current.touched,
                  eventType: true,
                },
              }))
            }
            value={form.eventType}
          />
          {!form.validity.eventType && (
            <span
              className={
                !form.validity.eventType && form.touched.eventType
                  ? "hidden"
                  : "visible self-center"
              }
            >
              Please describe your event type.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="guestCount" />

          <input
            type="text"
            id="guestCount"
            name="guestCount"
            placeholder="Number of Guests"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                guestCount: e.target.value,
                touched: {
                  ...current.touched,
                  guestCount: true,
                },
              }))
            }
            value={form.guestCount}
          />
          {!form.validity.guestCount && (
            <span
              className={
                !form.validity.guestCount && form.touched.guestCount
                  ? "hidden"
                  : "visible self-center"
              }
            >
              Please enter the amount of guests.
            </span>
          )}
        </div>
        <div className="relative flex flex-col items-center">
          <label htmlFor="date" />
          <input
            type="date"
            id="date"
            name="date"
            className={dateInputStyle}
            placeholder="Select a date"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                date: e.target.value,
                touched: {
                  ...current.touched,
                  date: true,
                },
              }))
            }
            value={form.date}
          />

          {!form.validity.date && (
            <span
              className={
                !form.validity.date && form.touched.date
                  ? "hidden"
                  : "visible self-center"
              }
            >
              Please select a date for your event.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <textarea
            className={textareaStyle}
            id="message"
            name="message"
            placeholder="Is there any additional information you would like to add?"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                message: e.target.value,
                touched: {
                  ...current.touched,
                  message: true,
                },
              }))
            }
            value={form.message}
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 mt-4 tracking-widest uppercase bg-white text-black rounded-lg shadow-lg"
        >
          Submit
        </button>
      </form>
      <Modal show={showModal} onClose={onCloseModalHandler}>
        Thank you! We have receieved your message. We will be in contact within
        24 hours!
      </Modal>
    </section>
  );
};
