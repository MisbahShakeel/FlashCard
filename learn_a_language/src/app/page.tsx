'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/components/ui/theme";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FlashCard, languages } from "@/data/flashcards";

export default function FlashcardApp() {
  const [language, setLanguage] = useState("Select Language");
  const [cards, setCards] = useState<FlashCard[]>(languages[language] || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (languages[language]) {
      setCards(languages[language]);
    } else {
      setCards([]);
    }
    setCurrentIndex(0);
    setFlipped(false);
  }, [language]);


  const flipCard = () => setFlipped(!flipped);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setFlipped(false);
  };

  const shuffleCards = () => {
    setCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setFlipped(false);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 ${theme[language]}`}>
      <h1 className="text-3xl font-bold mb-4">Language Flashcards</h1>
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-64 mb-4 text-gray-800">
          <SelectValue>
            {language ? language : "Select Language"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Object.keys(languages).map((lang) => (
            <SelectItem key={lang} value={lang}>{lang}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <motion.div
  className={`w-80 h-48 flex items-center justify-center bg-gray-700 text-white rounded-lg shadow-lg cursor-pointer relative ${theme[language]}`}
  onClick={flipCard}
  animate={{ rotateY: flipped ? 180 : 0 }}
  transition={{ duration: 0.5 }}
  style={{ transformStyle: "preserve-3d" }}
>
  <div className="absolute w-full h-full flex items-center justify-center text-3xl font-bold bg-blue-950" style={{ backfaceVisibility: "hidden" }}>
    {!flipped ? cards[currentIndex]?.word || "No Word" : ""}
  </div>
  <div className="absolute w-full h-full flex items-center justify-center text-3xl font-bold bg-blue-950" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
    {flipped ? cards[currentIndex]?.translation || "No Translation" : ""}
  </div>
</motion.div>


      <div className="mt-4 flex gap-2">
        <Button
          onClick={flipCard}
          className={`border ${theme[language]?.split(" ").find((cls) => cls.startsWith("text-")) || "text-black"}`}
        >
          Flip Card
        </Button>
        <Button
          onClick={nextCard}
          className={`border ${theme[language]?.split(" ").find((cls) => cls.startsWith("text-")) || "text-black"}`}
        >
          Next
        </Button>
        <Button
          onClick={shuffleCards}
          className={`border ${theme[language]?.split(" ").find((cls) => cls.startsWith("text-")) || "text-black"}`}
        >
          Shuffle
        </Button>
      </div>

      <p className="mt-4">Card {currentIndex + 1} / {cards.length}</p>
    </div>
  );
}
