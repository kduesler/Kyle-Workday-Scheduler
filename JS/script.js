currentHour = dayjs().hour();

for (let i = 9; i <= 18; i++) {
  if (currentHour > i) {
    $(`#hour-${i}`).addClass("past");
  } else if (currentHour < i) {
    $(`#hour-${i}`).addClass("future");
  } else {
    $(`#hour-${i}`).addClass("present");
  }
}

for (let i = 9; i <=18; i++) {
  $(`#txtArea${i}`).val(localStorage.getItem(`${i}:00`));
}

$(document).ready(function () {
  for (let i = 9; i <= 18; i++) {
    $(`.btn${i}`).click(function () {
      let txt = $(`#txtArea${i}`).val();
      localStorage.setItem(`${i}:00`, txt);
    });
  }
});

let currentDate = dayjs().format("dddd, MMMM D, YYYY");
$("#currentDay").text(currentDate);


