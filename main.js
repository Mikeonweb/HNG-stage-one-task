
  const dayTime = () => {
    const Day = document.querySelector('.day');
    const Time = document.querySelector('.time');
    
    const now = new Date();
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    Day.textContent = dayOfWeek;
    
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = now.getUTCMilliseconds().toString().padStart(3, '0');
    const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    Time.textContent = timeString;
  }

  dayTime();
  setInterval(dayTime, 1);

