export interface DefaultLink {
    text: string;
    link: string;
    appName?: string;
};

export interface Company {
    id: number;
    link?: string,
    name?: string;
    job?: string,
    description: string;
}

export interface CareerExperience {
    companies: Company[]
};

export interface Skills {
    main: {
        title: string,
        items: string[]
    },
    other: {
        title: string,
        items: string[]
    },
}

export interface Work {
    id: number,
    slug: string,
    name: string,
    image: {
        url: string,
        alt: string
    }
    company: string,
    info: string,
    role: string,
    stack: string[],
    links?: string[]
}