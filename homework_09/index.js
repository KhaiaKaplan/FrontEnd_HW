// Задание 1:
const getElementByIndex = (array, index) => array[index];

const numbers = [10, 20, 30, 40];
console.log(getElementByIndex(numbers, 2)); 

// Задание 2:

function decodeWeather(code){
    let description;

    switch (code){

        case "SQ":
            description = "шквал";
            break;
          case "PO":
            description = "пыльный вихрь";
            break;
          case "FC":
            description = "торнадо";
            break;
          case "BR":
            description = "дымка (видимость от 1 до 9 км)";
            break;
          case "HZ":
            description = "мгла (видимость менее 10 км)";
            break;
          case "FU":
            description = "дым (видимость менее 10 км)";
            break;
          case "DS":
            description = "пыльная буря (видимость менее 10 км)";
            break;
          case "SS":
            description = "песчаная буря (видимость менее 10 км)";
            break;
          default:
            description = "Неизвестный код погоды";
        }

        return description;
    }

    let weatherCode = "SS";
    let weatherDescription= decodeWeather(weatherCode);
    console.log(weatherDescription);
    



