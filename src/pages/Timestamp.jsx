import React, { useEffect, useState } from 'react'
import ComingSoon from './ComingSoon'

const Timestamp = () => {
  const [unixtime, setUnixtime] = useState(0)
  const [inputDate, setInputDate] = useState({
    year: 2024, month: 10, day:10, hour:10, minute:10, second: 0, milsec: 0
  })

  useEffect(() => {
    setUnixtime((prev) => timestampToUnixtime());
  }, [])
  const timestampToUnixtime = (inputDate) => {
    if (!inputDate || !inputDate.year ||
      !inputDate.month ||
      !inputDate.day ||
      !inputDate.hour ||
      !inputDate.minute ||
      !inputDate.second ||
      !inputDate.milsec
    ) {
      return Math.floor(new Date().getTime() / 1000);
    } else {
      return Math.floor(new Date(
        inputDate.year,
        inputDate.month,
        inputDate.day,
        inputDate.hour,
        inputDate.minute,
        inputDate.second,
        inputDate.milsec,
      ).getTime() / 1000);
    }
  }
  const handleInputDateOnClick = () => {
    const tmpDate = new Date(
        inputDate.year,
        inputDate.month,
        inputDate.day,
        inputDate.hour,
        inputDate.minute,
        inputDate.second,
        inputDate.milsec,
    );
    console.log('--s0200--', tmpDate)
    setUnixtime(() => Math.floor(tmpDate.getTime() / 1000));
  }
  const handleInputDateOnChange = (e) => {
    const newData = { [e.target.name]: e.target.value};
    setInputDate((prev) => ({
      ...prev,
      ...newData
    }));
  }
  return (
    <div>
      <input type='number' name='year' value={inputDate.year} onChange={handleInputDateOnChange}/>年
      <input type='number' name='month' value={inputDate.month} onChange={handleInputDateOnChange}/>月
      <input type='number' name='day' value={inputDate.day} onChange={handleInputDateOnChange}></input>日
      <input type='number' name='hour' value={inputDate.hour} onChange={handleInputDateOnChange}></input>時
      <input type='number' name='minute' value={inputDate.minute} onChange={handleInputDateOnChange}></input>分
      <input type='number' name='second' value={inputDate.second} onChange={handleInputDateOnChange}></input>秒
      <input type='number' name='second' value={inputDate.milsec} onChange={handleInputDateOnChange}></input>ミリ秒
      <button onClick={handleInputDateOnClick}>計算</button>
      <h2>
      Timestamp -> unixtime
      </h2>
      {unixtime}
    </div>
  )
}

export default Timestamp