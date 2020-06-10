
let premiumFlag=false;

export default function  IsPremiumUser (){
    console.log(premiumFlag)
    return premiumFlag ;
}

export function SetPremiumUser(newFlag){
    premiumFlag = newFlag;
    console.log(premiumFlag);
}