export const navsLeft = [
    {
        id: 1,
        name: "ABOUT",
        path: "#about"
    },
    {
        id: 2,
        name: "HOMES",
        path: "#homes"
    },
];

export const navsRight = [
    {
        id: 4,
        name: "LOCATION",
        path: "#location"
    },
    {
        id: 5,
        name: "CONTACT",
        path: "#contact-us"
    },
];

// Keep old navs for backward compatibility if needed
export const navs = [...navsLeft, ...navsRight];