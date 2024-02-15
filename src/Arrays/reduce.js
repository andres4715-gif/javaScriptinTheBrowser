// checking. 

import { family } from "../../data/data.js";
import { setting } from "../../data/settings.js";

const names = family.map(a => a.firstName); 
console.log(names);

const moreMoney = family.map(a => {
    a.savings += 20;
    return a;  
})
console.log(moreMoney);


// settings
const changeStatusEnableSettings = setting => {
      setting.value = "false";
      return setting
}

const filterEnableSetting = setting => {
    return setting.value === "true";
}

const changeProperty = setting.filter(filterEnableSetting).map(changeStatusEnableSettings);
console.log(changeProperty);
