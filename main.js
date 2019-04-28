
var isSaving = false;

function save() {
	isSaving = true;
    var saveString = JSON.stringify(game);
    var saveGame = JSON.parse(saveString);
	isSaving = false;
}

  function load()
  {
    var savedata;
    try 
    {
      
      var loadsave = localStorage.getItem("MC");
    }
    catch(e) {}
    
    if (loadsave !== null) savedata = JSON.parse(loadsave);
    
    //update game with loaded values
  }
