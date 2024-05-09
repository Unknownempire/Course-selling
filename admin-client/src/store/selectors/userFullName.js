import { userState } from "../atoms/user";
import {selector} from "recoil";

export const userFullNameState = selector({
  key: 'userFullNameState',
  get: ({get}) => {
    const state = get(userState);

    return state.userFullName;
  },
});
