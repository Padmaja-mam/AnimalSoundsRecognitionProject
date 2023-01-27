function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/H2yZ0CXtO/model.json', modelReady);
}

function modelReady()
{
  classifier.classify( gotResults);
}

function gotResults(error, results)

 {
  if (error) 
  {
    console.error(error);
  } 
  else
   {
    console.log(results);

    document.getElementById("result_label").innerHTML = 'Sound : '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy : '+ (results[0].confidence*100).toFixed(2)+" %";
    
    img = document.getElementById('sound1');

    if(results[0].label == "dog")
    {
      img.src = 'dog1.gif';
    }

    else if(results[0].label == "cat")
    {
      img.src = 'Cat1.gif';
    }

    else if(results[0].label == "crow")
    {
      img.src = 'crow.gif';
    }

    else if(results[0].label == "cock")
    {
      img.src = 'hen.gif';
    }

    else if(results[0].label == "Background Noise")
    {
      img.src = 'bgnoise.png';
    }

  }
}
