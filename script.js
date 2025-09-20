let Input = document.getElementById("Date");
let BtnCalculate = document.getElementById("Calculate");
let p = document.createElement("p");
Input.max = new Date().toISOString().split("T")[0];

BtnCalculate.addEventListener("click", () => {
  let Birthday = new Date(Input.value);
  let SelctedDate = Birthday.getDate();
  let SelctedMonth = Birthday.getMonth() + 1;
  let SelctedYear = Birthday.getFullYear();

  //   console.log(SelctedDate, SelctedMonth, SelctedYear);

  let TodayDate = new Date();
  let TodayDay = TodayDate.getDate();
  let TodayMonth = TodayDate.getMonth() + 1;
  let TodayYear = TodayDate.getFullYear();

  //   console.log(TodayDay, TodayMonth, TodayYear);

  let DayOlder, MonthOlder, YearOlder;

  YearOlder = TodayYear - SelctedYear;

  if (TodayMonth >= SelctedMonth) {
    MonthOlder = TodayMonth - SelctedMonth;
  } else {
    SelctedYear--;
    MonthOlder = 12 + TodayMonth - SelctedMonth;
  }
  if (TodayDay >= SelctedDate) {
    DayOlder = TodayDay - SelctedDate;
  } else {
    DayOlder = SelctedDate;
  }
  //   console.log(SelctedDate, TodayDate);

  //   console.log(DayOlder, MonthOlder, YearOlder);
});
