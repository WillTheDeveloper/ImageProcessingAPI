const { Image } = require('image-js');

execute().catch(console.error);

async function execute() {
    let image = await Image.load('./Source/image01.JPG');
    let grey = image
        .grey() // convert the image to greyscale.
        .resize({ width: 200 }); // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.; // rotate the image clockwise by 30 degrees.
    return grey.save('./Target/image01-woop.JPG');
}