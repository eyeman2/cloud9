import axios from "axios";

const BASEURL = "https://api.betterdoctor.com/2016-03-01/doctors?query=weed&location=40.494831,%20-74.46769,%2050&user_location=40.494831,%20-74.467693&skip=0&limit=10&user_key=" ;
const APIKEY = "144db4638bf7ea5ea76c0d3a06ac7ef1";

const StrainURL = "https://api.otreeba.com/v1/strains?page=7&count=1" ;
const StrainAPIKEY = "&api_key=52175a14461a5c0b13d0208d45974a977cc0d252&limit=20";

export default {
    getGurrentUser: function(){
    return axios.get('/auth/getUser');
},

signUp: (newUser) => {
    return axios.post('/auth/signup', newUser)
},

login: (user) => {
    return axios.post('/auth/login', user)
},

logout: () => {
    return axios.get('/auth/logout');
},

googleSignup: () => {
    return axios.get('/auth/google');
},

search: function(query) {
    return axios.get(BASEURL + APIKEY);
},

strains: function(query) {
    return axios.get(StrainURL + query + StrainAPIKEY);
}
}