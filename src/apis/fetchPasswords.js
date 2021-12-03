export const fetchTopPasswords = () => {
  return fetch("https://playground.nordsec.com/v2/worst-psw.json").then(
    (resp) => resp.json()
  );
};
