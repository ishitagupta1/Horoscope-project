// horoscope messages
const fortuneMessages = [
    "Even though everything else may seem a bit chaotic today, your health is completely fine. Try to exercise more today.",
    "Your feelings will change often today. Try to be gentle towards the people that you care about.",
    "With the powerful Venus, the planet that governs love, romance, and passion, this period is extremely fun for you. Be open to meet all kinds of people today.",
    "Travelling will get your mind off of things that have been bothering you. If not far, walk a few miles to feel better.",
    "Since money is something that you have been worried about, it would be best if you didn’t invest or gamble with money today.",
    "Your boss is very happy to see your hard work lately. Financially, you are doing just fine. You have a chance to make more money today.",
    " Your health should always be your priority. Be extra careful and do not lift anything heavy. Drink lots of water today.",
    "Immensely compassionate, your approach is welcoming towards others who are in need of wisdom pieces. But too much of this may blur your vision toward what is more essential in ascending your life to a degree higher than the present.",
    "At times we prefer staying in the mist, rather than coming out the fog and working constructively. Do not ladle out in this gloating, and be even more upright in terms of your health and teeth.",
    "Your decisive energies are sharp and acute. It's a good time to decide onto something important. Your concentration will be rock solid keeping your emotionality tethered to afar end of interference.",
    "Your travel will have a purpose in hindsight.",
    "Searching in for some new work and communication will help ring in luck.",
    "Today is not a good day to start new ventures or new initiatives.",
    "Try and devise a long term plan regarding your health and well-being in general terms, then try and stick to it. Reflect on the decisions that you made in the past, especially the last few weeks and draw some conclusions from that.",
    "Walk up to the library of your house and pluck out your religious text. Get some inspiration and insight from spiritual literature. They would provide you with a few moments of peace, devotion and positive inspiration.",
    "The ideal place for you to visit is going to be Thailand! Visiting it will be like a dream come true.",
    " The numbers 38, 32, 19 and 66 are going to bring you good luck. Wear something red for extra good luck.",
    "With your ruler planet, the Sun, sending out energy, you will feel positive and happy at work today. This will affect your productivity in a good way. Financially, you’re doing alright.",
    "If you are someone who likes to cook or is just starting to learn how to cook, make sure that you use plenty of herbs and spices. Get at least 30 minutes of exercise today.",
    "Today you will feel a lot more balanced and a lot more at peace. Being with family is going to be good for you and your relationship with them.",
    "Today isn’t the best day for you to travel. It may be best to just delay it.",
    "Your lucky colors are pink and orange today. Pay attention as to where you see these colors.",
    "Things are looking up financially due to the fact that you have been more careful with your spending. If you don’t have a savings account – it’s high time that you make one.",
    "Make it your mission to become fully in love with who you are as a person. Recognize that you may have some flaws in your thinking and work on improving.",
    "Don't rush things, a long lasting connection is build over time. Long lasting relationships are tested, but the more stable they are, the easier it is to overcome obstacles.",
    "Short distance travels will bring you the desired benefits both in personal and professional life.",
    "Today is an auspicious and promising day for all kinds of activities, be it personal or professional.",
    "Good things are announced ahead, this day will likely signal a turn for the better in your finances, dampening problems and leaving you some space to breath. Put your worries aside, a change for the better will follow if you push harder on your productivity.",
    "You are feeling a little down lately, low in terms of energy, enthusiasm and will. Changes are announced, they will be for the better in your health and wellness life.",
    "You will experience happiness and excitement all around. You will be positive and optimistic. Original ideas will fill your mind.",
    "There is a new drive inside of you. You are focused on all the right things right now. You want to excel in your career, and make your aspirations come true."
];

document.getElementById('horoscope-forms').addEventListener('submit',handleSubmitForm)
    
function handleSubmitForm(e){
    e.preventDefault(); // prevent the form from submitting
    const month = document.getElementById('month').value; // .value gets the value of the input
    const newdt = new Date(month+"-1");
    const monthName = newdt.toLocaleString('default', { month: 'long' }, {month:'short'});

let sign = "";
if(monthName === "January"){
    sign = "♑Capricorn";
} else if(monthName ==="February"){
    sign = "♒Aquarius";
} else if(monthName === "March"){
    sign = "♓Pisces";
} else if(monthName === "April"){
    sign = "♈Aries";
} else if(monthName === "May"){
    sign = "♉Taurus";
} else if(monthName === "June"){
    sign = "♊Gemini";
} else if(monthName === "July"){
    sign = "♋Cancer";
} else if(monthName === "August"){
    sign = "♌Leo";
} else if(monthName === "September"){
    sign = "♍Virgo"; 
} else if(monthName === "October"){
    sign = "♎Libra";
} else if(monthName === "November"){
    sign = "♏Scorpio";       
} else {
    sign = "♐Sagittarius";
}

const randomMessage = fortuneMessages[Math.floor(Math.random()*fortuneMessages.length)];
document.getElementById('horoscope').innerHTML = `<p>${sign}:${randomMessage}</p>`
}

