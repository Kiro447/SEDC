let dayOfWeek = prompt("Enter a day of weeknd").toLowerCase();
console.log(dayOfWeek);
switch (dayOfWeek) {
  case "ponedelnik":
  case "petok":
  case "sreda":
    console.log(`vo ${dayOfWeek} imame predavanje`);
    break;
  case "vtornik":
  case "cetvrtok":
    console.log(`vo ${dayOfWeek} nemame predavanje`);
    break;
  case "sabota":
  case "nedela":
    console.log("Its weeknd");
    break;
  default:
    console.log("Enter a valid number");
    break;
}
