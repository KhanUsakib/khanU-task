let age =20;
isStudent= true;
isSeniorCitizens= true;
price= 800;
if(age<=10){
    console.log("You can move by free");
}else{
    if(!isStudent){
    price= price-price*50/100; 
    console.log("Your fare is "+price);
    }else
        {if(isSeniorCitizens && age>=60){
            price= price-price*15/100;
            console.log("Your fare is "+price);
        }else{

            console.log("Your fare is "+price);
        }
    }
}