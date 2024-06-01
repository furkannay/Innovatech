import React, { useState, useEffect } from "react";

const Title = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 100; // varsayılan gecikme süresi

  useEffect(() => {
    let timeout;

    const CompanyName = "Innovatech  "; // CompanyName'i buraya taşıdık

    if (currentIndex < CompanyName.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + CompanyName[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else {
      setCurrentIndex(0); // Metin yazılması tamamlandığında currentIndex'i sıfırla
      setCurrentText(""); // Metni sıfırla, böylece baştan başlar
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay]);

  return <h1>{currentText}</h1>;
};

export default Title;
