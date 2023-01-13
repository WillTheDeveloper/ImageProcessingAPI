import {Image} from "image-js";

export async function resize(image, width) {
    const { Image } = require('image-js');
    let resized = await Image.load(image)
        .resize({ width: size });
    return resized.save(image);
}

export default resize;