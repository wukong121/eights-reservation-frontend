export const getRefreshToken = () => localStorage.getItem("refreshToken");

export const setRefreshToken = (value:string) => {
  localStorage.setItem("refreshToken", value);
}

export const deleteRefreshToken = () => {
  localStorage.removeItem("refreshToken");
}