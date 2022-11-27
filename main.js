prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XthNUWBxC/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  function Check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }
  function gotResult(error, results)
  {
    if(error)
    {
      console.error(error)
    }
    else {
      if (results[0].label == "Thumbs Up")
      {
        document.getElementById("update_gesture").innerHTML = "&#128077;&nbsp;- Great Vibes!"
      }
      if (results[0].label == "Rock On")
      {
        document.getElementById("update_gesture").innerHTML = "&#129304;&nbsp;- Rad!"
      }
      if (results[0].label == "Cross Fingers")
      {
        document.getElementById("update_gesture").innerHTML = "&#129304;&nbsp; - You've got the cooties!"
      }
      if (results[0].label == "Fist Bump")
      {
        document.getElementById("update_gesture").innerHTML = "&#129308;&nbsp;- Yo!"
      }
      if (results[0].label == "Fist Up")
      {
        document.getElementById("update_gesture").innerHTML = "&#9994;&nbsp;- Resistance!"
      }
      if (results[0].label == "Victory")
      {
        document.getElementById("update_gesture").innerHTML = "&#9996;&nbsp; - I win again!"
      }
      if (results[0].label == "Thumbs Down")
      {
        document.getElementById("update_gesture").innerHTML = "&#128078;&nbsp;- Not cool man!"
      }
      if (results[0].label == "Vulcan Salute")
      {
        document.getElementById("update_gesture").innerHTML = "&#128406;&nbsp;- I am one of you!"
      }
      if (results[1].label == "Thumbs Up")
      {
        document.getElementById("update_gesture2").innerHTML = "&#128077;&nbsp;- Great Vibes!"
      }
      if (results[1].label == "Rock On")
      {
        document.getElementById("update_gesture2").innerHTML = "&#129304;&nbsp;- Rad!"
      }
      if (results[1].label == "Cross Fingers  ")
      {
        document.getElementById("update_gesture2").innerHTML = "&#129304;&nbsp; - You've got the cooties!"
      }
      if (results[1].label == "Fist Bump")
      {
        document.getElementById("update_gesture2").innerHTML = "&#129308;&nbsp;- Yo!"
      }
      if (results[1].label == "Fist Up")
      {
        document.getElementById("update_gesture2").innerHTML = "&#9994;&nbsp;- Resistance!"
      }
      if (results[1].label == "Victory")
      {
        document.getElementById("update_gesture2").innerHTML = "&#9996;&nbsp; - I win again!"
      }
      if (results[1].label == "Thumbs Down")
      {
        document.getElementById("update_gesture2").innerHTML = "&#128078;&nbsp;- Not cool man!"
      }
      if (results[1].label == "Vulcan Salute")
      {
        document.getElementById("update_gesture2").innerHTML = "&#128406;&nbsp;- I am one of you!"
      }
      }
  }