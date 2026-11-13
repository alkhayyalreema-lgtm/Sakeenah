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

var picture = "images/" + emotion + ".png";

document.getElementById("emotion-image").src = picture;
document.getElementById("emotion-image").style.display = "block";

}



function showAdhkarChecklist() {

    var checklist = document.getElementById("adhkar-checklist");

    if (checklist.style.display == "block") {
        checklist.style.display = "none";
        document.getElementById("adhkar-arrow").innerHTML = "▼";
        return;
    }

    var result = "<h3>My Daily Remembrance</h3>";
    var adhkarName = "";

    for (var i = 1; i <= 4; i++) {

        if (i == 1) {
            adhkarName = "Morning Adhkar";
        }
        else if (i == 2) {
            adhkarName = "Evening Adhkar";
        }
        else if (i == 3) {
            adhkarName = "Before Sleeping";
        }
        else {
            adhkarName = "After Prayer";
        }

        result += "<p><input type='checkbox' class='adhkar-checkbox'> "
            + adhkarName + "</p>";
    }

    checklist.innerHTML = result;
    checklist.style.borderColor = "#6B7350";
    checklist.style.display = "block";
    document.getElementById("adhkar-arrow").innerHTML = "▲";
}

