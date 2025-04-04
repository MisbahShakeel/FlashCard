export type FlashCard = {
    word: string;
    translation: string;
}

export type languageData = {
    [key: string]: FlashCard[];
}


export const languages: languageData = {
    arabic: [
        { word: "مرحبا", translation: "Hello" },
        { word: "وداعا", translation: "Goodbye" },
        { word: "كيف حالك؟", translation: "How are you?" },
        { word: "شكرا", translation: "Thank you" },
        { word: "نعم", translation: "Yes" },
        { word: "لا", translation: "No" },
        { word: "من فضلك", translation: "Please" },
        { word: "آسف", translation: "Sorry" },
        { word: "أين؟", translation: "Where?" },
    ],
    turkish: [
      { word: "Merhaba", translation: "Hello" },
      { word: "Hoşça kal", translation: "Goodbye" },
      { word: "Nasılsın?", translation: "How are you?" },
      { word: "Teşekkür ederim", translation: "Thank you" },
      { word: "Evet", translation: "Yes" },
      { word: "Hayır", translation: "No" },
      { word: "Lütfen", translation: "Please" },
      { word: "Üzgünüm", translation: "Sorry" },
      { word: "Nerede?", translation: "Where?" },
      { word: "Günaydın", translation: "Good morning" },
    ],
    german: [
        { word: "Hallo", translation: "Hello" },
        { word: "Auf Wiedersehen", translation: "Goodbye" },
        { word: "Wie geht's?", translation: "How are you?" },
        { word: "Danke", translation: "Thank you" },
        { word: "Ja", translation: "Yes" },
        { word: "Nein", translation: "No" },
        { word: "Bitte", translation: "Please" },
        { word: "Entschuldigung", translation: "Sorry" },
        { word: "Wo?", translation: "Where?" },
        { word: "Guten Morgen", translation: "Good morning" },
    ],
  };
  