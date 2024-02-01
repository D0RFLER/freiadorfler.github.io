/*Her skal vi have taget fat i vores funktion og få den til at bruge den event til at gøre noget*/

/* ---- Ældre metode (Old School JAVE script) -------------------*/

function changeColor(event) {
/*Function giver systemet besked på der er en funktion der skal bruge en event for at ske
Hvis funktionen IKKE er i bruug er det en svagere lyseblå farve, end hvis den er i brug*/

    document.documentElement.style.setProperty('--color-primary', event.target.value);
        /* 1 = find dokument, 2 = hvad det er på dokumentet, 3 = det en style, 4 = det er en property*/
        /* ' ' siger at dette er et navn på noget den skal finde */
        /* Fortæller at det er eventet som den skal vælge sin farve fra - aka, color pickeren */

}