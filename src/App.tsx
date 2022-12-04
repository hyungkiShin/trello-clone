import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  // useRecoilState 는 atom 의 값을 변경할 수 있고 결과로 Array 를 주는데
  // 첫번째는 atom 의 값을, 두번째는 atom 의 값을 변경하는 함수를 반환한다.
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  }
  return (
    <div>
     <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes"></input>
     <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours"></input>
    </div>
  );
}

export default App;