import checkRecord from './checkRecord';

const liff = window.liff //eslint-disable-line
export const LineLogIn = async () => { //eslint-disable-line
    let uname = null;
    let uid = null;
    let statusmsg = null;
    let pictureUrl = null;

    await liff.init({ liffId: '1657277327-eMoBPVay' })
    .catch((err) => { console.log(err.code, err.message); });
    if (liff.isInClient()) {
        const profile = await liff.getProfile();
        console.log('Client');

        uname = profile.displayName;
        uid = profile.userId;
        statusmsg = profile.statusMessage;
        pictureUrl = profile.pictureUrl;
        checkRecord(uid);
    } else {
        if (liff.isLoggedIn()) { //eslint-disable-line
            const profile = await liff.getProfile();
            // window.location.href("https://www.facebook.com/")
            // console.log(profile);

            uname = profile.displayName;
            uid = profile.userId;
            statusmsg = profile.statusMessage;
            pictureUrl = profile.pictureUrl;
            checkRecord(uid);    
        } else {
            liff.login();
        }
    }

    // return {
        console.log(uid);
        // Name: uname,
        // UserID: uid,
        // Status: statusmsg,
        // Pic: pictureUrl,  
    // };
};
