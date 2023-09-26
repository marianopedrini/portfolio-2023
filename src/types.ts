export interface DefaultLink {
    text: string;
    link: string;
    appName?: string;
};

export interface Company {
    id: number;
    link?: string,
    name?: string;
    description: string;
}

export interface CarreerExperience {
    period: string;
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
    slug: string,
    name: string,
    image: {
        urlBig: string,
        url: string,
        alt: string
    }
    company: string,
    info: string,
    role: string,
    stack: string[],
    links?: string[]
}