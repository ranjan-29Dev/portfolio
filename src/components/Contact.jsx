import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
 //template_j76e48c
 //service_kn5xshe
 //lD-8tfJmuIxkoNeWi
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_kn5xshe',
        'template_j76e48c',
        {
          from_name: form.name,
          to_name: "Prem",
          from_email: form.email,
          to_email: "prem29ranjan@gmail.com",
          message: form.message,
        },
        'lD-8tfJmuIxkoNeWi'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");






// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// // ----------------------------
// // HOW TO USE (fill these)
// // ----------------------------
// // For Create-React-App use env var names starting with REACT_APP_
// // For Vite use env var names starting with VITE_
// // Example (.env):
// // REACT_APP_EMAILJS_SERVICE_ID=service_kn5xshe
// // REACT_APP_EMAILJS_TEMPLATE_ID=template_j76e48c
// // REACT_APP_EMAILJS_PUBLIC_KEY=lD-8tfJmuIxkoNeWi

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   // Initialize EmailJS once on mount. This ensures your public key is registered.
//   useEffect(() => {
//     // Try common environment variable names (CRA / Vite) before falling back to a placeholder.
//     const PUBLIC_KEY =
//       process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
//       process.env.VITE_EMAILJS_PUBLIC_KEY ||
//       "YOUR_PUBLIC_KEY_HERE"; // <-- replace or set env var

//     // emailjs.init accepts an options object according to EmailJS docs
//     emailjs.init({ publicKey: PUBLIC_KEY });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Prefer sendForm for forms: it pulls values from the form DOM directly
//     // so the "name" attributes must match the variables used in your EmailJS template.
//     // Example names used here: from_name, from_email, message

//     const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
//     const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";

//     try {
//       const res = await emailjs.sendForm(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         formRef.current,
//         // you can also pass publicKey here instead of calling init
//         { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE" }
//       );

//       console.log("EmailJS response:", res);
//       setLoading(false);
//       alert("Thank you. I will get back to you as soon as possible.");
//       setForm({ from_name: "", from_email: "", message: "" });
//     } catch (error) {
//       console.error("EmailJS error:", error);
//       setLoading(false);
//       alert("Ahh, something went wrong. Check the browser console and Network tab for details.");
//     }
//   };

//   return (
//     <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name</span>
//             {/* NOTE: name must match your EmailJS template variable (e.g. {{from_name}}) */}
//             <input
//               type="text"
//               name="from_name"
//               value={form.from_name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>

//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your email</span>
//             <input
//               type="email"
//               name="from_email"
//               value={form.from_email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>

//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message</span>
//             <textarea
//               rows={7}
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What you want to say?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-60"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

