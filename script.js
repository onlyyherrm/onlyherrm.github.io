const events = {
    '02-07': {
        greeting: 'Happy Rosee Day mero sanu🌹❤️!',
        imgSrc: 'rose.jpg',
        customMessage: 'Tme aafai rose jasto xeu tme lai k rosee dii rakhnu😭❤️. Paxii sagai vayesi sadhai lyaauxu haita sanu rose 🫶🏻. Iloveeeeyouuuu mero sanu🫂❤️'
    },
    '02-08': {
        greeting: 'Happy Propose Day mero budi💍❤️!',
        imgSrc: 'propose.jpg',
        customMessage: 'Hunata paila nai propose garera tme lai pako ho teini iloveeeeyouuu soo muchhh will you be mine ?😭❤️'
    },
    '02-09': {
        greeting: 'Happy Chocolate Day mero budi🍫❤️!',
        imgSrc: 'chocolate.jpg',
        customMessage: 'Tmeta aafai chocolate jasto sweet xeu chocolate ko sato tme lai nai khana maan lagxa k garnu😭❤️. Aaba vetna aauda chai fix lyaaidinxu chocolate 💋❤️. Iloveeeeyouuuu mero sanu🫂❤️'
    },
    '02-10': {
        greeting: 'Happy Teddy day mero budi🧸❤️!',
        imgSrc: 'teddy.jpg',
        customMessage: 'Aaba paisa vayesi tme lai euta hello kitty chai kinidinxu haita baba na risau💋❤. Iloveeeeeyouuuu mero budi 🫂❤️'
    },
    '02-11': {
        greeting: 'Happy Promise Day, mero sanu! 🫶🏻',
        imgSrc: 'promise.jpg',
        customMessage: 'I promise that I\'ll always be there for you and love you forever, my love. I loveeeeyouuuu so much! 🫂❤️'
    },
    '02-12': {
        greeting: 'Happy Hug Day mero sanu🫂❤️!',
        imgSrc: 'hugg.jpg',
        customMessage: 'Aaja vetna paye ni hunthyo tara k garnu hajurta vyaaisinna kati vayo talai hug garna ni na pako mero budi i misss you 😭❤️. Iloveeeeeyouuuuu mero sanu🫂❤️'
    },
    '02-13': {
        greeting: 'Happy Kiss Day mero budi💋❤️!',
        imgSrc: 'kiss.jpg',
        customMessage: 'Every kiss from you feels like magic, filling my heart with love and warmth. I can\'t wait to shower you with endless kisses and cherish every moment with you🤭! Iloveeeeyouuu soomuchh mero sanu🫂❤️'
    },
    '02-14': {
        greeting: 'Happy Valentine’s Day, mero budi! 🫂❤️',
        imgSrc: 'valentine.jpg',
        customMessage: 'I feel so lucky to have you in my life. You are the reason behind my smile, and without you, I’m incomplete. Every moment with you is so special to me. 😭❤️ I promise to loveeeeyouuu forever and always be there whenever you need me. 🫂❤️ I loveeeeeyouuuu so much, mero budi! 🫂❤️'
    },
    'default': {
        greeting: 'Happy Valentine week mero sanu❤️🫂!',
        imgSrc: 'Photos/rose.jpg',
        customMessage: 'Iloveeeeeyouuuu sooo muchhh mero sanu🫂❤️. I\'m really lucky to have you by my side🫶🏻. You\'re everything I could ever wish for. You make me complete, you make me the happiest person alive😭❤️.'
    }
};

function updateEvent() {
    const currentDate = new Date();
    const formattedDate = `${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    const event = events[formattedDate] || events['default'];

    document.getElementById('greeting').textContent = event.greeting;
    document.getElementById('gf-pic').src = event.imgSrc;

    const messageElement = document.getElementById('custom-message');
    if (!messageElement) {
        const newMessageElement = document.createElement('p');
        newMessageElement.id = 'custom-message';
        newMessageElement.textContent = event.customMessage;
        document.getElementById('app').appendChild(newMessageElement);
    } else {
        messageElement.textContent = event.customMessage;
    }

    console.log('Greeting:', event.greeting);
    console.log('Image Source:', event.imgSrc);
    console.log('Custom Message:', event.customMessage);
}

document.addEventListener('DOMContentLoaded', updateEvent);
