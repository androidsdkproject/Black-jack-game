/**
* to show logs
*/
export const showLog = async message => {
if (__DEV__) {
    console.log(message);
 }
};
