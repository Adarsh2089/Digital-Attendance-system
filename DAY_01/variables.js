const accountId = 24213 // Const can'nt be change later

let accountEmail = "adarsh.mca23@google.com"

var accountPassword = "12345"

accountCity = "NEW DELHI" // We can Declare it without any Type but Avoid This method

let accountState // IF not assigned any Value it will print undefined 

// accountId = 2 // not allowed as declared as const


console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
This Will print in a Table form like -
   
      Index     Values
        0      24213
        1      adarsh.mca23@gmail.com
        2      12345
        3      NEW DELHI
        4      undefined
        
*/