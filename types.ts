export type Experience = {
    title: string;
    icon: string;
    role?: string;
    year: string | number;
};

export type Song = {
    isPlaying: boolean;
    name: string;
    artistName: string;
    songURL: string;
};

export type Tech = {
    name: string;
    icon: string;
};
