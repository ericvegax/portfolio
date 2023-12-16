/**
 * This file handles everything pertaining to the Flash API
 */
function getWebScreenshot(url) {
    return (`https://api.apiflash.com/v1/urltoimage?access_key=b0554df07de5470589c1e33a57aafb41&wait_until=page_loaded&url=${url}`);
}
export default getWebScreenshot;