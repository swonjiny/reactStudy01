import client from "./client";
import axios from "axios";

export const adminSetup = (userId, userName, userPw) => client.post("/users/setup", {
    userId, userName, userPw
})

export const signIn = (userId, password) => client.post(`/api/authenticate?username=${userId}&password=${password}`)

export const fetchCodeGroup = (groupCode) => client.get(`/codegroups/${groupCode}`);

export const fetchCodeGroupList = () => client.get("/codegroups");

export const modifyCodeGroup = (groupCode, groupName) => client.put(`/codegroups/${groupCode}`, { groupName });
export const writeCodeGroup = (groupCode, groupName) => client.post("/codegroups", { groupCode, groupName });
export const removeCodeGroup = (groupCode) => client.delete(`/codegroups/${groupCode}`);

