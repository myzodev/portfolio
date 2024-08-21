export type Project = {
    name: string;
    slug: string;
    role: string;
    url: string;
    backgroundColor: string;
};

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

export type Social = {
    name: string;
    url: string;
};
