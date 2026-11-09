function showDua(emotion) {
    let dua = "";
    let source = "";

    if (emotion === "sad") {
        dua = "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ";
        source = "Surah Al-Anbiya, 21:83";
    }
    else if (emotion === "anxious") {
        dua = "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ";
        source = "Surah Al-Anbiya, 21:87";
    }
    else if (emotion === "grateful") {
        dua = "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ";
        source = "Surah An-Naml, 27:19 (excerpt)";
    }
    else if (emotion === "happy") {
        dua = "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ";
        source = "Surah Al-Baqarah, 2:201";
    }

    document.getElementById("dua-result").innerHTML =
        "<h3 dir='rtl'>" + dua + "</h3>" +
        "<p>Source: " + source + "</p>";
}
