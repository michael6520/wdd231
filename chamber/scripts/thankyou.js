const params = new URLSearchParams(window.location.search);

const fields = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    mobile: 'phoneNumber',
    organization: 'organization',
    timestamp: 'date'
};

for (const key in fields) {
    const el = document.getElementById(fields[key]);
    el.textContent = decodeURIComponent(params.get(key).replace(/\+/g, ' '));
}