import React, { useState } from "react";

export const Faqsection = ({
  title,
  descrtiption,
  sectionKey,
  isVisible,
  setIsVisible,
}) => {
  return (
    <>
      <h3>{title}</h3>
      {isVisible ? (
        <>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => setIsVisible("")}
          >
            Hide
          </button>
          <p>{descrtiption}</p>
        </>
      ) : (
        <button
          style={{ cursor: "pointer" }}
          onClick={() => setIsVisible(sectionKey)}
        >
          Show
        </button>
      )}
    </>
  );
};

const Faq = () => {
  const [isVisible, setIsVisible] = useState("about");

  return (
    <>
      <Faqsection
        title={"About Instamart"}
        descrtiption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        sectionKey="about"
        isVisible={isVisible === "about"}
        setIsVisible={setIsVisible}
      />

      <Faqsection
        title={"How do I place an order?"}
        descrtiption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        sectionKey="placedOrder"
        isVisible={isVisible === "placedOrder"}
        setIsVisible={setIsVisible}
      />

      <Faqsection
        title={"How do I cancel or modify my order?"}
        descrtiption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        sectionKey="cancelOrder"
        isVisible={isVisible === "cancelOrder"}
        setIsVisible={setIsVisible}
      />
    </>
  );
};

export default Faq;