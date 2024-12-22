export const useMutate = () => {
  let WHITELIST = ["POST", "UPDATE", "PATCH"];
  const fetchData = async ({ url = "", method = "GET", payload = {} }) => {
    let isMethodPOST = WHITELIST.includes(method) && {
      body: JSON.stringify(payload),
    };
    try {
      let response = await fetch(url, {
        ...isMethodPOST,
        headers: {
          "Content-Type": "application/json",
        },
        method,
      });
      let result = await response?.json();
      return result;
    } catch (error) {
      return error;
    }
  };

  return { function: { fetchData } };
};
