import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },

  // recoil 에서 selector 를 사용할 때는 set 을 사용할 수 없다.
  // set: ({ set }, newValue) => {
  set: ({ set }, newValue) => {
    // set(minuteState, 10);
    const miutes = Number(newValue) * 60;
    // set 함수는 첫번째 인자에 현재 값 을 넣고 두번째 인자에 변경할 값을 넣어주면 된다.
    set(minuteState, miutes);
  }
});
