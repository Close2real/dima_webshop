import {atom} from 'jotai';
import User from "@Models/users";
import {atomWithReset} from "jotai/utils";


export const giftIsSentAtom = atomWithReset<boolean>(false);

export const giftIsSentAtomSet = atom(
    null,
    async (get, set, value: boolean) => {
        set(giftIsSentAtom, value)
    }
)

export const loadingAtom = atom(false)
