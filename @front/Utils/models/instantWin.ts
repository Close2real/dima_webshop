interface Prize {
    title: string,
    price: number,
    description: string
}

export interface InstantWinObject {
    id: number;
    title: string;
    description: string;
    img: string;
    completed: boolean;
    necessaryPoints: number;
    prizeType: string;
    prize: Prize;
}

export interface InstantWinHistory {
    contestId?: number;
    title?: string;
    email?: string;
    result: boolean;
    redeemed: boolean;
    prizeType: string;
}

export interface InstantWinProps {
    instantWinObject: InstantWinObject
}