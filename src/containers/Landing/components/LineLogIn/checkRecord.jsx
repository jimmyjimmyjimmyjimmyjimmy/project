const axios = require('axios');

async function checkRecord(UID) {
    const res = await
    axios.get(
        'https://aae8-124-122-187-7.ap.ngrok.io/beacon-project-9ba72/asia-southeast2/app/login',
        { params: { userId: UID } },
    );
    console.log(res);
    return res;
}

export default checkRecord;
