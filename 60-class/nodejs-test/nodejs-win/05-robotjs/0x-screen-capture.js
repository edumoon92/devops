var Jimp = require('jimp');
var robot = require('robotjs');

var screenCaptureToFile = function(path) {
    return new Promise((resolve, reject) => {
        try {
            var picture = robot.screen.capture();
            var image = new Jimp(picture.width, picture.height, function(err, img) {
                img.bitmap.data = picture.image;
                img.getBuffer(Jimp.MIME_PNG, (err, png) => {
                    image.write(path, resolve);
                });
            });
        } catch (e) {
            console.error(e);
            reject(e);
        }
    })
}

screenCaptureToFile('test.png');