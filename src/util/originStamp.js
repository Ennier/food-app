const CUISINE_STAMPS = [
    { match: /veggie|vegan|buddha bowl|salad/i, code: 'VG' },
    { match: /pizza|carbonara|risotto/i, code: 'IT' },
    { match: /sushi|ramen|miso|teriyaki/i, code: 'JP' },
    { match: /taco|burrito|quesadilla/i, code: 'MX' },
    { match: /curry|tikka|masala/i, code: 'IN' },
    { match: /paella|tapas/i, code: 'ES' },
    { match: /pho|banh mi/i, code: 'VN' },
    { match: /pad thai|tom yum/i, code: 'TH' },
    { match: /steak frites|frites|croissant|baguette|crepe/i, code: 'FR' },
    { match: /burger|mac.*cheese|pancake|sandwich|steak|fries|hot dog/i, code: 'US' },
];

export function originStamp(name) {
    const found = CUISINE_STAMPS.find((entry) => entry.match.test(name));
    return found ? found.code : 'CHF';
}

export function stampRotation(id) {
    const digits = Number(String(id).replace(/\D/g, '')) || 0;
    return ((digits * 37) % 17) - 8;
}

export function ticketNumber(id) {
    const digits = String(id).replace(/\D/g, '');
    return `NO. ${digits.padStart(2, '0')}`;
}
