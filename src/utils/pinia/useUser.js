import { set } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUser = defineStore("user", () => {
    // 初始化用户对象，设置默认值为空字符串或0
    const user = ref({
        id: 0,
        username: "",
        account: "",
        avatar: "",
    });
    // 设置用户信息的方法
    const setUser = (val) => {
        // 只更新指定的属性
        user.value.id = val.id;
        user.value.username = val.username;
        user.value.account = val.account;
        user.value.avatar = val.avatar;
        set
    };
    const setUserName = (val) => {
        user.value.username = val;
    };
    const setAvatar = (val) => {
        user.value.avatar = val;
    };
    // 获取用户信息的方法
    const getUser = () => user.value;
    return { user, setUser, getUser,setAvatar,setUserName};
},
{
    persist:{
        key:"user",
        paths:["user"],
        storage:localStorage
    }
});