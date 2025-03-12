import keycloak from 'keycloak-js';
let initOptions = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
}
let kc = new keycloak(initOptions);
kc.init({
  onLoad: 'login-required', 
  checkLoginIframe: true,
  pkceMethod: 'S256'
}).then((auth)=>{
  if(!auth){
    window.location.reload();
  }
  else{
    console.log("User Logged In"),
    console.log("auth: ", auth)
    console.log("Key Cloak: ",kc)
    console.log("Access Token: ", kc.token)
    
    kc.onTokenExpired = ()=>{
      console.log('Token Expired...')
    }
  }
}, ()=>{
  console.log("Authentication Failed")
})

export {kc}
