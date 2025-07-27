import React from "react";
import PageTitle from "./PageTitle";

export default function About() {
  const h3Style = "text-lg font-semibold text-primary dark:text-light mb-2";
  const pStyle = "text-gray-600 dark:text-lighter";

  return (
    <div className="max-w-[1152px] min-h-[852px] mx-auto px-6 py-8 font-primary">
      <PageTitle title="About Us" />

      {/* About Us Content */}
      <p className="leading-6 mb-8 text-gray-600 dark:text-lighter">
        <span className="text-lg font-semibold text-primary dark:text-light">
          Eazy Sticker
        </span>{" "}
        is a personal full-stack project where I built a complete
        e-commerce-style platform for showcasing and selling stickers. I
        developed the entire application, including the backend (Java + Spring
        Boot) and frontend (React.js), with features like dynamic product
        listing, user interaction, and responsive design. While the artwork was
        sourced externally, the focus of the project was to design and build a
        scalable, real-world application from scratch to sharpen my full-stack
        skills.
      </p>

      {/* Our Story Section */}
      <h2 className="text-2xl leading-[32px] font-bold text-primary dark:text-light mt-12 mb-6">
        Our Story
      </h2>
      <p className={pStyle}>
        I’ve always been passionate about merging technology with creative
        products. Working on eazy sticker allowed me to dive deeper into
        building modern web applications, experiment with new tools, and create
        a real platform that reflects my curiosity and technical skills. It’s
        projects like these that keep me excited about software development and
        continuous learning.
      </p>

      {/* Meet the Founder Section */}
      <h2 className="text-2xl leading-[32px] font-bold text-primary dark:text-light mt-12 mb-6">
        Meet the Founder
      </h2>
      <p className={pStyle}>
        Hi, I’m Bhanudas Nivrutti Rane from Pune, India. I’m a software
        developer with over 3 years of experience working with technologies like
        Java, Spring Boot, Stencil JS, and cloud platforms like AWS and Azure.
        Through projects like eazy sticker, I enjoy combining technical skills
        with creativity to build products that are both functional and engaging.
        I’m always exploring full-stack development, and I built this website
        using Java for the backend and React.js and Stencil JS for the frontend
        as part of my ongoing journey as a developer. Thanks for visiting and
        being part of this adventure!
      </p>

      {/* Optional: LinkedIn link */}
      <p className={pStyle + " mt-4"}>
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/bhanudasrane"
          className="text-primary dark:text-light underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
