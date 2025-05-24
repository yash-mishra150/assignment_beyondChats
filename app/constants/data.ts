export const data = [
    {
        id: 1,
        name: "Louis Easton",
        clinetCompany: "Github",
        unreadcount: 2,
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lastMessageTime: new Date(2025, 4, 23, 14, 30), // May 23, 2025, 2:30 PM
    },
    {
        id: 2,
        name: "Sarah",
        clinetCompany: "Microsoft",
        unreadcount: 0,
        lastMessage: "Thanks for the update! I'll review the changes and get back to you tomorrow.",
        lastMessageTime: new Date(2025, 4, 23, 13, 15), // May 23, 2025, 1:15 PM
    },
    {
        id: 3,
        name: "Michael",
        clinetCompany: "Adobe",
        unreadcount: 5,
        lastMessage: "Can we schedule a call to discuss the new design requirements?",
        lastMessageTime: new Date(2025, 4, 23, 10, 45), // May 23, 2025, 10:45 AM
    },
    {
        id: 4,
        name: "Emily",
        clinetCompany: "Figma",
        unreadcount: 1,
        lastMessage: "I've shared the updated mockups with you. Let me know what you think!",
        lastMessageTime: new Date(2025, 4, 22, 16, 20), // May 22, 2025, 4:20 PM
    },
    {
        id: 5,
        name: "David",
        clinetCompany: "Google",
        unreadcount: 0,
        lastMessage: "The API integration is complete. We can proceed with testing.",
        lastMessageTime: new Date(2025, 4, 22, 9, 10), // May 22, 2025, 9:10 AM
    }
];


export type dataType = {
    id: number;
    name: string;
    clinetCompany: string;
    unreadcount: number;
    lastMessage: string;
    lastMessageTime: Date;
}