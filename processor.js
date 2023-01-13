import {Image} from "image-js";

export async function resize(image, width) {
    const { Image } = require('image-js');
    let resized = await (await Image.load(image))
        .resize({ width: width });
    return resized.save(image);
}

export default resize;