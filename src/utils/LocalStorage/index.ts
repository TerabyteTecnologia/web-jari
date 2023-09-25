export const addCasasLocalStorage = (data: any) => {
    localStorage.setItem("localStorageDataCasa", JSON.stringify(data));
  };
  
  export const deleteCasasLocalStorage = () => {
    localStorage.setItem("localStorageDataCasa", "");
  };
  
  export const getFromLocalStorage = (value: string) => {
    const storedData = localStorage.getItem(value);
    if (storedData) {
      try {
        return JSON.parse(storedData);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
    return null;
  };
  
  export const saveTokenLocalStorage = (token: string) => {
    localStorage.setItem('@app-jari:token-1.0.0', token);
  };
  
  export const deleteTokenLocalStorage = () => {
    localStorage.setItem('@app-jari:token-1.0.0', "");
  };
  
  export const getTokenLocalStorage = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('@app-jari:token-1.0.0');
    }
  };