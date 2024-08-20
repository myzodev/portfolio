export type Project = {
    name: string;
    slug: string;
    role: string;
    url: string;
    backgroundColor: string;
};

export type Experience = {
    company: string;
    slug: string;
    role: string;
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
