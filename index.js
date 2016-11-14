const cv = require('opencv')
const camera = new cv.VideoCapture(0)

const classifiers = {
  face: './classifiers/face.xml',

  // local training
  trained: '../opencv-haar-classifier-training/classifier/cascade.xml',

  // hot dog classifier, trained on a _very_ small image set
  hotdogStage0: './classifiers/hotdog-stage0.xml'
}

const detect = function(err, im) {
  if (err) throw err

  im.detectObject(classifiers.face, {}, function(err, detectedObjects) {
    if (err) throw err

    // draw circles around any detected objects in the picture
    detectedObjects.forEach(detectedObject => {
      im.ellipse(
        detectedObject.x + detectedObject.width / 2,
        detectedObject.y + detectedObject.height / 2,
        detectedObject.width / 2, detectedObject.height / 2
      )
    })

    if (detectedObjects.length) {
      console.log(`tracking ${detectedObjects.length} object(s)`)
      im.save(`./screencaps/${Date.now()}.png`)
    }
  })
}

// read and detect input from camera every second
setInterval(() => camera.read(detect), 1000)

// example: read input from an image
// cv.readImage('./hotdog.jpg', detect)
