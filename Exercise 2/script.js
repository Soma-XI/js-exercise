let height=170;
const userAge=30;
console.log(" answer on part 1");
console.log(" height variable is " , height );
console.log(" user Age variable is " , userAge );

let car = {
    carName : "Toyota",
    carModel : "Rav4",
    carYear : 2019 ,
    carColor : "red"
    };
     
     
    console.log(car);
    car.carMilage = 150;
    console.log(car);
    car.carYear = 2018 ;
    console.log(car);
    delete car.carModel;
    console.log(car);
    console.log(car.carYear);

    let cars = [
        {
            car1Name : "Toyota",
            car1Model : "Rav4",
            car1Year : 2019 ,
            car1Color : "red"
            },
       
            {
                car2Name : "Ford",
                car2Model : "Bronco",
                car2Year : 2018 ,
                car2Color : "green"
                }
    ];
     
    console.log(cars);
    console.log(cars[0].car1Name);
    console.log(cars.length);
     
    cars.push ( {
        car1Name : "Honda",
        car1Model : "CRV",
        car1Year : 2020 ,
        car1Color : "blue"
        })
     
        console.log(cars);
        console.log(cars.length);