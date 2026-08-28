```javascript
function showSection(id) {

    document.querySelectorAll(".card").forEach(card => {
        card.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* AGE */

function checkAge() {

    const age = Number(document.getElementById("age").value);
    const message = document.getElementById("ageMessage");

    if (age > 15) {

        message.innerHTML =
            "We will get back to you shortly... ⏳<br>tik tik tik...";

        setTimeout(() => {
            showSection("phoneSection");
        }, 1800);

    } else {

        message.innerHTML =
            "Sir/Mam, please try to do better 😂";
    }
}


/* PHONE */

function checkPhone() {

    const phone = Number(document.getElementById("phone").value);

    if (phone === 974) {

        document.getElementById("phoneMessage").innerHTML =
            "Are you Pallab, the HERO? 🦸‍♂️";

        setTimeout(() => {
            showSection("pallabSection");
        }, 1200);

    }

    else if (phone === 800) {

        document.getElementById("phoneMessage").innerHTML =
            "So you are Aura Siri, the Motku Bhai 😂";

        setTimeout(() => {
            showSection("pallabSection");
        }, 1500);

    }

    else if (phone === 869) {

        showSection("soumiSection");
    }

    else if (phone === 731) {

        document.getElementById("phoneMessage").innerHTML =
            "Somumi's bhabi is it? 👀";

    }

    else {

        document.getElementById("phoneMessage").innerHTML =
            "Please give a valid number 😭";
    }
}


/* PALLAB CHOICE */

function savePallab() {

    document.getElementById("pallabMessage").innerHTML =
        "As you chose to save the HERO, Pallab grabbed Soumi's hand too and saved her! YAYYY ❤️";

    setTimeout(() => {
        showSection("readySection");
    }, 2200);
}


function saveSoumi() {

    document.getElementById("pallabMessage").innerHTML =
        "Soumi ke bachaili toh? 😭<br>Ja bhablam bon hois! 😂";
}


/* READY */

function continueJourney() {

    showSection("rakhiSection");

    createConfetti();
}


function notReady() {

    document.getElementById("readyMessage").innerHTML =
        "Too late 😈 You are already part of the journey!";
}


/* PALLAB GIFTS */

function gift(option) {

    const result = document.getElementById("giftResult");

    const gifts = {

        1:
        "🎁 YOU WON! You just got ₹100 from Pallab! 💸❤️",

        2:
        "🍰 You have to feed Pallab a FINE cake! 😂",

        3:
        "☕ You have to give Pallab a Coffee 99 treat! 😌",

        4:
        "💝 You have to gift Pallab a Mio Amore treat! 😈",

        5:
        "🥟 You have to feed Pallab from Appayan Momo! 😂"

    };

    result.innerHTML = gifts[option];

    createConfetti();
}


/* SOUMI NUMBER */

function checkSoumi() {

    const number =
        Number(document.getElementById("soumiNumber").value);

    const message =
        document.getElementById("soumiMessage");

    if (number === 923) {

        message.innerHTML =
            "YES! Now I'm sure it is Soumi, the Meghdoot lover 😂❤️";

        setTimeout(() => {
            showSection("drowningSection");
        }, 1500);

    }

    else if (number === 993) {

        message.innerHTML =
            "Why are you doing this? Why not Meghdoot's number? 😭";

        setTimeout(() => {
            showSection("drowningSection");
        }, 1500);

    }

    else {

        message.innerHTML =
            "Hmm... suspicious number 👀";
    }
}


/* SOUMI CHOICE */

function saveAuroshree() {

    document.getElementById("drowningMessage").innerHTML =
        "Meghdoot is no more 💀<br>You are officially the Meghdoot killer 😭";
}


function saveMeghdoot() {

    document.getElementById("drowningMessage").innerHTML =
        "Auroshree may still live... because the power of LOB is still alive! ❤️<br><br>NOW you saved BOTH! 🎉";

    setTimeout(() => {
        showSection("finalSoumiSection");
        createConfetti();
    }, 2500);
}


/* SOUMI GIFTS */

function soumiGift(option) {

    const result =
        document.getElementById("soumiGiftResult");

    const gifts = {

        1:
        "💸 So you have to gift me ₹25 😂",

        2:
        "🎁 YOU are getting a ₹50 gift! ❤️",

        3:
        "💰 You have to give me ₹11 😈",

        4:
        "💸 You have to gift me ₹20 😂"

    };

    result.innerHTML = gifts[option];

    createConfetti();
}


/* CONFETTI */

function createConfetti() {

    for (let i = 0; i < 30; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            ["🌸", "✨", "💗", "🎉", "🪢"][
                Math.floor(Math.random() * 5)
            ];

        confetti.style.position = "fixed";
        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 2000 + 1500;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}
```
