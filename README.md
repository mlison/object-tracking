# Object tracking with Node.js and OpenCV

Proof of concept implementation of tracking object from web camera using node.js and [OpenCV](http://opencv.org/).

Detection uses HAAR definitions to target objects, just plug in your own and you're set to go.

Two classifiers are included in the repository, one for face detection (works fine) and a hot dog classifier (poorly trained). OpenCV also comes with a few predefined classifiers, and there's plenty more to be found on the internet.

## prerequisities

You need to have OpenCV binaries install before you install node bindings.
I also suggest a recent enough version of node (this was tested on 7.10).

## get started

```
npm i
node .
```

You should see notifications about any detections in your console. Each object will be circled, and the resulting image will be stored in ```screencaps/``` folder

# classifier training

You can train you own classifiers using tools provided by OpenCV. [mrnugget](https://github.com/mrnugget) wrote down a very practical [guide on haar classifier training](https://github.com/mrnugget/opencv-haar-classifier-training).

For more on the topic, check out Torsten Ball's [blogpost](http://coding-robin.de/2013/07/22/train-your-own-opencv-haar-classifier.html) on the same topic - there's plenty more material in the references section at the end.
