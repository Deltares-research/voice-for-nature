
function generateUID() {
 const timestamp = Date.now().toString(36);
 const randomPart = Math.random().toString(36).substring(2, 10);
 return `uid_${timestamp}_${randomPart}`;
}

export default generateUID;
