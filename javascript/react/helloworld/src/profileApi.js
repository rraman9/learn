const ENDPOINT = 'http://localhost:8080/profiles';

export function getProfiles() {
    return fetch(ENDPOINT)
        .then(res => res.json())
}