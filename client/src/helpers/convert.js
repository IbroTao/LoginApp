
/**image into base64 */
export default function convertToBase64(file) {
    console.log('Converting to Base 64')
    return new Promise((resolve, reject) => {
        const fileReader =  new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            console.log('Conversion successful')
            resolve(fileReader.result)
        };

        fileReader.onerror = (error) => {
            console.log("Conversion error:", error)
            reject(error)
        }
    })
}