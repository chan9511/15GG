import axios from "axios";

export async function signUpApi(data) {
    const response = await axios.post("http://3.34.4.84:8080/api/auth/signUp", data).catch((error) => null)
    if (!response) return null;

    const result = response.data;
    return result;
}

export const ClassicTier = async (param) => {
    const response = await axios.post("http://3.34.4.84:8080/api/classic/tier", param).catch((error) => console.log(error))
    if (!response) return null;

    const result = response.data;
    return result;
}

export const ClassicAnalysis = async (data) => {
    const response = await axios.post("http://3.34.4.84:8080/api/classic/anal", data).catch((error) => console.log(error))
    if (!response) return null;

    const result = response.data;
    return result;
}

export const AramTier = async() => {
    const response = await axios.get("http://3.34.4.84:8080/api/aram/tier").catch((error) => console.log(error))
    if (!response) return null;

    const result = response.data;
    return result;
}

export const AramAnalysis = async(data) => {
    const response = await axios.post("http://3.34.4.84:8080/api/aram/anal", data).catch((error) => console.log(error))
    if (!response) return null;

    const result = response.data;
    return result;
}

export const signInApi = async (data) => {

    const response = await axios.post("http://3.34.4.84:8080/api/auth/signIn", data).catch((error) => console.log(error))
    console.log(response)
    if (!response) return null;

    const result = response.data;
    return result
}

export const widgetOneApi = async (data) => {
    const response = await axios.put("http://3.34.4.84:8080/api/widget/one", data).catch((error) => console.log(error))
    if (!response)  return null;

    const result = response.data;
    return result;

}

export const widgetTwoApi = async (data) => {
    const response = await axios.put("http://3.34.4.84:8080/api/widget/two", data).catch((error) => console.log(error))
    if (!response)  return null;

    const result = response.data;
    return result;

}