const credential = {
    password: ".+",
    name: ".+",
};

const contact = {
    email: "(^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$|^(?![\\s\\S]))", 
    name: ".+"
}

const location = {
    name: ".+"
}

const asset = {
    name: ".+"
}

const backup = {
    name: ".+"
}

export default {
    asset,
    credential,
    location,
    backup,
    contact
};
